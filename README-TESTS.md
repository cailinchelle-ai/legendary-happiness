Playwright tests for Outdoor Living Centre

Quick start (Windows PowerShell):

1) Install dependencies
   npm install

2) Install Playwright browsers
   npx playwright install

3) Run tests
   # run headless
   npm test

   # run headed (visible browsers)
   npm run test:headed

Notes
- Tests expect a static server to serve files from the workspace root. The Playwright config starts a dev web server with `npx http-server -p 3000`.
- If you don't have `npx http-server` available, install `http-server` globally or change `playwright.config.js` to use `python -m http.server 3000`.
- The test files are in `tests/` and are simple smoke tests that verify DOM wiring and flows.

If you'd like, I can convert these into a CI workflow (GitHub Actions) or produce Playwright traces/screenshots on failure.
 
Running tests from IntelliJ / WebStorm
-------------------------------------

You can run the tests directly inside IntelliJ (or WebStorm) using one of these approaches:

1) Run the helper script (recommended on Windows)
   - Open the project in IntelliJ.
   - Right-click `run-tests.ps1` in the project tree and choose "Run" (or configure it as an External Tool).
   - The script installs dependencies (if needed), installs Playwright browsers, and runs `npm test`.

2) Add an NPM run configuration
   - Open Run > Edit Configurations...
   - Click + and choose "npm".
   - For Package.json, browse to your project `package.json` and set "Command" to `test`.
   - Save and run the configuration. IntelliJ will run `npm test` and show output in the Run tool window.

3) Create a File Watcher / External Tool (optional)
   - You can create an External Tool that runs `powershell.exe -File "$ProjectFileDir$/run-tests.ps1"` to call the script.

Note: Before running tests, ensure Node.js is configured in IntelliJ (File > Settings > Languages & Frameworks > Node.js) so the IDE knows which Node binary to use.

If you'd like, I can add an IntelliJ run configuration file into `.idea/runConfigurations/` for you to import, but that requires committing IDE files. I prefer to provide the portable scripts and steps above to avoid IDE-specific commits unless you want them.