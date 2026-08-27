#requires -version 5.1
<#
.SYNOPSIS
    GTE Lazy Pack standalone launcher (player mode).

.DESCRIPTION
    run_game.bat in the source tree hot-compiles the mods through Gradle. Inside
    the distributed Lazy Pack there is no Gradle wrapper and no source tree, only
    a prepared `.minecraft` folder, so that path cannot work. This script is the
    player-mode half: it provisions a real vanilla + Forge installation next to
    the pack and launches it directly, so double-clicking run_game.bat actually
    starts the game without any launcher.

    What it does, all into the pack's own `.minecraft` (standard layout, so PCL2
    and HMCL can still be pointed at the same folder):
      1. resolve the Minecraft 1.20.1 version manifest and download client.jar
      2. run the official Forge 47.3.0 installer in --installClient mode
      3. download every required library and native, extracting natives
      4. download the asset index and all asset objects
      5. merge the Forge and vanilla version JSONs, expand the argument
         placeholders, and exec java

    Everything is resumable: files already present with the expected size are
    skipped, so a second launch goes straight to the game.

.NOTES
    Offline/local play only. No account credentials are collected, sent, or
    stored; the game is started with an offline profile derived from the chosen
    name, exactly like the offline mode of any launcher.
#>
[CmdletBinding()]
param(
    # Pack root (the folder containing `.minecraft`). Defaults to this script's folder.
    [string] $PackRoot,

    # JDK 21 home. run_game.bat resolves this and passes it in.
    [string] $JavaHome = $env:JAVA_HOME,

    # Offline player name.
    [string] $Username = $env:GTE_USERNAME,

    # Game heap, e.g. 8G. run_game.bat derives this from installed RAM.
    [string] $MaxMemory = '8G',

    # Prefer BMCLAPI mirrors (fast in mainland China). run_game.bat passes this
    # when it did NOT detect a local proxy.
    [switch] $UseMirror,

    # Provision everything but do not start the game (used by CI smoke tests).
    [switch] $PrepareOnly,

    # Concurrent downloads.
    [int] $MaxConcurrency = 16
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
[Net.ServicePointManager]::DefaultConnectionLimit = 64

# Single source of truth for both versions is gte/pack.toml.
#
#   * running from the source checkout -> gte/pack.toml is read below;
#   * running from a Lazy Pack         -> scripts/build_lazy_pack.py substitutes
#     the resolved values into these two lines while packing, so the shipped
#     copy always matches the pack it ships with.
#
# Keep the assignments on one line each and in this exact shape; the packer
# rewrites them with a regex and fails the build if either stops matching.
$MC_VERSION    = '1.20.1'
$FORGE_VERSION = '47.4.1'
$FORGE_ID      = "$MC_VERSION-forge-$FORGE_VERSION"

if (-not $PackRoot)  { $PackRoot = $PSScriptRoot }
if (-not $Username)  { $Username = 'Player' }

$PackRoot   = (Resolve-Path -LiteralPath $PackRoot).Path

# In the source checkout, always defer to pack.toml so the two cannot drift.
$packToml = Join-Path $PackRoot 'gte\pack.toml'
if (Test-Path -LiteralPath $packToml) {
    $tomlText = Get-Content -LiteralPath $packToml -Raw
    $mMc = [regex]::Match($tomlText, '(?m)^\s*minecraft\s*=\s*"([^"]+)"')
    $mFg = [regex]::Match($tomlText, '(?m)^\s*forge\s*=\s*"([^"]+)"')
    if ($mMc.Success) { $MC_VERSION = $mMc.Groups[1].Value }
    if ($mFg.Success) { $FORGE_VERSION = $mFg.Groups[1].Value }
    $FORGE_ID = "$MC_VERSION-forge-$FORGE_VERSION"
}

$GameDir    = Join-Path $PackRoot '.minecraft'
$VersionsDir = Join-Path $GameDir 'versions'
$LibDir     = Join-Path $GameDir 'libraries'
$AssetsDir  = Join-Path $GameDir 'assets'
$NativesDir = Join-Path $VersionsDir "$MC_VERSION\natives-windows"

# ---------------------------------------------------------------------------
# Output helpers
# ---------------------------------------------------------------------------
function Write-Step  ([string]$m) { Write-Host ""; Write-Host ">> $m" -ForegroundColor Cyan }
function Write-Info  ([string]$m) { Write-Host "   $m" }
function Write-Ok    ([string]$m) { Write-Host "   [OK] $m" -ForegroundColor Green }
function Write-Warn2 ([string]$m) { Write-Host "   [!] $m" -ForegroundColor Yellow }

function Fail ([string]$m) {
    Write-Host ""
    Write-Host "========================================================" -ForegroundColor Red
    Write-Host " [Error] $m" -ForegroundColor Red
    Write-Host "========================================================" -ForegroundColor Red
    exit 1
}

# ---------------------------------------------------------------------------
# Mirrors
# ---------------------------------------------------------------------------
$BMCL = 'https://bmclapi2.bangbang93.com'

function Get-UrlCandidates ([string]$Url) {
    # Returns the url list to try in order. With -UseMirror the BMCLAPI form is
    # tried first and the original kept as fallback, so a mirror outage degrades
    # to a slow download instead of a failure.
    $mirror = $null
    switch -Regex ($Url) {
        '^https?://libraries\.minecraft\.net/'      { $mirror = $Url -replace '^https?://libraries\.minecraft\.net',      "$BMCL/maven" }
        '^https?://maven\.minecraftforge\.net/'     { $mirror = $Url -replace '^https?://maven\.minecraftforge\.net',     "$BMCL/maven" }
        '^https?://files\.minecraftforge\.net/maven/' { $mirror = $Url -replace '^https?://files\.minecraftforge\.net/maven', "$BMCL/maven" }
        '^https?://resources\.download\.minecraft\.net/' { $mirror = $Url -replace '^https?://resources\.download\.minecraft\.net', "$BMCL/assets" }
        '^https?://(launcher|piston-data|piston-meta|launchermeta)\.mojang\.com/' { $mirror = $Url -replace '^https?://(launcher|piston-data|piston-meta|launchermeta)\.mojang\.com', $BMCL }
    }
    if ($UseMirror -and $mirror) { return @($mirror, $Url) }
    if ($mirror)                 { return @($Url, $mirror) }
    return @($Url)
}

# ---------------------------------------------------------------------------
# HTTP
# ---------------------------------------------------------------------------
Add-Type -AssemblyName System.Net.Http | Out-Null
$script:Http = New-Object System.Net.Http.HttpClient
$script:Http.Timeout = [TimeSpan]::FromMinutes(10)
$script:Http.DefaultRequestHeaders.Add('User-Agent', 'GTE-LazyPack-Launcher/1.0')

function Get-StringOnce ([string]$Url) {
    foreach ($u in Get-UrlCandidates $Url) {
        try   { return $script:Http.GetStringAsync($u).GetAwaiter().GetResult() }
        catch { Write-Warn2 "fetch failed: $u" }
    }
    Fail "Could not download $Url. Check your network connection and retry."
}

function Get-Json ([string]$Url) { Get-StringOnce $Url | ConvertFrom-Json }

function Get-Sha1 ([string]$Path) {
    $sha = [System.Security.Cryptography.SHA1]::Create()
    try {
        $fs = [System.IO.File]::OpenRead($Path)
        try { return ([BitConverter]::ToString($sha.ComputeHash($fs)) -replace '-','').ToLowerInvariant() }
        finally { $fs.Dispose() }
    } finally { $sha.Dispose() }
}

function Test-Cached {
    param([string]$Path, [long]$Size, [string]$Sha1)
    if (-not (Test-Path -LiteralPath $Path)) { return $false }
    # Size is the cheap check and is what makes repeat launches instant. Hashing
    # every asset object on each start would add minutes for no safety gain,
    # since anything freshly downloaded IS hash-verified below.
    if ($Size -gt 0) { return ((Get-Item -LiteralPath $Path).Length -eq $Size) }
    if ($Sha1)       { return ((Get-Sha1 $Path) -eq $Sha1.ToLowerInvariant()) }
    return $true
}

function Save-File {
    param([string]$Url, [string]$Path, [long]$Size = 0, [string]$Sha1)
    if (Test-Cached -Path $Path -Size $Size -Sha1 $Sha1) { return $true }
    $dir = Split-Path -Parent $Path
    if (-not (Test-Path -LiteralPath $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
    foreach ($u in Get-UrlCandidates $Url) {
        for ($attempt = 1; $attempt -le 2; $attempt++) {
            try {
                $bytes = $script:Http.GetByteArrayAsync($u).GetAwaiter().GetResult()
                if ($Sha1) {
                    $sha = [System.Security.Cryptography.SHA1]::Create()
                    try { $got = ([BitConverter]::ToString($sha.ComputeHash($bytes)) -replace '-','').ToLowerInvariant() }
                    finally { $sha.Dispose() }
                    if ($got -ne $Sha1.ToLowerInvariant()) { throw "sha1 mismatch" }
                }
                [System.IO.File]::WriteAllBytes($Path, $bytes)
                return $true
            } catch { Start-Sleep -Milliseconds (250 * $attempt) }
        }
    }
    return $false
}

function Save-FileSet {
    <#
      Downloads a batch genuinely concurrently. Items: @{ Url; Path; Size; Sha1 }.
      PowerShell 5.1 has no ForEach-Object -Parallel, so HttpClient tasks are
      started in slices of $MaxConcurrency and awaited together. Assets alone are
      ~2400 objects, so serial downloads would add many minutes to first launch.
    #>
    param([object[]]$Items, [string]$Label)

    $todo = @($Items | Where-Object { -not (Test-Cached -Path $_.Path -Size $_.Size -Sha1 $_.Sha1) })
    $have = $Items.Count - $todo.Count
    if ($todo.Count -eq 0) { Write-Ok "$Label : all $($Items.Count) file(s) already present"; return }
    Write-Info "$Label : $($todo.Count) to download, $have already present"

    $done = 0
    $retry = New-Object System.Collections.ArrayList
    for ($i = 0; $i -lt $todo.Count; $i += $MaxConcurrency) {
        $slice = @($todo[$i..([Math]::Min($i + $MaxConcurrency - 1, $todo.Count - 1))])

        # Fire the whole slice off before awaiting any of it.
        $pending = @()
        foreach ($it in $slice) {
            $url = (Get-UrlCandidates $it.Url)[0]
            $pending += [pscustomobject]@{
                Item = $it
                Task = $script:Http.GetByteArrayAsync($url)
            }
        }

        foreach ($p in $pending) {
            try {
                $bytes = $p.Task.GetAwaiter().GetResult()
                if ($p.Item.Sha1) {
                    $sha = [System.Security.Cryptography.SHA1]::Create()
                    try { $got = ([BitConverter]::ToString($sha.ComputeHash($bytes)) -replace '-','').ToLowerInvariant() }
                    finally { $sha.Dispose() }
                    if ($got -ne $p.Item.Sha1.ToLowerInvariant()) { throw "sha1 mismatch" }
                }
                $dir = Split-Path -Parent $p.Item.Path
                if (-not (Test-Path -LiteralPath $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
                [System.IO.File]::WriteAllBytes($p.Item.Path, $bytes)
            } catch {
                # Fall back to the serial path, which walks every mirror candidate.
                [void]$retry.Add($p.Item)
            }
            $done++
        }
        $pct = [int](100 * $done / $todo.Count)
        Write-Host ("`r   $Label : $done/$($todo.Count) ($pct%)   ") -NoNewline
    }
    Write-Host ""

    $failed = New-Object System.Collections.ArrayList
    if ($retry.Count -gt 0) {
        Write-Info "$Label : retrying $($retry.Count) file(s) through mirror fallback..."
        foreach ($it in $retry) {
            if (-not (Save-File -Url $it.Url -Path $it.Path -Size $it.Size -Sha1 $it.Sha1)) {
                [void]$failed.Add($it.Url)
            }
        }
    }

    if ($failed.Count -gt 0) {
        Write-Warn2 "$($failed.Count) file(s) failed:"
        $failed | Select-Object -First 5 | ForEach-Object { Write-Warn2 "  $_" }
        Fail "$Label incomplete. Re-run run_game.bat to resume the download."
    }
    Write-Ok "$Label complete"
}

# ---------------------------------------------------------------------------
# Version JSON handling
# ---------------------------------------------------------------------------
function Test-Rules ([object]$Rules) {
    # Minimal launcher-spec rule evaluation for this platform (Windows x64).
    if (-not $Rules) { return $true }
    $allow = $false
    foreach ($r in $Rules) {
        $applies = $true
        if ($r.PSObject.Properties.Name -contains 'os' -and $r.os) {
            if ($r.os.PSObject.Properties.Name -contains 'name' -and $r.os.name -and $r.os.name -ne 'windows') { $applies = $false }
            if ($r.os.PSObject.Properties.Name -contains 'arch' -and $r.os.arch -and $r.os.arch -ne 'x86_64') { $applies = $false }
        }
        # Feature-gated entries (demo mode, custom resolution) are never enabled here.
        if ($r.PSObject.Properties.Name -contains 'features' -and $r.features) { $applies = $false }
        if ($applies) { $allow = ($r.action -eq 'allow') }
    }
    return $allow
}

function Get-LibraryKey ([string]$Name) {
    # group:artifact[:classifier] — version is deliberately excluded so a Forge
    # library overrides the vanilla one of the same coordinate.
    $p = $Name -split ':'
    if ($p.Count -ge 4) { return "$($p[0]):$($p[1]):$($p[3])" }
    return "$($p[0]):$($p[1])"
}

function ConvertTo-MavenPath ([string]$Name) {
    $p = $Name -split ':'
    $groupPath = $p[0] -replace '\.','/'
    $artifact = $p[1]; $version = $p[2]
    $file = "$artifact-$version"
    if ($p.Count -ge 4) { $file = "$file-$($p[3])" }
    return "$groupPath/$artifact/$version/$file.jar"
}

function Read-VersionJson ([string]$Id) {
    $p = Join-Path $VersionsDir "$Id\$Id.json"
    if (-not (Test-Path -LiteralPath $p)) { Fail "Version file missing: $p" }
    return Get-Content -LiteralPath $p -Raw -Encoding UTF8 | ConvertFrom-Json
}

function Get-ArgList ([object]$Node) {
    $out = New-Object System.Collections.ArrayList
    if (-not $Node) { return $out }
    foreach ($a in $Node) {
        if ($a -is [string]) { [void]$out.Add($a); continue }
        if ($a.PSObject.Properties.Name -contains 'rules') {
            if (-not (Test-Rules $a.rules)) { continue }
        }
        foreach ($v in @($a.value)) { [void]$out.Add([string]$v) }
    }
    return $out
}

# ---------------------------------------------------------------------------
# Provisioning
# ---------------------------------------------------------------------------
function Initialize-Vanilla {
    Write-Step "Minecraft $MC_VERSION"
    $vjson = Join-Path $VersionsDir "$MC_VERSION\$MC_VERSION.json"
    $vjar  = Join-Path $VersionsDir "$MC_VERSION\$MC_VERSION.jar"

    if (-not (Test-Path -LiteralPath $vjson)) {
        Write-Info "resolving version manifest..."
        $manifest = Get-Json 'https://piston-meta.mojang.com/mc/game/version_manifest_v2.json'
        $entry = $manifest.versions | Where-Object { $_.id -eq $MC_VERSION } | Select-Object -First 1
        if (-not $entry) { Fail "Minecraft $MC_VERSION not found in the version manifest." }
        if (-not (Save-File -Url $entry.url -Path $vjson -Sha1 $entry.sha1)) { Fail "Could not download the $MC_VERSION version JSON." }
    }
    Write-Ok "version JSON ready"

    $v = Read-VersionJson $MC_VERSION
    if (-not (Save-File -Url $v.downloads.client.url -Path $vjar -Size $v.downloads.client.size -Sha1 $v.downloads.client.sha1)) {
        Fail "Could not download the $MC_VERSION client jar."
    }
    Write-Ok "client jar ready ($([math]::Round($v.downloads.client.size/1MB,1)) MB)"
    return $v
}

function Initialize-Forge ([string]$JavaExe) {
    Write-Step "Forge $FORGE_VERSION"
    $forgeJson = Join-Path $VersionsDir "$FORGE_ID\$FORGE_ID.json"
    if (Test-Path -LiteralPath $forgeJson) { Write-Ok "Forge already installed"; return }

    # launcher_profiles.json must exist or the installer refuses to run.
    $profiles = Join-Path $GameDir 'launcher_profiles.json'
    if (-not (Test-Path -LiteralPath $profiles)) {
        '{"profiles":{},"selectedProfile":"","clientToken":"","authenticationDatabase":{},"launcherVersion":{"name":"gte","format":21},"settings":{}}' |
            Set-Content -LiteralPath $profiles -Encoding ascii
    }

    $installer = Join-Path $env:TEMP "forge-$MC_VERSION-$FORGE_VERSION-installer.jar"
    $url = "https://maven.minecraftforge.net/net/minecraftforge/forge/$MC_VERSION-$FORGE_VERSION/forge-$MC_VERSION-$FORGE_VERSION-installer.jar"
    Write-Info "downloading the official Forge installer..."
    if (-not (Save-File -Url $url -Path $installer)) { Fail "Could not download the Forge $FORGE_VERSION installer." }

    Write-Info "running the Forge installer (this patches the client, ~1-3 min)..."
    $log = Join-Path $env:TEMP 'gte-forge-install.log'
    $p = Start-Process -FilePath $JavaExe `
        -ArgumentList @('-jar', "`"$installer`"", '--installClient', "`"$GameDir`"") `
        -WorkingDirectory $GameDir -NoNewWindow -Wait -PassThru `
        -RedirectStandardOutput $log -RedirectStandardError "$log.err"
    if ($p.ExitCode -ne 0 -or -not (Test-Path -LiteralPath $forgeJson)) {
        if (Test-Path -LiteralPath $log) { Get-Content -LiteralPath $log -Tail 20 | ForEach-Object { Write-Warn2 $_ } }
        Fail "The Forge installer failed (exit $($p.ExitCode)). Log: $log"
    }
    Write-Ok "Forge $FORGE_VERSION installed"
}

function Initialize-Libraries ([object[]]$Libraries) {
    Write-Step "Libraries and natives"
    $items = New-Object System.Collections.ArrayList
    $nativeJars = New-Object System.Collections.ArrayList

    foreach ($lib in $Libraries) {
        if ($lib.PSObject.Properties.Name -contains 'rules' -and -not (Test-Rules $lib.rules)) { continue }

        $path = $null; $url = $null; $size = 0; $sha1 = $null
        if ($lib.PSObject.Properties.Name -contains 'downloads' -and $lib.downloads -and
            $lib.downloads.PSObject.Properties.Name -contains 'artifact' -and $lib.downloads.artifact) {
            $a = $lib.downloads.artifact
            $path = $a.path; $size = $a.size; $sha1 = $a.sha1
            $url = $a.url
            if (-not $url) { $url = "https://libraries.minecraft.net/$path" }
        } else {
            # Forge's installer writes library entries with no download block for
            # the jars it produced locally (the patched client, forge itself).
            $path = ConvertTo-MavenPath $lib.name
            $base = 'https://libraries.minecraft.net/'
            if ($lib.PSObject.Properties.Name -contains 'url' -and $lib.url) { $base = $lib.url }
            $url = "$base$path"
        }

        $full = Join-Path $LibDir ($path -replace '/','\')
        if ($lib.name -match ':natives-') { [void]$nativeJars.Add($full) }

        if (Test-Path -LiteralPath $full) { continue }
        [void]$items.Add(@{ Url = $url; Path = $full; Size = $size; Sha1 = $sha1 })
    }

    if ($items.Count -gt 0) { Save-FileSet -Items $items.ToArray() -Label 'libraries' }
    else { Write-Ok "libraries : all present" }

    # Natives must be unpacked for -Djava.library.path.
    if (-not (Test-Path -LiteralPath $NativesDir)) { New-Item -ItemType Directory -Force -Path $NativesDir | Out-Null }
    Add-Type -AssemblyName System.IO.Compression.FileSystem | Out-Null
    $extracted = 0
    foreach ($jar in $nativeJars) {
        if (-not (Test-Path -LiteralPath $jar)) { continue }
        $zip = [System.IO.Compression.ZipFile]::OpenRead($jar)
        try {
            foreach ($e in $zip.Entries) {
                if ($e.Name -notmatch '\.(dll|so|dylib)$') { continue }
                $dest = Join-Path $NativesDir $e.Name
                if (Test-Path -LiteralPath $dest) { continue }
                [System.IO.Compression.ZipFileExtensions]::ExtractToFile($e, $dest, $true)
                $extracted++
            }
        } finally { $zip.Dispose() }
    }
    Write-Ok "natives ready ($extracted newly extracted)"
}

function Initialize-Assets ([object]$Vanilla) {
    Write-Step "Game assets"
    $idx = $Vanilla.assetIndex
    $idxPath = Join-Path $AssetsDir "indexes\$($idx.id).json"
    if (-not (Save-File -Url $idx.url -Path $idxPath -Size $idx.size -Sha1 $idx.sha1)) { Fail "Could not download the asset index." }

    $index = Get-Content -LiteralPath $idxPath -Raw -Encoding UTF8 | ConvertFrom-Json
    $items = New-Object System.Collections.ArrayList
    foreach ($p in $index.objects.PSObject.Properties) {
        $h = $p.Value.hash
        $sub = $h.Substring(0,2)
        [void]$items.Add(@{
            Url  = "https://resources.download.minecraft.net/$sub/$h"
            Path = Join-Path $AssetsDir "objects\$sub\$h"
            Size = [long]$p.Value.size
            Sha1 = $h
        })
    }
    Save-FileSet -Items $items.ToArray() -Label 'assets'
    return $idx.id
}

# ---------------------------------------------------------------------------
# Launch
# ---------------------------------------------------------------------------
function Start-Game {
    param([object]$Vanilla, [string]$AssetIndexId, [string]$JavaExe)

    Write-Step "Launching GregTech Easy"
    $forge = Read-VersionJson $FORGE_ID

    # Forge libraries win over vanilla ones with the same coordinate.
    $seen = @{}
    $cp = New-Object System.Collections.ArrayList
    foreach ($lib in @($forge.libraries) + @($Vanilla.libraries)) {
        if ($lib.PSObject.Properties.Name -contains 'rules' -and -not (Test-Rules $lib.rules)) { continue }
        $key = Get-LibraryKey $lib.name
        if ($seen.ContainsKey($key)) { continue }
        $seen[$key] = $true

        if ($lib.PSObject.Properties.Name -contains 'downloads' -and $lib.downloads -and
            $lib.downloads.PSObject.Properties.Name -contains 'artifact' -and $lib.downloads.artifact) {
            $rel = $lib.downloads.artifact.path
        } else {
            $rel = ConvertTo-MavenPath $lib.name
        }
        $full = Join-Path $LibDir ($rel -replace '/','\')
        if (Test-Path -LiteralPath $full) { [void]$cp.Add($full) }
    }

    # Forge 1.17+ runs under BootstrapLauncher, which turns every classpath entry
    # into a named JPMS module and locates the patched client itself through
    # -DlibraryDirectory (libraries/net/minecraft/client/*-srg.jar plus the
    # -extra resources jar, both produced by the installer). Adding
    # versions/1.20.1.jar on top creates an automatic module "_1._20._1" that
    # exports net.minecraft.* alongside Forge's own "minecraft" module, and the
    # launch dies during module resolution with:
    #   Module minecraft contains package net.minecraft.client, module _1._20._1
    #   exports package net.minecraft.client to minecraft
    # The vanilla jar is still downloaded — the installer needs it to build the
    # patched client — it just must not be on the classpath here. Pre-1.17 Forge
    # uses the plain classpath layout and does need it.
    $modularForge = @(Get-ChildItem (Join-Path $LibDir 'net\minecraft\client') -Recurse -Filter '*-srg.jar' -ErrorAction SilentlyContinue).Count -gt 0
    if (-not $modularForge) {
        [void]$cp.Add((Join-Path $VersionsDir "$MC_VERSION\$MC_VERSION.jar"))
    }

    $repl = @{
        '${auth_player_name}'    = $Username
        '${auth_uuid}'           = (Get-OfflineUuid $Username)
        '${auth_access_token}'   = '0'
        '${auth_session}'        = '0'
        '${user_type}'           = 'legacy'
        '${user_properties}'     = '{}'
        # Microsoft-account telemetry fields. Offline play has no values for
        # these; left as literal placeholders the game receives the text
        # "${clientid}" as an argument. Empty strings are what every launcher
        # passes in offline mode.
        '${clientid}'            = ''
        '${auth_xuid}'           = ''
        '${version_name}'        = $FORGE_ID
        '${version_type}'        = 'release'
        '${game_directory}'      = $GameDir
        '${assets_root}'         = $AssetsDir
        '${assets_index_name}'   = $AssetIndexId
        '${natives_directory}'   = $NativesDir
        '${launcher_name}'       = 'GTE-LazyPack'
        '${launcher_version}'    = '1.0'
        '${library_directory}'   = $LibDir
        '${classpath_separator}' = ';'
        '${classpath}'           = ($cp -join ';')
    }
    function Expand-Placeholders ([string]$s) {
        foreach ($k in $repl.Keys) { $s = $s.Replace($k, $repl[$k]) }
        return $s
    }

    $jvmArgs = New-Object System.Collections.ArrayList
    [void]$jvmArgs.Add("-Xmx$MaxMemory")
    [void]$jvmArgs.Add('-Xms512M')
    [void]$jvmArgs.Add('-XX:+UseG1GC')
    [void]$jvmArgs.Add('-Dfile.encoding=UTF-8')
    [void]$jvmArgs.Add('-Dminecraft.launcher.brand=GTE-LazyPack')

    foreach ($a in (Get-ArgList $Vanilla.arguments.jvm)) { [void]$jvmArgs.Add((Expand-Placeholders $a)) }
    if ($forge.PSObject.Properties.Name -contains 'arguments' -and $forge.arguments -and
        $forge.arguments.PSObject.Properties.Name -contains 'jvm') {
        foreach ($a in (Get-ArgList $forge.arguments.jvm)) { [void]$jvmArgs.Add((Expand-Placeholders $a)) }
    }

    $mainClass = $forge.mainClass
    if (-not $mainClass) { $mainClass = $Vanilla.mainClass }
    [void]$jvmArgs.Add($mainClass)

    foreach ($a in (Get-ArgList $Vanilla.arguments.game)) { [void]$jvmArgs.Add((Expand-Placeholders $a)) }
    if ($forge.PSObject.Properties.Name -contains 'arguments' -and $forge.arguments -and
        $forge.arguments.PSObject.Properties.Name -contains 'game') {
        foreach ($a in (Get-ArgList $forge.arguments.game)) { [void]$jvmArgs.Add((Expand-Placeholders $a)) }
    }

    # Set-StrictMode makes `.Count` on a scalar or $null a hard error, so every
    # pipeline result that feeds a count is wrapped in @().
    $modCount = @(Get-ChildItem (Join-Path $GameDir 'mods') -Filter *.jar -ErrorAction SilentlyContinue).Count
    Write-Info "player   : $Username (offline)"
    Write-Info "heap     : $MaxMemory"
    Write-Info "mods     : $modCount jar(s)"
    Write-Info "main     : $mainClass"

    if ($PrepareOnly) {
        $argFile = Join-Path $GameDir '.gte_launch_args.txt'
        $jvmArgs | Set-Content -LiteralPath $argFile -Encoding UTF8
        Write-Ok "prepare-only: command line written to $argFile"
        return 0
    }

    Write-Host ""
    Write-Host "   Starting Minecraft. The first launch takes a few minutes." -ForegroundColor Cyan
    Write-Host ""

    # ProcessStartInfo.ArgumentList does not exist on .NET Framework, which is
    # what Windows PowerShell 5.1 runs on, so the command line is quoted by hand.
    $quoted = $jvmArgs | ForEach-Object {
        if ($_ -match '[\s"]') { '"' + ($_ -replace '(\\*)"', '$1$1\"' -replace '(\\+)$', '$1$1') + '"' } else { $_ }
    }
    $psi = New-Object System.Diagnostics.ProcessStartInfo
    $psi.FileName = $JavaExe
    $psi.Arguments = ($quoted -join ' ')
    $psi.WorkingDirectory = $GameDir
    $psi.UseShellExecute = $false
    $proc = [System.Diagnostics.Process]::Start($psi)
    $proc.WaitForExit()
    return $proc.ExitCode
}

function Get-OfflineUuid ([string]$Name) {
    # Same scheme every launcher uses for offline profiles: MD5 of
    # "OfflinePlayer:<name>" massaged into a v3 UUID, so worlds keep the same
    # player data across launches.
    $md5 = [System.Security.Cryptography.MD5]::Create()
    try { $b = $md5.ComputeHash([System.Text.Encoding]::UTF8.GetBytes("OfflinePlayer:$Name")) }
    finally { $md5.Dispose() }
    $b[6] = [byte](($b[6] -band 0x0f) -bor 0x30)
    $b[8] = [byte](($b[8] -band 0x3f) -bor 0x80)
    return ([BitConverter]::ToString($b) -replace '-','').ToLowerInvariant()
}

# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "   GregTech Easy - Lazy Pack Launcher (no launcher needed)" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Info "pack     : $PackRoot"
Write-Info "game dir : $GameDir"

if (-not (Test-Path -LiteralPath $GameDir)) {
    Fail "No .minecraft folder next to this script. Extract the whole Lazy Pack zip, keeping run_game.bat and .minecraft in the same folder."
}
if (-not $JavaHome -or -not (Test-Path -LiteralPath (Join-Path $JavaHome 'bin\java.exe'))) {
    Fail "JDK 21 not found. Start the pack through run_game.bat, which locates or downloads a JDK 21 for you."
}
$javaExe = Join-Path $JavaHome 'bin\java.exe'
Write-Info "java     : $JavaHome"
if ($UseMirror) { Write-Info "mirror   : BMCLAPI first, official as fallback" }
else            { Write-Info "mirror   : official first, BMCLAPI as fallback" }

$vanilla = Initialize-Vanilla
Initialize-Forge -JavaExe $javaExe
$forgeJson = Read-VersionJson $FORGE_ID
Initialize-Libraries -Libraries (@($forgeJson.libraries) + @($vanilla.libraries))
$assetId = Initialize-Assets -Vanilla $vanilla
$code = Start-Game -Vanilla $vanilla -AssetIndexId $assetId -JavaExe $javaExe

Write-Host ""
if ($code -eq 0) { Write-Ok "Game closed normally." }
else             { Write-Warn2 "Game exited with code $code. Check $GameDir\logs\latest.log" }
exit $code
