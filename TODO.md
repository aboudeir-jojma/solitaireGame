# TODO: Implement Browser Language Detection for i18n

## Steps from Approved Plan

- [x] Update `app/i18n.ts` to include LanguageDetector import, add it to the i18n chain, and configure detection options (order: ['navigator'], supported languages: ['en', 'fr'], no caching, lng: undefined).

- [x] Update `app/layout.tsx` to make the `<html lang>` attribute dynamic based on the detected language from i18n (introduce a client-side wrapper to set lang after detection).

- [x] Test the implementation: Run `npm run dev`, verify language detection in browsers set to French (should load 'fr' translations) and English ('en'). Check that correct locale files are loaded (e.g., via Network tab) and no hydration errors occur.

- [x] Clean up: Remove or archive this TODO.md once complete.
