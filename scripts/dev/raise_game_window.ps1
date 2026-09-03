<#
.SYNOPSIS
    Raises the dev-runtime Minecraft window once it appears.

.DESCRIPTION
    The GTE dev runtime launches with Forge's early progress window disabled
    (`earlyWindowControl = false` plus -Dfml.earlyprogresswindow=false). That is
    mandatory: with Embeddium/Oculus in modLocalRuntime, `fmlearlywindow` creates
    a second GLFW/OpenGL context on a worker thread and deadlocks the render
    thread on NVIDIA GPUs (see .agents/skills/gte-workflow/SKILL.md, Case 7).

    The side effect is that no window exists for the first ~25 seconds of the
    run: GLFW only creates it inside Minecraft.<init>, long after the user has
    clicked back into their editor or browser. At that point the game JVM is a
    background process spawned by the Gradle daemon, so Windows refuses its
    SetForegroundWindow call (foreground lock). The window is created *behind*
    the active window and, at Minecraft's default 854x480 on a 4K display, is
    completely covered - the run looks like "the window never popped up".

    This helper polls for that window and pulls it to the front. Z-order changes
    via SetWindowPos are not subject to the foreground lock, so the raise always
    works; activation (keyboard focus) is attempted afterwards on a best-effort
    basis and falls back to flashing the taskbar button.

    Windows-only, dev-runtime-only, and never part of a shipped artifact.
#>
[CmdletBinding()]
param(
    # Give up after this long. Full-pack cold starts need ~70 s; a Gradle
    # rebuild of gtecore/gtm-reborn beforehand can add several minutes.
    [int]$TimeoutSeconds = 900,

    [int]$PollMilliseconds = 400,

    # Only java processes whose command line contains this marker are considered,
    # so a Minecraft instance from a launcher is never grabbed by mistake.
    [string]$CommandLineFilter = 'gte-dev-runtime',

    # Consider java processes that were already running when this script started.
    # Off by default: the point is to catch the window of the run being launched.
    [switch]$IncludeExisting,

    [switch]$Quiet
)

$ErrorActionPreference = 'Stop'
$startedAt = Get-Date

function Write-Step([string]$Message) {
    if (-not $Quiet) {
        Write-Host ("[{0:HH:mm:ss}] [raise-window] {1}" -f (Get-Date), $Message)
    }
}

if ($env:OS -ne 'Windows_NT') {
    Write-Step 'Not Windows - nothing to do.'
    exit 0
}

Add-Type -Namespace GteWindowRaise -Name Native -MemberDefinition @'
[DllImport("user32.dll")] public static extern bool EnumWindows(EnumWindowsProc cb, IntPtr lParam);
public delegate bool EnumWindowsProc(IntPtr hWnd, IntPtr lParam);
[DllImport("user32.dll")] public static extern uint GetWindowThreadProcessId(IntPtr hWnd, out uint pid);
[DllImport("user32.dll")] public static extern bool IsWindowVisible(IntPtr hWnd);
[DllImport("user32.dll")] public static extern bool IsIconic(IntPtr hWnd);
[DllImport("user32.dll", CharSet = CharSet.Unicode)] public static extern int GetWindowTextW(IntPtr hWnd, System.Text.StringBuilder text, int max);
[DllImport("user32.dll", CharSet = CharSet.Unicode)] public static extern int GetClassNameW(IntPtr hWnd, System.Text.StringBuilder text, int max);
[DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr hWnd, out RECT rect);
[DllImport("user32.dll")] public static extern bool SetWindowPos(IntPtr hWnd, IntPtr insertAfter, int x, int y, int cx, int cy, uint flags);
[DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr hWnd, int cmd);
[DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr hWnd);
[DllImport("user32.dll")] public static extern bool BringWindowToTop(IntPtr hWnd);
[DllImport("user32.dll")] public static extern IntPtr GetForegroundWindow();
[DllImport("user32.dll")] public static extern bool AttachThreadInput(uint attachTo, uint attachFrom, bool attach);
[DllImport("user32.dll")] public static extern void SwitchToThisWindow(IntPtr hWnd, bool altTab);
[DllImport("user32.dll")] public static extern bool FlashWindowEx(ref FLASHWINFO info);
[DllImport("user32.dll", SetLastError = true)] public static extern IntPtr SendMessageTimeout(IntPtr hWnd, uint msg, IntPtr wParam, IntPtr lParam, uint flags, uint timeoutMs, out UIntPtr result);
[DllImport("kernel32.dll")] public static extern uint GetCurrentThreadId();
[StructLayout(LayoutKind.Sequential)] public struct RECT { public int Left, Top, Right, Bottom; }
[StructLayout(LayoutKind.Sequential)] public struct FLASHWINFO { public uint cbSize; public IntPtr hwnd; public uint dwFlags; public uint uCount; public uint dwTimeout; }
'@

$HWND_TOPMOST    = [IntPtr](-1)
$HWND_NOTOPMOST  = [IntPtr](-2)
$SWP_NOSIZE      = 0x0001
$SWP_NOMOVE      = 0x0002
$SWP_SHOWWINDOW  = 0x0040
$SWP_ASYNCWINDOWPOS = 0x4000
$SW_RESTORE      = 9

function Get-CandidatePids {
    $procs = Get-CimInstance -ClassName Win32_Process -Filter "Name = 'java.exe' OR Name = 'javaw.exe'" -ErrorAction SilentlyContinue
    $result = @()
    foreach ($p in $procs) {
        if (-not $p.CommandLine) { continue }
        if ($p.CommandLine -notlike "*$CommandLineFilter*") { continue }
        if (-not $IncludeExisting) {
            # 30 s of slack: Gradle forks the JVM some time after this script starts.
            if ($p.CreationDate -and $p.CreationDate -lt $startedAt.AddSeconds(-30)) { continue }
        }
        $result += [int]$p.ProcessId
    }
    return $result
}

function Find-GameWindow([int[]]$Pids) {
    if ($Pids.Count -eq 0) { return [IntPtr]::Zero }
    # The EnumWindows callback runs in its own scope, so both the filter input and
    # the result have to live at script scope to be reachable from inside it.
    $script:targetPids = $Pids
    $script:found = [IntPtr]::Zero
    $callback = [GteWindowRaise.Native+EnumWindowsProc] {
        param($hWnd, $lParam)
        $owner = 0
        [void][GteWindowRaise.Native]::GetWindowThreadProcessId($hWnd, [ref]$owner)
        if ($script:targetPids -notcontains [int]$owner) { return $true }
        if (-not [GteWindowRaise.Native]::IsWindowVisible($hWnd)) { return $true }

        $cls = New-Object System.Text.StringBuilder 256
        [void][GteWindowRaise.Native]::GetClassNameW($hWnd, $cls, 256)
        # GLFW3 registers its windows under the "GLFW30" class. It also creates a
        # hidden helper window of the same class ("GLFW message window"), which the
        # visibility and size checks filter out.
        if ($cls.ToString() -ne 'GLFW30') { return $true }

        $rect = New-Object GteWindowRaise.Native+RECT
        [void][GteWindowRaise.Native]::GetWindowRect($hWnd, [ref]$rect)
        if (($rect.Right - $rect.Left) -lt 200 -or ($rect.Bottom - $rect.Top) -lt 200) { return $true }

        $script:found = $hWnd
        return $false
    }
    [void][GteWindowRaise.Native]::EnumWindows($callback, [IntPtr]::Zero)
    return $script:found
}

function Get-WindowTitle([IntPtr]$hWnd) {
    $sb = New-Object System.Text.StringBuilder 512
    [void][GteWindowRaise.Native]::GetWindowTextW($hWnd, $sb, 512)
    return $sb.ToString()
}

function Wait-WindowResponsive([IntPtr]$hWnd, [int]$MaxSeconds = 180) {
    # Minecraft's render thread does not pump messages while it bakes models and
    # reloads resources, so every synchronous window call blocks for as long as
    # that takes. Wait for the window to answer a WM_NULL probe before touching
    # its input queue: attaching to the foreground thread and then blocking would
    # freeze input for whichever app the user is currently typing in.
    $limit = (Get-Date).AddSeconds($MaxSeconds)
    $result = [UIntPtr]::Zero
    while ((Get-Date) -lt $limit) {
        $ok = [GteWindowRaise.Native]::SendMessageTimeout($hWnd, 0x0000, [IntPtr]::Zero, [IntPtr]::Zero, 0x0002, 250, [ref]$result)
        if ($ok -ne [IntPtr]::Zero) { return $true }
        Start-Sleep -Milliseconds 250
    }
    return $false
}

function Raise-Window([IntPtr]$hWnd) {
    if ([GteWindowRaise.Native]::IsIconic($hWnd)) {
        [void][GteWindowRaise.Native]::ShowWindow($hWnd, $SW_RESTORE)
    }

    # Z-order first. SetWindowPos is not gated by the foreground lock, so the
    # TOPMOST -> NOTOPMOST round trip reliably lifts the window above every other
    # normal window even though the JVM is a background process. SWP_ASYNCWINDOWPOS
    # posts the request instead of sending it, so a busy render thread cannot block
    # this helper.
    $flags = $SWP_NOSIZE -bor $SWP_NOMOVE -bor $SWP_SHOWWINDOW -bor $SWP_ASYNCWINDOWPOS
    [void][GteWindowRaise.Native]::SetWindowPos($hWnd, $HWND_TOPMOST, 0, 0, 0, 0, $flags)
    [void][GteWindowRaise.Native]::SetWindowPos($hWnd, $HWND_NOTOPMOST, 0, 0, 0, 0, $flags)

    if (-not (Wait-WindowResponsive $hWnd)) {
        Write-Step 'Window is still not pumping messages; skipping the focus attempt.'
        return $false
    }

    # Then try for keyboard focus. Borrowing the foreground thread's input queue
    # is what lets SetForegroundWindow succeed from outside that process.
    $foreground = [GteWindowRaise.Native]::GetForegroundWindow()
    $ownerPid = 0
    $foregroundThread = 0
    if ($foreground -ne [IntPtr]::Zero) {
        $foregroundThread = [GteWindowRaise.Native]::GetWindowThreadProcessId($foreground, [ref]$ownerPid)
    }
    $selfThread = [GteWindowRaise.Native]::GetCurrentThreadId()
    $attached = $false
    if ($foregroundThread -ne 0 -and $foregroundThread -ne $selfThread) {
        $attached = [GteWindowRaise.Native]::AttachThreadInput($foregroundThread, $selfThread, $true)
    }
    try {
        [void][GteWindowRaise.Native]::BringWindowToTop($hWnd)
        [void][GteWindowRaise.Native]::SetForegroundWindow($hWnd)
        [GteWindowRaise.Native]::SwitchToThisWindow($hWnd, $true)
    } finally {
        if ($attached) {
            [void][GteWindowRaise.Native]::AttachThreadInput($foregroundThread, $selfThread, $false)
        }
    }

    if ([GteWindowRaise.Native]::GetForegroundWindow() -ne $hWnd) {
        # Focus was denied; at least flash the taskbar button (FLASHW_ALL | FLASHW_TIMERNOFG).
        $info = New-Object GteWindowRaise.Native+FLASHWINFO
        $info.cbSize = [System.Runtime.InteropServices.Marshal]::SizeOf($info)
        $info.hwnd = $hWnd
        $info.dwFlags = 0x00000003 -bor 0x0000000C
        $info.uCount = 3
        $info.dwTimeout = 0
        [void][GteWindowRaise.Native]::FlashWindowEx([ref]$info)
        return $false
    }
    return $true
}

Write-Step ("Waiting up to {0}s for the dev client window (java command line matching '*{1}*')..." -f $TimeoutSeconds, $CommandLineFilter)

$deadline = $startedAt.AddSeconds($TimeoutSeconds)
$handle = [IntPtr]::Zero
while ((Get-Date) -lt $deadline) {
    $handle = Find-GameWindow (Get-CandidatePids)
    if ($handle -ne [IntPtr]::Zero) { break }
    Start-Sleep -Milliseconds $PollMilliseconds
}

if ($handle -eq [IntPtr]::Zero) {
    Write-Step 'Timed out without finding a game window - leaving the desktop alone.'
    exit 0
}

$title = Get-WindowTitle $handle
Write-Step ("Found window 0x{0:X} '{1}' after {2:N1}s - raising it." -f [int64]$handle, $title, ((Get-Date) - $startedAt).TotalSeconds)

# Give GLFW a moment to finish sizing/positioning before touching the Z-order.
Start-Sleep -Milliseconds 300
$focused = Raise-Window $handle

if ($focused) {
    Write-Step 'Window is now in front and focused.'
} else {
    Write-Step 'Window raised to the front; Windows denied focus, so its taskbar button was flashed instead.'
}
exit 0
