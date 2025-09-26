"use client";

import Link from "next/link";
import { Diamond } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("global");

  return (
    <main className="flex flex-col min-h-screen w-full bg-gray-100">
      {/* Barre de navigation */}
      <nav className="bg-black text-white flex items-center justify-center px-6 py-4 shadow-lg">
        <div className="flex items-center gap-3">
          <Diamond className="w-8 h-8 text-green-400" />
          {/* Nom du site cliquable */}
          <Link href="/" className="text-2xl font-bold tracking-wide hover:text-green-300 transition-colors">
            Solitaire Game
          </Link>
        </div>
      </nav>

      {/* Zone principale avec pubs */}
      <div className="flex-1 flex justify-center items-center gap-4 p-4">
        
        {/* PUB à gauche
        <aside className="hidden md:flex w-48 bg-gray-200 items-center justify-center rounded-lg shadow-md">
          Pub gauche
        </aside> */}

        {/* Jeu centré */}
        <section className="flex-1 flex justify-center mt-6">
          <iframe
            src="/game/index.html"
            className="w-full max-w-5xl h-[85vh] border-0 shadow-lg rounded-lg"
          ></iframe>
        </section>

        {/* PUB à droite
        <aside className="hidden md:flex w-48 bg-gray-200 items-center justify-center rounded-lg shadow-md">
          Pub droite
        </aside> */}
      </div>
{/* Section des jeux en vedette */}
<section className="relative py-16 px-6 mt-10">
  <div className="max-w-5xl mx-auto">
    {/* Titre */}
    <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
      {t("home.title") || "Popular Games"}
    </h2>

    {/* Grille des jeux */}
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          id: "klondike",
          image: "/uno.jpg",
          link: "https://www.tmdisplay.com/fr/game/Uno",
          description: "Débarrassez-vous de vos cartes en associant couleurs ou chiffres, avec des cartes spéciales pour pimenter la partie."

        },
        {
          id: "spider",
          image: "/spider.jpg",
          link: "https://www.tmdisplay.com/fr/game/spider-solitaire",
          description: "Un jeu stimulant où vous arrangez les cartes en ordre descendant, en construisant des séquences par couleur.",
        },
        {
          id: "freecell",
          image: "/ludo-king.png",
          link: "https://www.tmdisplay.com/fr/game/ludo-king",
        description: "Faites la course passionnante avec vos pions jusqu’à l’arrivée en lançant le dé, un jeu classique de stratégie et de chance."


        },
      ].map((game) => (
        <div
          key={game.id}
          className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-2xl transition-transform transform hover:-translate-y-2"
        >
          {/* Image */}
          <div className="relative w-28 h-28 mx-auto mb-6">
            <img
              src={game.image}
              alt={t(`games.${game.id}.title`)}
              className="w-full h-full rounded-full border-4 border-green-500 shadow-md object-cover"
            />
          </div>

          {/* Titre */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            {t(`games.${game.id}.title`)}
          </h3>

          {/* Description personnalisée */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {game.description}
          </p>

          {/* Bouton avec lien externe */}
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
    {/* Titre principal */}
    <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
      Jouez à Spider Solitaire en ligne gratuitement !
    </h2>

    {/* Description d'intro */}
    <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-12">
      Découvrez l’univers captivant de <strong>Spider Solitaire</strong>, un jeu de cartes
      qui mélange stratégie, patience et plaisir. Disposez les cartes du Roi à l’As pour former
      des suites parfaites et relever des défis de plus en plus passionnants.
    </p>

    {/* Grid infos principales */}
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Illustration */}
      <div className="flex justify-center">
        <img
          src="/spider.jpg"
          alt="Spider Solitaire"
          className="w-80 h-80 object-cover rounded-xl shadow-lg border border-gray-200"
        />
      </div>

      {/* Texte côté droit */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Pourquoi choisir Spider Solitaire ?
        </h3>
        <ul className="space-y-4 text-gray-700 leading-relaxed">
          <li>🕷️ Un jeu classique qui stimule la mémoire et la concentration.</li>
          <li>🎮 Commandes simples : cliquez, glissez, distribuez et rejouez.</li>
          <li>📱 Compatible avec ordinateur, tablette et mobile.</li>
          <li>🔓 Version débloquée : jouez où vous voulez, sans téléchargement.</li>
          <li>✨ Graphismes colorés, animations fluides et défis progressifs.</li>
        </ul>
        <Link
          href="/"
          className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition-all duration-300"
        >
          Jouer maintenant
        </Link>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}
