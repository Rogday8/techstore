@echo off
chcp 65001 >nul
title TechStore Server - Port 8000
color 0A

cd /d "%~dp0"

echo ========================================
echo   TechStore - Локальный сервер
echo ========================================
echo.
echo Запуск PowerShell HTTP сервера...
echo.

powershell.exe -ExecutionPolicy Bypass -File "%~dp0start-server.ps1"

pause


