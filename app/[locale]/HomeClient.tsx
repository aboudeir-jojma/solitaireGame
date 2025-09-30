"use client";

import Link from "next/link";
import { useParams } from 'next/navigation';
import { useTranslation } from "react-i18next";

export default function HomeClient() {
  const { t } = useTranslation("global");
  const params = useParams();
  const activeLocale = typeof params?.locale === 'string' ? params.locale : 'en';

  return (
    <main className="flex flex-col min-h-screen w-full bg-gray-100 mt-16">
      <div className="flex-1 flex justify-center items-center gap-4 p-4">
        <section className="flex-1 flex justify-center mt-6">
          <iframe
            src="/game/index.html"
            className="w-full max-w-5xl h-[85vh] border-0 shadow-lg rounded-lg"
          ></iframe>
        </section>
      </div>

      <section className="relative py-16 px-6 mt-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
            {t("home.title") || "Popular Games"}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: "uno", image: "/uno.jpg", link: "https://www.tmdisplay.com/fr/game/uno" },
              { id: "spider", image: "/spider.jpg", link: "https://www.tmdisplay.com/fr/game/spider-solitaire" },
              { id: "ludo-king", image: "/ludo-king.png", link: "https://www.tmdisplay.com/fr/game/ludo-king" },
            ].map((game) => (
              <div
                key={game.id}
                className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              >
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <img
                    src={game.image}
                    alt={t(`games.${game.id}.title`)}
                    className="w-full h-full rounded-full border-4 border-green-500 shadow-md object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {t(`games.${game.id}.title`)}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t(`games.${game.id}.description`)}
                </p>
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-green-700 shadow-md transition-all duration-300"
                >
                  {t("common.playNow")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
            {t("home.section2.title")}
          </h2>
          <p
            className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-12"
            dangerouslySetInnerHTML={{ __html: t("home.section2.description") }}
          ></p>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img
                src="/spider.jpg"
                alt="Spider Solitaire"
                className="w-80 h-80 object-cover rounded-xl shadow-lg border border-gray-200"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("home.section2.whyTitle")}
              </h3>
              <ul className="space-y-4 text-gray-700 leading-relaxed">
                {Object.values(
                  t("home.section2.whyList", { returnObjects: true })
                ).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <Link
                href={`/${activeLocale}`}
                className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition-all duration-300"
              >
                {t("home.section2.playNow")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
