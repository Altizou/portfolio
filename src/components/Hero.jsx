import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-6 border-b border-bordersubtle">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 border border-bordersubtle rounded-full px-4 py-1.5 mb-8 font-mono text-xs tracking-wider text-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          DISPONIBLE POUR DE NOUVEAUX PROJETS
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
          ALT<span className="text-accent">IZOU</span>
        </h1>

        <p className="font-mono text-sm md:text-base text-textsecondary tracking-wide mb-8 max-w-3xl">
          DEVELOPPEUR WEB &amp; MOBILE - 2 ANS D&apos;EXPERIENCE
          <br />
          ETUDIANT A L&apos;EMIT DE FIANARANTSOA
        </p>

        <p className="text-lg md:text-xl text-textsecondary max-w-2xl mb-10 leading-relaxed">
          <span className="text-accent font-mono">&gt;</span> Developpeur passionne par la
          creation d&apos;applications web et mobiles robustes. Je travaille avec
          Java, PHP, Python, C# et l&apos;ecosysteme JavaScript moderne
          (React, Next.js, Nuxt.js), avec une attention particuliere a la
          qualite du code et a l&apos;experience utilisateur.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#projets" className="bg-accent text-bgprimary font-semibold px-6 py-3 rounded hover:bg-accentdim transition">
            Voir les Projets
          </a>
          <a href="#contact" className="border border-bordersubtle px-6 py-3 rounded hover:border-accent transition">
            Me Contacter
          </a>
          <a href="/cv-altizou.pdf" download className="flex items-center gap-2 border border-bordersubtle px-6 py-3 rounded hover:border-accent transition text-accent">
            <Download size={16} />
            Telecharger le CV
          </a>
        </div>
      </div>
    </section>
  );
}