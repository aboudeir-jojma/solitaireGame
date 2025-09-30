"use client";

import { useEffect } from "react";

const supportedLocales = ["en", "fr"] as const;
const defaultLocale = "en" as const;

function detectLocale(): string {
  if (typeof navigator === "undefined") return defaultLocale;
  const lang = navigator.language?.toLowerCase() || defaultLocale;
  if (lang.startsWith("fr")) return "fr";
  if (supportedLocales.includes(lang as any)) return lang;
  return defaultLocale;
}

export default function RootRedirect() {
  useEffect(() => {
    const locale = detectLocale();
    const target = `/${locale}`;
    if (window.location.pathname !== target) {
      window.location.replace(target);
    }
  }, []);

  return null;
}


