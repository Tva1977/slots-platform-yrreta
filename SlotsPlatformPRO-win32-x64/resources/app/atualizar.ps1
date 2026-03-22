# === SCRIPT AUTOMÁTICO ATUALIZAR SITE ===

$projectDir = "C:\Users\Tarcisio e Dani\SlotsPlatform"

Write-Host "🚀 Iniciando atualização automática..."

# Força entrar na pasta correta
Set-Location $projectDir

# Verifica se pasta public existe
if (-not (Test-Path "public")) {
    Write-Host "❌ Pasta public não encontrada!"
    exit
}

Write-Host "📂 Pasta correta encontrada!"

# Faz deploy automático
Write-Host "🌐 Enviando site para internet..."
netlify deploy --prod --dir=public

Write-Host "✅ SITE ATUALIZADO COM SUCESSO!"
Write-Host "🔗 Seu link continua o mesmo:"
Write-Host "https://extraordinary-marigold-ef08d4.netlify.app"

# === FIM ===