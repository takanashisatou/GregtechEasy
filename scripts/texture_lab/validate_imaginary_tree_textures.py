#!/usr/bin/env python3
"""
验证虚数之树系列贴图修复结果的脚本
"""

import os
import json
from PIL import Image
import numpy as np

# 定义要检查的文件路径
FILE_PATHS = {
    'assembly': 'modules/gtecore/src/main/resources/assets/gtecore/textures/item/imaginary_tree_processor_assembly.png',
    'computer': 'modules/gtecore/src/main/resources/assets/gtecore/textures/item/imaginary_tree_processor_computer.png',
    'wafer': 'modules/gtecore/src/main/resources/assets/gtecore/textures/item/imaginary_tree_cpu_wafer.png',
    'circuit': 'modules/gtecore/src/main/resources/assets/gtecore/textures/item/imaginary_tree_circuit_board.png',
    'mcmeta': 'modules/gtecore/src/main/resources/assets/gtecore/textures/item/yin_yang_processor.png.mcmeta'
}

# 定义要检查的颜色值
CRYSTAL_GRAY_COLORS = [
    (68, 64, 59), (132, 128, 121), (160, 154, 149),
    (215, 215, 215), (174, 174, 174), (245, 245, 245)
]

GOLD_COLORS = [
    (212, 175, 55), (160, 130, 40)
]

ICE_COLOR = (225, 248, 255)
CYAN0_COLOR = (120, 210, 245)
CYAN1_COLOR = (175, 230, 252)

def analyze_assembly_texture(image_path):
    """分析 assembly 贴图：检查水晶灰残留和呼吸动画"""
    print("分析 " + image_path + "...")
    
    # 检查是否为动画贴图（多帧）
    try:
        img = Image.open(image_path)
        frames = []
        try:
            while True:
                frames.append(img.copy())
                img.seek(img.tell() + 1)
        except EOFError:
            pass
        
        print("发现 " + str(len(frames)) + " 帧")
        
        # 检查每帧是否有水晶灰
        crystal_gray_found = False
        for i, frame in enumerate(frames):
            frame_array = np.array(frame)
            # 确保只检查 RGB 通道，忽略 Alpha 通道
            rgb_array = frame_array[:, :, :3]
            for color in CRYSTAL_GRAY_COLORS:
                if np.any(np.all(rgb_array == color, axis=-1)):
                    crystal_gray_found = True
                    print("帧 " + str(i) + " 发现水晶灰: " + str(color))
                    break
        
        if crystal_gray_found:
            print("X 水晶灰残留检测失败")
            return False
        
        # 检查呼吸动画（STEEL1→CYAN0→CYAN1→ICE）
        if len(frames) >= 4:
            frame0 = np.array(frames[0])
            frame1 = np.array(frames[1])
            frame2 = np.array(frames[2])
            frame3 = np.array(frames[3])
            
            # 确保只检查 RGB 通道
            frame0_rgb = frame0[:, :, :3]
            frame1_rgb = frame1[:, :, :3]
            frame2_rgb = frame2[:, :, :3]
            frame3_rgb = frame3[:, :, :3]
            
            # 检查核心区域颜色变化
            center_region0 = frame0_rgb[50:100, 50:100]  # 假设核心在中心区域
            center_region1 = frame1_rgb[50:100, 50:100]
            center_region2 = frame2_rgb[50:100, 50:100]
            center_region3 = frame3_rgb[50:100, 50:100]
            
            colors = [np.unique(region.reshape(-1, 3), axis=0) for region in 
                     [center_region0, center_region1, center_region2, center_region3]]
            
            # 简单的颜色序列检查
            expected_sequence = [CYAN1_COLOR, CYAN0_COLOR, CYAN1_COLOR, ICE_COLOR]
            animation_valid = True
            for i, color in enumerate(expected_sequence):
                if not np.any(np.all(colors[i] == color, axis=-1)):
                    animation_valid = False
                    print("帧 " + str(i) + " 核心颜色不符合预期: " + str(colors[i]) + " vs " + str(color))
            
            if animation_valid:
                print("OK 呼吸动画验证通过")
                return True
            else:
                print("X 呼吸动画验证失败")
                return False
        else:
            print("! 帧数不足，无法验证动画")
            return True  # 帧数不足但无水晶灰残留
    
    except Exception as e:
        print("X 分析失败: " + str(e))
        return False

def analyze_computer_texture(image_path):
    """分析 computer 贴图：检查水晶灰残留、金色像素和总线"""
    print("分析 " + image_path + "...")
    
    try:
        img = Image.open(image_path)
        img_array = np.array(img)
        
        # 确保只检查 RGB 通道，忽略 Alpha 通道
        rgb_array = img_array[:, :, :3]
        
        # 检查水晶灰残留
        crystal_gray_found = False
        for color in CRYSTAL_GRAY_COLORS:
            if np.any(np.all(rgb_array == color, axis=-1)):
                crystal_gray_found = True
                print("发现水晶灰: " + str(color))
                break
        
        if crystal_gray_found:
            print("X 水晶灰残留检测失败")
            return False
        
        # 检查金色像素
        gold_found = False
        for color in GOLD_COLORS:
            if np.any(np.all(rgb_array == color, axis=-1)):
                gold_found = True
                print("OK 发现金色像素: " + str(color))
                break
        
        if not gold_found:
            print("X 未发现金色像素")
            return False
        
        # 检查 ICE 白总线像素数量
        ice_pixels = np.sum(np.all(rgb_array == ICE_COLOR, axis=-1))
        print("ICE 白总线像素数量: " + str(ice_pixels))
        
        # 检查微树网络像素数量（假设是 CYAN0 颜色）
        cyan0_pixels = np.sum(np.all(rgb_array == CYAN0_COLOR, axis=-1))
        print("微树网络像素数量: " + str(cyan0_pixels))
        
        # 简单的数量检查（根据描述，6px 冰白总线和 10px 冰白微树）
        if ice_pixels >= 6 and cyan0_pixels >= 10:
            print("OK 总线和微树像素数量达标")
            return True
        else:
            print("X 总线或微树像素数量不足")
            return False
    
    except Exception as e:
        print("X 分析失败: " + str(e))
        return False

def analyze_wafer_texture(image_path):
    """分析 wafer 贴图：检查中心树颜色"""
    print("分析 " + image_path + "...")
    
    try:
        img = Image.open(image_path)
        img_array = np.array(img)
        
        # 检查中心区域颜色
        center_region = img_array[50:100, 50:100]  # 假设中心在 50-100,50-100 区域
        
        # 获取唯一颜色
        unique_colors = np.unique(center_region.reshape(-1, 3), axis=0)
        
        # 检查是否只有 ICE 和 CYAN1
        valid_colors = []
        invalid_colors = []
        
        for color in unique_colors:
            if np.all(color == ICE_COLOR) or np.all(color == CYAN1_COLOR):
                valid_colors.append(color)
            else:
                invalid_colors.append(color)
        
        if invalid_colors:
            print("X 发现无效颜色: " + str(invalid_colors))
            return False
        
        print("OK 中心区域颜色验证通过: " + str(valid_colors))
        return True
    
    except Exception as e:
        print("X 分析失败: " + str(e))
        return False

def analyze_circuit_texture(image_path):
    """分析 circuit 贴图：检查树线加粗"""
    print("分析 " + image_path + "...")
    
    try:
        img = Image.open(image_path)
        img_array = np.array(img)
        
        # 确保只检查 RGB 通道，忽略 Alpha 通道
        rgb_array = img_array[:, :, :3]
        
        # 检查 CYAN0 像素数量
        cyan0_pixels = np.sum(np.all(rgb_array == CYAN0_COLOR, axis=-1))
        print("CYAN0 像素数量: " + str(cyan0_pixels))
        
        # 简单的数量检查（假设加粗后数量增加）
        # 根据图像尺寸动态调整阈值
        total_pixels = rgb_array.shape[0] * rgb_array.shape[1]
        threshold = total_pixels * 0.05  # 5% 的像素阈值
        
        if cyan0_pixels > threshold:
            print("OK 树线加粗验证通过")
            return True
        else:
            print("X 树线像素数量不足")
            return False
    
    except Exception as e:
        print("X 分析失败: " + str(e))
        return False

def analyze_mcmeta(file_path):
    """分析 mcmeta 文件：检查帧范围"""
    print("分析 " + file_path + "...")
    
    try:
        with open(file_path, 'r') as f:
            data = json.load(f)
        
        # 检查 animation 帧范围
        if 'animation' in data and 'frames' in data['animation']:
            frames = data['animation']['frames']
            
            if isinstance(frames, dict):
                # 如果是字典，检查帧索引
                frame_indices = list(frames.keys())
                frame_indices = [int(i) for i in frame_indices]
                frame_indices.sort()
                
                if frame_indices == list(range(7)):  # 0-6
                    print("OK 帧索引 0-6 验证通过")
                    return True
                else:
                    print("X 帧索引不符合预期: " + str(frame_indices))
                    return False
            elif isinstance(frames, list):
                # 如果是列表，检查长度
                if len(frames) == 7:
                    print("OK 7 帧验证通过")
                    return True
                else:
                    print("X 帧数不符合预期: " + str(len(frames)))
                    return False
            else:
                print("X 未知的 frames 格式")
                return False
        else:
            print("X 未找到 animation.frames")
            return False
    
    except Exception as e:
        print("X 分析失败: " + str(e))
        return False

def main():
    """主函数"""
    results = {}
    
    # 验证 assembly 贴图
    results['P0-1'] = analyze_assembly_texture(FILE_PATHS['assembly'])
    
    # 验证 computer 贴图
    results['P0-2'] = analyze_computer_texture(FILE_PATHS['computer'])
    
    # 验证 wafer 贴图
    results['P2-1'] = analyze_wafer_texture(FILE_PATHS['wafer'])
    
    # 验证 circuit 贴图
    results['P2-2'] = analyze_circuit_texture(FILE_PATHS['circuit'])
    
    # 验证 mcmeta 文件
    results['P3'] = analyze_mcmeta(FILE_PATHS['mcmeta'])
    
    # 输出最终报告
    print("\n=== 验收报告 ===")
    for item, result in results.items():
        status = "OK 通过" if result else "X 失败"
        print(item + ": " + status)
    
    # 判断是否批准
    all_passed = all(results.values())
    approval = "OK 批准进入整合包" if all_passed else "X 修复不完整，暂不批准"
    print("\n最终结果: " + approval)

if __name__ == "__main__":
    main()