import os, re, struct, zlib

items_java = r'c:\Users\Ex_Je\Documents\GTEGroup\modules\gtecore\src\main\java\org\satou\gtecore\common\data\items\GTEItems.java'
textures_dir = r'c:\Users\Ex_Je\Documents\GTEGroup\modules\gtecore\src\main\resources\assets\gtecore\textures\item'

with open(items_java, encoding='utf-8') as f:
    content = f.read()

item_names = re.findall(r'GTECore_REGISTRATE\.item\("([^"]+)"', content)

missing = []
for name in item_names:
    p = os.path.join(textures_dir, name + '.png')
    if not os.path.exists(p):
        missing.append(name)
        print('Missing item texture:', name)

print('Total missing item textures:', len(missing))

def create_png(path, r=180, g=180, b=220):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    if os.path.exists(path):
        return
    width = 16
    height = 16
    raw_data = bytearray()
    for y in range(height):
        raw_data.append(0)
        for x in range(width):
            if x == 0 or x == 15 or y == 0 or y == 15:
                raw_data.extend([max(0, r-50), max(0, g-50), max(0, b-50), 255])
            else:
                raw_data.extend([r, g, b, 255])
    
    def chunk(tag, data):
        return struct.pack('>I', len(data)) + tag + data + struct.pack('>I', zlib.crc32(tag + data) & 0xffffffff)

    png = b'\x89PNG\r\n\x1a\n'
    png += chunk(b'IHDR', struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0))
    png += chunk(b'IDAT', zlib.compress(bytes(raw_data)))
    png += chunk(b'IEND', b'')
    with open(path, 'wb') as f:
        f.write(png)
    print('Created item texture:', path)

for name in missing:
    create_png(os.path.join(textures_dir, name + '.png'))
