# PCEIA Quiz - GitHub Pages Deploy Script
# Run: powershell -ExecutionPolicy Bypass -File deploy.ps1

$REPO   = "pceia-quiz"
$OWNER  = "kooitt"
$BRANCH = "main"

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  PCEIA Quiz - GitHub Pages Deployer" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Repo target: https://github.com/$OWNER/$REPO" -ForegroundColor Yellow
Write-Host ""

$TOKEN = Read-Host "Paste your GitHub Personal Access Token (classic, needs repo scope)"
if (-not $TOKEN) {
    Write-Host "No token provided. Aborting." -ForegroundColor Red
    exit 1
}

$HEADERS = @{
    "Authorization"        = "token $TOKEN"
    "Accept"               = "application/vnd.github+json"
    "X-GitHub-Api-Version" = "2022-11-28"
}

# Step 1 - Check / create repo
Write-Host ""
Write-Host "[1/4] Checking GitHub repository..." -ForegroundColor Cyan

$repoUrl = "https://api.github.com/repos/$OWNER/$REPO"
try {
    $repoInfo = Invoke-RestMethod -Uri $repoUrl -Headers $HEADERS -Method GET -ErrorAction Stop
    Write-Host "      Repo already exists: $($repoInfo.html_url)" -ForegroundColor Green
}
catch {
    Write-Host "      Repo not found - creating it..." -ForegroundColor Yellow
    $bodyObj = @{
        name        = $REPO
        description = "PCEIA Insurance Quiz - 87 MCQ questions across 12 chapters"
        private     = $false
        auto_init   = $false
    }
    $body = $bodyObj | ConvertTo-Json
    try {
        $repoInfo = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Headers $HEADERS -Method POST -Body $body -ContentType "application/json" -ErrorAction Stop
        Write-Host "      Created: $($repoInfo.html_url)" -ForegroundColor Green
        Start-Sleep -Seconds 2
    }
    catch {
        Write-Host "      ERROR creating repo: $_" -ForegroundColor Red
        exit 1
    }
}

# Step 2 - Push code
Write-Host ""
Write-Host "[2/4] Pushing code to GitHub..." -ForegroundColor Cyan

$remoteUrl = "https://${OWNER}:${TOKEN}@github.com/$OWNER/$REPO.git"
git -C d:\Quiz remote set-url origin $remoteUrl

$currentBranch = git -C d:\Quiz rev-parse --abbrev-ref HEAD 2>&1
if ($currentBranch -ne "main") {
    git -C d:\Quiz branch -M main
}

$pushResult = git -C d:\Quiz push -u origin main 2>&1
Write-Host $pushResult

if ($LASTEXITCODE -eq 0) {
    Write-Host "      Push successful!" -ForegroundColor Green
}
else {
    Write-Host "      Push failed. Check your token and try again." -ForegroundColor Red
    git -C d:\Quiz remote set-url origin "https://github.com/$OWNER/$REPO.git"
    exit 1
}

# Restore clean remote URL (remove token)
git -C d:\Quiz remote set-url origin "https://github.com/$OWNER/$REPO.git"

# Step 3 - Enable GitHub Pages
Write-Host ""
Write-Host "[3/4] Enabling GitHub Pages (branch: main, folder: /)..." -ForegroundColor Cyan

$pagesBodyObj = @{
    source = @{
        branch = "main"
        path   = "/"
    }
}
$pagesBody = $pagesBodyObj | ConvertTo-Json

$pagesEnabled = $false

try {
    Invoke-RestMethod -Uri "https://api.github.com/repos/$OWNER/$REPO/pages" -Headers $HEADERS -Method POST -Body $pagesBody -ContentType "application/json" -ErrorAction Stop | Out-Null
    $pagesEnabled = $true
    Write-Host "      GitHub Pages enabled!" -ForegroundColor Green
}
catch {
    # Already enabled - try updating
    try {
        Invoke-RestMethod -Uri "https://api.github.com/repos/$OWNER/$REPO/pages" -Headers $HEADERS -Method PUT -Body $pagesBody -ContentType "application/json" -ErrorAction Stop | Out-Null
        $pagesEnabled = $true
        Write-Host "      GitHub Pages updated!" -ForegroundColor Green
    }
    catch {
        Write-Host "      Pages needs manual activation (see instructions below)." -ForegroundColor Yellow
    }
}

# Step 4 - Done
Write-Host ""
Write-Host "[4/4] Done!" -ForegroundColor Cyan
Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "  Your quiz will be live at:" -ForegroundColor Green
Write-Host "  https://$OWNER.github.io/$REPO/" -ForegroundColor White
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "NOTE: GitHub Pages takes 1-3 minutes to build." -ForegroundColor Yellow
Write-Host "      If the URL shows 404, wait a moment and refresh." -ForegroundColor Yellow
Write-Host ""

if (-not $pagesEnabled) {
    Write-Host "To enable Pages manually:" -ForegroundColor Yellow
    Write-Host "  1. Go to https://github.com/$OWNER/$REPO/settings/pages" -ForegroundColor Yellow
    Write-Host "  2. Source -> Deploy from branch -> main -> / (root) -> Save" -ForegroundColor Yellow
    Write-Host ""
}
