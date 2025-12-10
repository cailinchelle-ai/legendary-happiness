# Run Playwright tests (Windows PowerShell)
# Usage: Right-click and Run in IntelliJ / JetBrains, or run in PowerShell

Set-StrictMode -Version Latest

Write-Host "Installing npm dependencies (if needed)..."
npm install

Write-Host "Installing Playwright browsers (if needed)..."
npx playwright install

Write-Host "Running Playwright tests (headless)..."
npm test

Write-Host "Done." 
