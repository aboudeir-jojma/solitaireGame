"use client";

import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("./Navigation"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
