@echo off
chcp 65001 >nul
title TechStore Server - Port 8000
color 0A

cd /d "%~dp0"

echo ========================================
echo   TechStore - Локальный сервер
echo ========================================
echo.
echo Директория: %CD%
echo.
echo Запуск сервера на: http://localhost:8000
echo.
echo Чтобы остановить: нажмите Ctrl+C
echo.
echo ========================================
echo.

REM Проверяем Python
where py >nul 2>&1
if errorlevel 1 (
    echo [ОШИБКА] Python не найден!
    echo.
    echo Установите Python с https://www.python.org/downloads/
    echo.
    pause
    exit /b 1
)

REM Запускаем сервер
echo Запуск сервера...
echo.
py -m http.server 8000

if errorlevel 1 (
    echo.
    echo [ОШИБКА] Не удалось запустить сервер!
    echo Попробуйте: python -m http.server 8000
    echo.
    pause
)








