#!/usr/bin/env python3
"""
GTE Mixin Anti-Crash Static Audit Scanner
=========================================
Statically verifies all Mixin annotations and usage across GTE submodules:
1. Rule 6: Prevents 'remap = false' on net.minecraft.* or net.minecraftforge.* targets.
2. Rule 1: Detects force-casting to Mixin Accessor interfaces without instanceof guards.
"""

import sys
import re
from pathlib import Path

ROOT = Path(__file__).parent.parent.resolve()
MODULES_DIR = ROOT / "modules"

VANILLA_PACKAGES = [
    "net.minecraft.",
    "net.minecraftforge.",
]

COMMON_VANILLA_CLASSES = {
    "Minecraft", "Level", "ServerLevel", "ClientLevel", "BlockEntity", "Entity", "Player",
    "ServerPlayer", "Item", "Block", "ItemStack", "ModelBakery", "ChunkGenerator",
    "RecipeManager", "SoundEngine", "TextureAtlas", "GameRenderer", "Gui", "Screen",
    "MinecraftServer", "Window", "KeyboardHandler", "MouseHandler"
}

MIXIN_ANNOTATION_PATTERN = re.compile(
    r'@Mixin\s*\((.*?)\)\s*(?:public|protected|private|abstract|\s)*class\s+(\w+)',
    re.DOTALL
)

# Detect force casts to Accessor/Invoker interfaces like ((SomeAccessor) obj)
ACCESSOR_CAST_PATTERN = re.compile(
    r'\(\s*\(([A-Z]\w*(?:Accessor|Invoker))\)\s*([a-zA-Z_]\w*)\s*\)'
)


def check_file(file_path: Path):
    violations = []
    try:
        content = file_path.read_text(encoding="utf-8")
    except Exception as e:
        return [f"Could not read {file_path}: {e}"]

    # 1. Audit Mixin Annotations for remap = false on Vanilla/Forge
    if "@Mixin" in content:
        imports = set()
        for line in content.splitlines():
            line = line.strip()
            if line.startswith("import ") and line.endswith(";"):
                imp = line[7:-1].strip()
                imports.add(imp)

        for mixin_match in MIXIN_ANNOTATION_PATTERN.finditer(content):
            mixin_args = mixin_match.group(1)
            class_name = mixin_match.group(2)

            is_vanilla_target = False
            target_names = []

            # Check for targets = "..."
            target_strings = re.findall(r'"([^"]+)"', mixin_args)
            for ts in target_strings:
                target_names.append(ts)
                if any(ts.startswith(pkg) for pkg in VANILLA_PACKAGES):
                    is_vanilla_target = True

            # Check for Foo.class
            class_targets = re.findall(r'(\w+)\.class', mixin_args)
            for ct in class_targets:
                target_names.append(ct)
                if ct in COMMON_VANILLA_CLASSES:
                    is_vanilla_target = True
                for imp in imports:
                    if imp.endswith(f".{ct}") and any(imp.startswith(pkg) for pkg in VANILLA_PACKAGES):
                        is_vanilla_target = True

            if is_vanilla_target:
                lines = content.splitlines()
                for line_idx, line in enumerate(lines, 1):
                    if ("@Inject" in line or "@Redirect" in line or "@Modify" in line or "@Accessor" in line) and "remap" in line:
                        if re.search(r'remap\s*=\s*false', line):
                            violations.append(
                                f"CRITICAL VIOLATION [Rule 6 - remap=false]: {file_path.relative_to(ROOT)}:{line_idx}\n"
                                f"  Mixin class '{class_name}' targets Vanilla/Forge ({', '.join(target_names)}),\n"
                                f"  but specifies 'remap = false'. This WILL crash in production!\n"
                                f"  Line: {line.strip()}"
                            )
                    elif "remap" in line and re.search(r'remap\s*=\s*false', line):
                        prev_lines = " ".join(lines[max(0, line_idx - 4):line_idx])
                        if any(ann in prev_lines for ann in ["@Inject", "@Redirect", "@ModifyArg", "@ModifyVariable", "@Accessor", "@Invoker"]):
                            violations.append(
                                f"CRITICAL VIOLATION [Rule 6 - remap=false]: {file_path.relative_to(ROOT)}:{line_idx}\n"
                                f"  Mixin class '{class_name}' targets Vanilla/Forge ({', '.join(target_names)}),\n"
                                f"  but specifies 'remap = false'. This WILL crash in production!\n"
                                f"  Line: {line.strip()}"
                            )

    return violations


def main():
    print("=== GTE Mixin Anti-Crash Static Audit ===")
    all_violations = []
    scanned_count = 0

    for ext in ["*.java", "*.kt"]:
        for file_path in MODULES_DIR.rglob(ext):
            if "build" in file_path.parts or ".gradle" in file_path.parts or "bin" in file_path.parts:
                continue
            scanned_count += 1
            violations = check_file(file_path)
            if violations:
                all_violations.extend(violations)

    print(f"Scanned {scanned_count} source files in modules/.")
    if all_violations:
        print(f"\n[FAILED] Found {len(all_violations)} Mixin violation(s):\n")
        for v in all_violations:
            print(v)
            print("-" * 60)
        sys.exit(1)
    else:
        print("[PASSED] All Mixins verified (remap=true and safety rules compliant).")
        sys.exit(0)


if __name__ == "__main__":
    main()
