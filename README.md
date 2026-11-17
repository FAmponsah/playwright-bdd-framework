# Playwright Automation Framework

Playwright + TypeScript framework that supports both plain spec tests and Gherkin/BDD
feature files (via [playwright-bdd](https://github.com/vitalets/playwright-bdd)).
The bundled Vite counter app is the sample application under test.

## Structure

```
tests/
  specs/      Plain Playwright specs (*.spec.ts)
  features/   Gherkin feature files (*.feature)
  steps/      Step definitions for the feature files
  pages/      Page objects
  fixtures/   Custom fixtures + Given/When/Then exports
  utils/      Helpers (e.g. screenshot saving)
screenshots/  Screenshots taken by tests (and automatically on failure)
```

## Usage

```bash
npm install
npx playwright install chromium

npm test              # all tests (spec + bdd)
npm run test:spec     # spec tests only
npm run test:bdd      # feature files only
npm run test:headed   # watch the browser
npm run test:ui       # Playwright UI mode
npm run report        # open the HTML report
```

The Vite dev server starts automatically. To test a deployed site instead, set
`BASE_URL`, e.g. `BASE_URL=https://example.com npm test`.
