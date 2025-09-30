"use client";

import { useTranslation } from "react-i18next";

export const dynamic = 'error';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">{t('notFound.title', { defaultValue: '404 - Page Not Found' })}</h1>
        <p className="text-xl text-gray-600 mb-8">{t('notFound.description', { defaultValue: 'The page you are looking for does not exist.' })}</p>
        <a href="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          {t('notFound.backHome', { defaultValue: 'Back to Home' })}
        </a>
      </div>
    </div>
  );
}
