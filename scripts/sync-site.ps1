param(
  [Parameter(ValueFromRemainingArguments = $true)]
  [string[]]$MessageParts
)

$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

$Message = ($MessageParts -join ' ').Trim()

if ([string]::IsNullOrWhiteSpace($Message)) {
  $Message = "Sync site " + (Get-Date -Format 'yyyy-MM-dd HH:mm:ss')
}

$changes = git status --porcelain
if ([string]::IsNullOrWhiteSpace($changes)) {
  Write-Host 'No changes to sync.'
  exit 0
}

Write-Host 'Running production build...'
npm run build

Write-Host 'Staging changes...'
git add -A

Write-Host 'Creating commit...'
git commit -m $Message

Write-Host 'Pushing to GitHub...'
git push

Write-Host 'Push complete. GitHub Pages deployment will start automatically.'