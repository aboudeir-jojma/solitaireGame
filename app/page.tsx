"use client";

import Link from "next/link";
import { Diamond } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-screen bg-gray-100">
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
      <div className="flex flex-1 justify-center items-center gap-4 p-4">
        
        {/* PUB à gauche
        <aside className="hidden md:flex w-48 bg-gray-200 items-center justify-center rounded-lg shadow-md">
          Pub gauche
        </aside> */}

        {/* Jeu centré */}
        <section className="flex-1 flex justify-center">
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
    </main>
  );
}
