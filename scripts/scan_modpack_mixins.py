#!/usr/bin/env python3
"""
scripts/scan_modpack_mixins.py
Static analyzer to inspect all mod jars in gte/overrides/mods for production-only crash risks:
1. Missing refmap.json files declared in .mixins.json
2. Mixins targeting net/minecraft/* or net/minecraftforge/* with unmapped @Shadow fields/methods
3. Mixins with remap = false on net/minecraft/* targets
4. Development-only / debugging mods bundled into player pack
"""

import os
import sys
import json
import zipfile
import struct
import re
from pathlib import Path

ROOT = Path(__file__).parent.parent.resolve()
MODS_DIR = ROOT / "gte" / "overrides" / "mods"

# Obfuscated SRG pattern for Forge 1.20.1:
# Fields: f_123456_
# Methods: m_123456_
SRG_FIELD = re.compile(r"^f_\d+_$")
SRG_METHOD = re.compile(r"^m_\d+_$")

class AnnotationReader:
    def __init__(self, data, cp):
        self.data = data
        self.cp = cp
        self.pos = 0

    def u1(self):
        val = self.data[self.pos]
        self.pos += 1
        return val

    def u2(self):
        val = struct.unpack_from('>H', self.data, self.pos)[0]
        self.pos += 2
        return val

    def u4(self):
        val = struct.unpack_from('>I', self.data, self.pos)[0]
        self.pos += 4
        return val

    def parse_element_value(self):
        if self.pos >= len(self.data):
            return None
        tag = chr(self.u1())
        if tag in ('B', 'C', 'D', 'F', 'I', 'J', 'S', 'Z', 's'):
            idx = self.u2()
            return self.cp[idx] if idx < len(self.cp) else None
        elif tag == 'e': # enum_const_value
            type_name_index = self.u2()
            const_name_index = self.u2()
            return (self.cp[type_name_index] if type_name_index < len(self.cp) else None,
                    self.cp[const_name_index] if const_name_index < len(self.cp) else None)
        elif tag == 'c': # class_info_index
            idx = self.u2()
            return self.cp[idx] if idx < len(self.cp) else None
        elif tag == '@': # annotation_value
            return self.parse_annotation()
        elif tag == '[': # array_value
            num_values = self.u2()
            arr = []
            for _ in range(num_values):
                arr.append(self.parse_element_value())
            return arr
        else:
            return None

    def parse_annotation(self):
        type_idx = self.u2()
        type_name = self.cp[type_idx] if type_idx < len(self.cp) else None
        num_pairs = self.u2()
        pairs = {}
        for _ in range(num_pairs):
            name_idx = self.u2()
            name = self.cp[name_idx] if name_idx < len(self.cp) else None
            val = self.parse_element_value()
            if name:
                pairs[name] = val
        return {'type': type_name, 'values': pairs}

    def parse_annotations(self):
        try:
            num = self.u2()
            anns = []
            for _ in range(num):
                anns.append(self.parse_annotation())
            return anns
        except Exception:
            return []

class ClassFile:
    def __init__(self, data):
        self.data = data
        self.pos = 0
        self.cp = []
        self.fields = []
        self.methods = []
        self.class_attrs = {}
        self.parse()

    def u1(self):
        val = self.data[self.pos]
        self.pos += 1
        return val

    def u2(self):
        val = struct.unpack_from('>H', self.data, self.pos)[0]
        self.pos += 2
        return val

    def u4(self):
        val = struct.unpack_from('>I', self.data, self.pos)[0]
        self.pos += 4
        return val

    def parse(self):
        magic = self.u4()
        if magic != 0xCAFEBABE:
            raise ValueError('Invalid class magic')
        minor = self.u2()
        major = self.u2()
        cp_count = self.u2()
        self.cp = [None] * cp_count
        i = 1
        while i < cp_count:
            tag = self.u1()
            if tag == 1: # Utf8
                length = self.u2()
                bytes_val = self.data[self.pos:self.pos+length]
                self.pos += length
                self.cp[i] = bytes_val.decode('utf-8', errors='replace')
            elif tag in (3, 4): # Integer, Float
                self.pos += 4
                self.cp[i] = None
            elif tag in (5, 6): # Long, Double
                self.pos += 8
                self.cp[i] = None
                i += 1
            elif tag in (7, 8, 16, 19, 20): # Class, String, MethodType, Module, Package
                self.cp[i] = (tag, self.u2())
            elif tag in (9, 10, 11, 12, 17, 18): # Fieldref, Methodref, InterfaceMethodref, NameAndType, Dynamic, InvokeDynamic
                self.cp[i] = (tag, self.u2(), self.u2())
            elif tag == 15: # MethodHandle
                self.pos += 3
                self.cp[i] = None
            else:
                self.cp[i] = None
            i += 1

        self.access_flags = self.u2()
        this_class_idx = self.u2()
        self.this_class = self.get_class_name(this_class_idx)
        super_class_idx = self.u2()
        self.super_class = self.get_class_name(super_class_idx)
        
        interfaces_count = self.u2()
        self.interfaces = [self.get_class_name(self.u2()) for _ in range(interfaces_count)]
            
        fields_count = self.u2()
        self.fields = []
        for _ in range(fields_count):
            access = self.u2()
            name_idx = self.u2()
            desc_idx = self.u2()
            attrs_count = self.u2()
            attrs = self.parse_attrs(attrs_count)
            self.fields.append({'name': self.cp[name_idx], 'desc': self.cp[desc_idx], 'attrs': attrs})

        methods_count = self.u2()
        self.methods = []
        for _ in range(methods_count):
            access = self.u2()
            name_idx = self.u2()
            desc_idx = self.u2()
            attrs_count = self.u2()
            attrs = self.parse_attrs(attrs_count)
            self.methods.append({'name': self.cp[name_idx], 'desc': self.cp[desc_idx], 'attrs': attrs})

        class_attrs_count = self.u2()
        self.class_attrs = self.parse_attrs(class_attrs_count)

    def get_class_name(self, idx):
        if idx and idx < len(self.cp) and self.cp[idx] and self.cp[idx][0] == 7:
            name_idx = self.cp[idx][1]
            return self.cp[name_idx]
        return None

    def parse_attrs(self, count):
        attrs = {}
        for _ in range(count):
            name_idx = self.u2()
            length = self.u4()
            raw_data = self.data[self.pos:self.pos+length]
            self.pos += length
            attr_name = self.cp[name_idx] if name_idx < len(self.cp) else None
            if attr_name:
                attrs[attr_name] = raw_data
        return attrs

    def get_annotations(self, attrs):
        anns = []
        for key in ('RuntimeVisibleAnnotations', 'RuntimeInvisibleAnnotations'):
            raw = attrs.get(key)
            if raw:
                reader = AnnotationReader(raw, self.cp)
                anns.extend(reader.parse_annotations())
        return anns


def scan_jar(jar_path: Path):
    issues = []
    suspicious_dev_indicators = []
    
    try:
        zf = zipfile.ZipFile(jar_path, 'r')
    except Exception as e:
        return [f"[ERROR] Cannot open jar {jar_path.name}: {e}"], []

    jar_name = jar_path.name
    names = set(zf.namelist())

    # Check mods.toml for dev markers
    for n in names:
        if n.endswith("mods.toml"):
            try:
                content = zf.read(n).decode('utf-8', errors='ignore')
                for line in content.splitlines():
                    lower = line.lower()
                    if "gametest" in lower or "test mod" in lower or "developer" in lower:
                        suspicious_dev_indicators.append(f"mods.toml line: {line.strip()}")
            except Exception:
                pass

    # Find mixin configs
    mixin_configs = [n for n in names if n.endswith('.mixins.json') or n.endswith('mixin.json')]
    for mc_name in mixin_configs:
        try:
            cfg = json.loads(zf.read(mc_name).decode('utf-8'))
        except Exception as e:
            issues.append(f"[{jar_name}] Invalid JSON in mixin config {mc_name}: {e}")
            continue

        refmap_name = cfg.get('refmap')
        refmap_data = None
        if refmap_name:
            if refmap_name not in names:
                # Missing refmap is an issue if mixins target vanilla
                refmap_data = None
            else:
                try:
                    refmap_data = json.loads(zf.read(refmap_name).decode('utf-8'))
                except Exception:
                    refmap_data = None

        pkg = cfg.get('package', '').replace('.', '/')
        if pkg and not pkg.endswith('/'):
            pkg += '/'

        all_mixins = []
        for key in ('mixins', 'client', 'server'):
            for m in cfg.get(key, []):
                # normalize path
                class_path = (pkg + m if not m.startswith(pkg) else m) + ".class"
                all_mixins.append((m, class_path))

        for mixin_simple, class_path in all_mixins:
            if class_path not in names:
                continue
            try:
                cf = ClassFile(zf.read(class_path))
            except Exception:
                continue

            # Check @Mixin annotation
            class_anns = cf.get_annotations(cf.class_attrs)
            mixin_ann = None
            for ann in class_anns:
                if ann.get('type') == 'Lorg/spongepowered/asm/mixin/Mixin;':
                    mixin_ann = ann
                    break
            if not mixin_ann:
                continue

            vals = mixin_ann.get('values', {})
            targets = []
            # 'value' is class array, 'targets' is string array
            for v in vals.get('value', []) or []:
                if isinstance(v, str):
                    targets.append(v.strip('L;'))
            for t in vals.get('targets', []) or []:
                if isinstance(t, str):
                    targets.append(t.replace('.', '/'))

            targets_vanilla = any(t.startswith('net/minecraft/') or t.startswith('net/minecraftforge/') for t in targets)

            if targets_vanilla and not refmap_data:
                # If refmap is missing but targets vanilla, check if mixin has any @Shadow or @Inject with remap!=false
                has_remapped_member = False
                for f in cf.fields:
                    f_anns = cf.get_annotations(f['attrs'])
                    for fa in f_anns:
                        if fa.get('type') == 'Lorg/spongepowered/asm/mixin/Shadow;':
                            if fa.get('values', {}).get('remap') != False:
                                has_remapped_member = True
                for m in cf.methods:
                    m_anns = cf.get_annotations(m['attrs'])
                    for ma in m_anns:
                        t = ma.get('type', '')
                        if 'asm/mixin' in t and ma.get('values', {}).get('remap') != False:
                            has_remapped_member = True
                if has_remapped_member:
                    issues.append(f"[{jar_name}] Mixin {mixin_simple} targets {targets} but refmap {refmap_name} is MISSING from jar!")

            if targets_vanilla and refmap_data:
                # Check refmap mappings
                # refmap structure:
                # "mappings": { class: { source_name: target_name } }
                # "data": { "searge": { class: { source_name: target_name } } }
                mixin_full_class = cf.this_class
                searge_map = refmap_data.get('data', {}).get('searge', {}).get(mixin_full_class, {})
                mappings_map = refmap_data.get('mappings', {}).get(mixin_full_class, {})

                # Check fields with @Shadow
                for f in cf.fields:
                    f_anns = cf.get_annotations(f['attrs'])
                    for fa in f_anns:
                        if fa.get('type') == 'Lorg/spongepowered/asm/mixin/Shadow;':
                            fname = f['name']
                            remap = fa.get('values', {}).get('remap')
                            if remap is False:
                                # Dangerous on vanilla target unless it's already an SRG name or Forge added field
                                if not SRG_FIELD.match(fname):
                                    issues.append(f"[{jar_name}] DANGER: @Shadow(remap = false) on vanilla target {targets}: {mixin_simple}.{fname}")
                            else:
                                # remap is true (default). Must have mapping unless it's already SRG name
                                if not SRG_FIELD.match(fname):
                                    if fname not in searge_map and fname not in mappings_map:
                                        # Also check aliases if specified in @Shadow(aliases=...)
                                        aliases = fa.get('values', {}).get('aliases', []) or []
                                        if not any(a in searge_map or a in mappings_map for a in aliases):
                                            issues.append(f"[{jar_name}] BROKEN REFMAP: @Shadow field '{fname}' in {mixin_simple} (target {targets}) has NO searge mapping in {refmap_name}!")

                # Check methods with @Shadow
                for m in cf.methods:
                    m_anns = cf.get_annotations(m['attrs'])
                    for ma in m_anns:
                        if ma.get('type') == 'Lorg/spongepowered/asm/mixin/Shadow;':
                            mname = m['name']
                            if mname in ('<init>', '<clinit>'):
                                continue
                            remap = ma.get('values', {}).get('remap')
                            if remap is False:
                                if not SRG_METHOD.match(mname):
                                    issues.append(f"[{jar_name}] DANGER: @Shadow(remap = false) method on vanilla target {targets}: {mixin_simple}.{mname}")
                            else:
                                if not SRG_METHOD.match(mname):
                                    # refmap method keys can be "name" or "name(desc)"
                                    m_full = f"{mname}{m['desc']}"
                                    found = False
                                    for k in (mname, m_full):
                                        if k in searge_map or k in mappings_map:
                                            found = True
                                            break
                                    if not found:
                                        issues.append(f"[{jar_name}] BROKEN REFMAP: @Shadow method '{mname}' in {mixin_simple} (target {targets}) has NO searge mapping in {refmap_name}!")

    return issues, suspicious_dev_indicators


def main():
    print(f"Scanning mods directory: {MODS_DIR}")
    jars = sorted([MODS_DIR / f for f in os.listdir(MODS_DIR) if f.endswith('.jar')])
    print(f"Total jars: {len(jars)}\n")

    all_issues = []
    all_dev = []

    for j in jars:
        issues, dev = scan_jar(j)
        if issues:
            all_issues.extend(issues)
        if dev:
            all_dev.extend([f"[{j.name}] {d}" for d in dev])

    print("================ RESULTS ================")
    if all_issues:
        print(f"\n[FOUND {len(all_issues)} CRITICAL / BROKEN MIXIN ISSUES]:")
        for iss in all_issues:
            print(f"  * {iss}")
    else:
        print("\n[OK] No broken refmaps or missing @Shadow mappings detected in any mod!")

    if all_dev:
        print(f"\n[FOUND {len(all_dev)} SUSPICIOUS DEV MOD INDICATORS]:")
        for d in all_dev:
            print(f"  * {d}")

if __name__ == "__main__":
    main()
