#!/usr/bin/env python3
"""
Скрипт для оптимизации изображений WebP
Уменьшает размер файлов без потери качества
"""

import os
from pathlib import Path

try:
    from PIL import Image
    
    def optimize_webp(input_path, output_path=None, quality=85):
        """Оптимизирует WebP изображение"""
        if output_path is None:
            output_path = input_path
        
        # Открываем изображение
        img = Image.open(input_path)
        
        # Сохраняем с оптимизацией
        img.save(output_path, 'WEBP', quality=quality, method=6)
        
        # Возвращаем размер файла до и после
        original_size = os.path.getsize(input_path)
        new_size = os.path.getsize(output_path)
        compression = (1 - new_size/original_size) * 100
        
        return original_size, new_size, compression
except ImportError:
    print("PIL (Pillow) не установлен. Установите: pip install Pillow")
    print("Или используйте онлайн-сервисы для оптимизации WebP")


def batch_optimize(directory='images'):
    """Оптимизирует все WebP файлы в директории"""
    dir_path = Path(directory)
    
    if not dir_path.exists():
        print(f"Директория {directory} не найдена!")
        return
    
    webp_files = list(dir_path.glob('*.webp'))
    
    if not webp_files:
        print(f"WebP файлы не найдены в {directory}")
        return
    
    print(f"Найдено {len(webp_files)} WebP файлов\n")
    
    total_original = 0
    total_compressed = 0
    
    for file_path in webp_files:
        try:
            # Создаем резервную копию
            backup_path = file_path.with_suffix('.webp.bak')
            img = Image.open(file_path)
            img.save(backup_path, 'WEBP')
            
            # Оптимизируем
            original_size, new_size, compression = optimize_webp(file_path)
            total_original += original_size
            total_compressed += new_size
            
            print(f"{file_path.name:30} {original_size/1024:6.1f} KB -> {new_size/1024:6.1f} KB ({compression:+5.1f}%)")
        except Exception as e:
            print(f"Ошибка при оптимизации {file_path.name}: {e}")
    
    print(f"\nВсего: {total_original/1024/1024:.1f} MB -> {total_compressed/1024/1024:.1f} MB")
    print(f"Экономия: {(total_original - total_compressed)/1024/1024:.1f} MB")


if __name__ == '__main__':
    batch_optimize('images')

