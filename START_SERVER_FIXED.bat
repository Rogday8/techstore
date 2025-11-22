@echo off
chcp 65001 >nul
echo ========================================
echo   TechStore - Запуск локального сервера
echo ========================================
echo.

cd /d "%~dp0"

echo Проверка Python...
py --version >nul 2>&1
if errorlevel 1 (
    echo ОШИБКА: Python не найден!
    echo Установите Python с https://www.python.org/downloads/
    pause
    exit /b 1
)

echo Python найден!
echo.
echo Сервер запускается на: http://localhost:8000
echo Чтобы остановить сервер: нажмите Ctrl+C
echo.
echo Открываю браузер через 2 секунды...
timeout /t 2 /nobreak >nul
start http://localhost:8000
echo.

py -m http.server 8000

pause








