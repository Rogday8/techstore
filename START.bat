@echo off
chcp 65001 >nul
title TechStore Server - Port 8000
color 0A

echo ========================================
echo   TechStore - Локальный сервер
echo ========================================
echo.
echo Запуск PowerShell HTTP сервера...
echo.

cd /d "%~dp0"

powershell.exe -ExecutionPolicy Bypass -NoExit -File "%~dp0start-server.ps1"


