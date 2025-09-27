    # TODO: Fix Translation Issue in Game Descriptions

## Steps to Complete:

- [x] Step 1: Update app/page.tsx - Change spider-solitaire id to "spider", remove hardcoded descriptions from the games array, and replace {game.description} with {t(`games.${game.id}.description`)} in the JSX.

- [x] Step 2: Update public/locales/en/global.json - Add "uno" and "ludo-king" entries under the "games" section with English titles and descriptions.

- [x] Step 3: Update public/locales/fr/global.json - Add "uno" and "ludo-king" entries under the "games" section with French titles and descriptions (using the hardcoded French as base).

- [x] Step 4: Test the changes - Run `npm run dev`, switch languages in the browser, and verify descriptions translate correctly.

After completing all steps, mark as done and use attempt_completion.
