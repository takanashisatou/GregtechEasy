import os
import shutil
import subprocess
import platform

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RUN_CLIENT = os.path.join(ROOT_DIR, 'run', 'client')
OVERRIDES = os.path.join(ROOT_DIR, 'gte', 'overrides')

TARGETS = [
    ('kubejs', 'kubejs'),
    (os.path.join('config', 'ftbquests'), os.path.join('config', 'ftbquests')),
    ('defaultconfigs', 'defaultconfigs'),
    ('tlm_custom_pack', 'tlm_custom_pack'),
    ('patchouli_books', 'patchouli_books')
]

def main():
    is_windows = platform.system() == 'Windows'
    print(f"Setting up real-time links between:\n  {OVERRIDES} <==> {RUN_CLIENT}")
    for rel_run, rel_override in TARGETS:
        run_path = os.path.join(RUN_CLIENT, rel_run)
        override_path = os.path.join(OVERRIDES, rel_override)
        
        if not os.path.exists(override_path):
            os.makedirs(override_path, exist_ok=True)
            
        if os.path.exists(run_path):
            if os.path.islink(run_path):
                print(f"[EXISTS] Link already present: {rel_run}")
                continue
            else:
                shutil.rmtree(run_path)
        
        os.makedirs(os.path.dirname(run_path), exist_ok=True)
        if is_windows:
            cmd = f'cmd /c mklink /J "{run_path}" "{override_path}"'
            res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
            if res.returncode == 0:
                print(f"[OK] Windows Junction: {rel_run} -> {override_path}")
            else:
                print(f"[ERROR] Failed to link {rel_run}: {res.stderr}")
        else:
            try:
                os.symlink(override_path, run_path, target_is_directory=True)
                print(f"[OK] POSIX Symlink: {rel_run} -> {override_path}")
            except Exception as e:
                print(f"[ERROR] Failed to symlink {rel_run}: {e}")

    print("\nReal-time link completed successfully! Any edits inside the game will directly modify gte/overrides in Git!")

if __name__ == '__main__':
    main()
