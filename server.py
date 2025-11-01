#!/usr/bin/env python3
"""
Простой HTTP сервер для разработки
Запустите этот скрипт и откройте http://localhost:8000
"""

import http.server
import socketserver
import os

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Добавляем CORS заголовки
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def guess_type(self, path):
        # Правильно определяем MIME типы для 3D моделей
        mimetype, encoding = super().guess_type(path)
        if path.endswith('.glb'):
            return 'model/gltf-binary'
        elif path.endswith('.gltf'):
            return 'model/gltf+json'
        elif path.endswith('.usdz'):
            return 'model/vnd.usdz+zip'
        return mimetype, encoding

if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"🚀 Сервер запущен!")
        print(f"📂 Откройте в браузере: http://localhost:{PORT}")
        print(f"📍 Рабочая директория: {os.getcwd()}")
        print(f"🛑 Остановка: Ctrl+C\n")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Сервер остановлен")

