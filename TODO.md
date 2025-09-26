# TODO: Add Featured Games Section to Home Page

## Steps from Approved Plan

- [x] Update public/locales/en/global.json: Add i18n keys for three game cards (e.g., games.klondike.title, games.klondike.description; similarly for spider and freecell; common.playNow for button).

- [x] Update public/locales/fr/global.json: Add corresponding French translations.

- [x] Update app/page.tsx:
  - Import { useTranslation } from 'react-i18next' (corrected for i18next setup).
  - Change main className to "min-h-screen w-full bg-gray-100".
  - Add section after the game div: <section className="bg-green-600 py-12 px-4"> with grid of three cards, each with img, h3 with t('games.klondike.title'), p with description, Link button.
  - Adjust the game container to not take full screen height, e.g., "flex-1 max-w-5xl mx-auto p-4".
  - Use existing logo.png or card images for card visuals.

- [ ] Run `npm run dev` to start the development server and test locally.

- [ ] Verify with browser: Launch http://localhost:3000, check scrolling to green section, card rendering, i18n switching (if applicable), and button links.

- [ ] Clean up: Mark steps complete and remove or archive this TODO.md once the task is verified.
