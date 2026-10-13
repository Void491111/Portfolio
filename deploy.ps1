param([string]$m = "update")

$ErrorActionPreference = "Stop"
$root = "C:\myportfolio"

Set-Location (Join-Path $root "portfolio")
Write-Host "building..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { Write-Host "BUILD GAGAL - ga jadi push" -ForegroundColor Red; exit 1 }

Set-Location $root
git add .
git commit -m $m
git push
if ($LASTEXITCODE -ne 0) { Write-Host "PUSH GAGAL" -ForegroundColor Red; exit 1 }

$local = git rev-parse HEAD
$remote = git rev-parse origin/main
if ($local -eq $remote) {
  Write-Host "SINKRON - vercel bakal deploy" -ForegroundColor Green
  git log -1 --oneline
} else {
  Write-Host "BEDA - local dan origin ga sama" -ForegroundColor Red
}
