import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import I18nProvider from "../components/I18nProvider";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});;

export const metadata: Metadata = {
  title: "Spider Solitaire Games",
  description: "Spider Solitaire Games – Play online for free",
  keywords: ["spider solitaire", "solitaire games", "online card games", "herder cripter","solitaire 247 games","spider solitaire classic","spider solitaire 2 suits","spider solitaire 4 suits","spider solitaire easy","spider solitaire hard","solitaire games free","free online card games","free solitaire games","play solitaire online","best solitaire games","solitaire card games","solitaire spider","spider solitaire free","spider solitaire download","spider solitaire app","spider solitaire game","spider solitaire online free","spider solitaire classic free","spider solitaire 2 suits free","spider solitaire 4 suits free","spider solitaire easy free","spider solitaire hard free","247 spider solitaire","spider solitaire 247","solitaire 247","solitaire 247 free","solitaire 247 games free","free solitaire 247","free spider solitaire 247"],
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <I18nProvider locale={locale}>
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
