#!/usr/bin/env bash
set -euo pipefail

echo "Installing npm dependencies (if needed)..."
npm install

echo "Installing Playwright browsers (if needed)..."
npx playwright install

echo "Running Playwright tests (headless)..."
npm test

echo "Done."
