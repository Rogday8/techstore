@echo off
echo ========================================
echo   TechStore - Запуск локального сервера
echo ========================================
echo.
echo Сервер запускается на: http://localhost:8000
echo Чтобы остановить сервер: нажмите Ctrl+C
echo.
py -m http.server 8000
pause


