# 🚀 Скрипт для деплоя на GitHub Pages
# Использование: .\DEPLOY_GITHUB.ps1

Write-Host "🚀 Подготовка к деплою на GitHub Pages..." -ForegroundColor Cyan

# Проверка Git
Write-Host "`n📋 Проверка Git..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "✅ Git установлен: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git не установлен! Установите Git: https://git-scm.com/downloads" -ForegroundColor Red
    exit 1
}

# Проверка репозитория
Write-Host "`n📋 Проверка репозитория..." -ForegroundColor Yellow
if (-not (Test-Path ".git")) {
    Write-Host "🔄 Инициализация Git репозитория..." -ForegroundColor Yellow
    git init
    git branch -M main
    Write-Host "✅ Репозиторий инициализирован" -ForegroundColor Green
}

# Добавление всех файлов
Write-Host "`n📦 Добавление файлов..." -ForegroundColor Yellow
git add .

# Проверка изменений
$changes = git status --porcelain
if ([string]::IsNullOrWhiteSpace($changes)) {
    Write-Host "ℹ️  Нет изменений для коммита" -ForegroundColor Yellow
} else {
    Write-Host "📝 Создание коммита..." -ForegroundColor Yellow
    $commitMessage = "Deploy to GitHub Pages - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    git commit -m $commitMessage
    Write-Host "✅ Коммит создан" -ForegroundColor Green
}

# Проверка remote
Write-Host "`n📋 Проверка удаленного репозитория..." -ForegroundColor Yellow
$remote = git remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Удаленный репозиторий не настроен!" -ForegroundColor Yellow
    Write-Host "`n📝 Создайте репозиторий на GitHub:" -ForegroundColor Cyan
    Write-Host "   1. Откройте: https://github.com/new" -ForegroundColor White
    Write-Host "   2. Название: techstore (или любое другое)" -ForegroundColor White
    Write-Host "   3. Выберите: Public ✓" -ForegroundColor White
    Write-Host "   4. НЕ ставьте галочки на README, .gitignore, license" -ForegroundColor White
    Write-Host "   5. Нажмите 'Create repository'" -ForegroundColor White
    Write-Host "`n📝 Затем выполните команду:" -ForegroundColor Cyan
    Write-Host "   git remote add origin https://github.com/ВАШ_НИК/techstore.git" -ForegroundColor White
    Write-Host "   (Замените ВАШ_НИК на ваш GitHub username)" -ForegroundColor Gray
    Write-Host "`n📝 И затем запустите этот скрипт снова!" -ForegroundColor Cyan
    exit 0
} else {
    Write-Host "✅ Remote настроен: $remote" -ForegroundColor Green
}

# Push
Write-Host "`n🚀 Отправка на GitHub..." -ForegroundColor Yellow
try {
    git push -u origin main
    Write-Host "✅ Файлы отправлены на GitHub!" -ForegroundColor Green
} catch {
    Write-Host "❌ Ошибка при отправке. Возможно, нужна аутентификация." -ForegroundColor Red
    Write-Host "💡 Попробуйте использовать Personal Access Token вместо пароля" -ForegroundColor Yellow
    Write-Host "   Инструкция: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token" -ForegroundColor Gray
    exit 1
}

# Инструкции по GitHub Pages
Write-Host "`n🌐 Настройка GitHub Pages:" -ForegroundColor Cyan
Write-Host "   1. Откройте: $remote" -ForegroundColor White
Write-Host "   2. Нажмите: Settings → Pages (в левом меню)" -ForegroundColor White
Write-Host "   3. Source: Deploy from a branch" -ForegroundColor White
Write-Host "   4. Branch: main, Folder: / (root)" -ForegroundColor White
Write-Host "   5. Нажмите: Save" -ForegroundColor White
Write-Host "`n⏱️  Через 1-2 минуты сайт будет доступен на:" -ForegroundColor Cyan
$repoUrl = $remote -replace '\.git$', ''
$pagesUrl = $repoUrl -replace 'github\.com', 'github.io' -replace ':', '/' -replace 'git@', 'https://' -replace 'https//', 'https://'
Write-Host "   $pagesUrl" -ForegroundColor Green
Write-Host "`n✅ Готово! 🎉" -ForegroundColor Green
