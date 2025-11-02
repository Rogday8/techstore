# Простой HTTP сервер на PowerShell для TechStore
# Работает без Python, Node.js и других зависимостей

$port = 8000
$url = "http://localhost:$port/"

# Получаем правильный путь к директории скрипта
$scriptPath = $MyInvocation.MyCommand.Path
if (-not $scriptPath) {
    $scriptPath = $PSCommandPath
}
if (-not $scriptPath) {
    $scriptPath = Get-Location
}
$baseDir = Split-Path -Parent $scriptPath
if (-not $baseDir) {
    $baseDir = Get-Location
}
Set-Location $baseDir

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  TechStore - Локальный сервер" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Директория: $baseDir" -ForegroundColor Yellow
Write-Host ""
Write-Host "Сервер запускается на: $url" -ForegroundColor Green
Write-Host "Чтобы остановить: нажмите Ctrl+C" -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Создаем HTTP listener
try {
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($url)
    
    Write-Host "Попытка запуска сервера..." -ForegroundColor Yellow
    
    $listener.Start()
    
    Write-Host "✓ Сервер запущен!" -ForegroundColor Green
    Write-Host "✓ Открываю браузер..." -ForegroundColor Green
    Write-Host ""
    
    Start-Sleep -Seconds 1
    Start-Process $url
}
catch {
    Write-Host ""
    Write-Host "ОШИБКА при запуске сервера!" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host ""
    Write-Host "Возможные причины:" -ForegroundColor Yellow
    Write-Host "1. Порт $port уже занят другим приложением" -ForegroundColor Yellow
    Write-Host "2. Нужны права администратора (запустите от имени администратора)" -ForegroundColor Yellow
    Write-Host "3. Брандмауэр блокирует соединение" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Нажмите любую клавишу для выхода..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

Write-Host "Ожидание запросов..." -ForegroundColor Cyan
Write-Host ""

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response
    
    $localPath = $request.Url.LocalPath
    
    # Если корневой путь, показываем index.html
    if ($localPath -eq "/" -or $localPath -eq "") {
        $localPath = "/index.html"
    }
    
    # Убираем первый слэш
    $filePath = $localPath.TrimStart('/')
    $filePath = Join-Path $baseDir $filePath
    
    # Нормализуем путь для работы с кириллицей
    $filePath = [System.IO.Path]::GetFullPath($filePath)
    
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] $($request.HttpMethod) $localPath" -ForegroundColor Gray
    
    if (Test-Path $filePath -PathType Leaf) {
        try {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            
            # Определяем MIME тип
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css" { "text/css; charset=utf-8" }
                ".js" { "application/javascript; charset=utf-8" }
                ".json" { "application/json; charset=utf-8" }
                ".png" { "image/png" }
                ".jpg" { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".webp" { "image/webp" }
                ".gif" { "image/gif" }
                ".svg" { "image/svg+xml" }
                ".glb" { "model/gltf-binary" }
                ".gltf" { "model/gltf+json" }
                ".usdz" { "model/vnd.usdz+zip" }
                ".ico" { "image/x-icon" }
                default { "application/octet-stream" }
            }
            
            $response.ContentType = $contentType
            $response.ContentLength64 = $content.Length
            $response.StatusCode = 200
            
            $response.OutputStream.Write($content, 0, $content.Length)
            $response.OutputStream.Close()
        }
        catch {
            Write-Host "Ошибка чтения файла: $_" -ForegroundColor Red
            $response.StatusCode = 500
            $response.Close()
        }
    }
    else {
        # Файл не найден
        $response.StatusCode = 404
        $notFoundHtml = @"
<!DOCTYPE html>
<html>
<head><title>404 Not Found</title></head>
<body>
<h1>404 - Файл не найден</h1>
<p>Файл $localPath не найден.</p>
</body>
</html>
"@
        $buffer = [System.Text.Encoding]::UTF8.GetBytes($notFoundHtml)
        $response.ContentType = "text/html; charset=utf-8"
        $response.ContentLength64 = $buffer.Length
        $response.OutputStream.Write($buffer, 0, $buffer.Length)
        $response.OutputStream.Close()
    }
}

$listener.Stop()

