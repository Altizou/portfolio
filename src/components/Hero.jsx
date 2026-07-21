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
          <a href="#projets" className="group relative overflow-hidden bg-accent text-bgprimary font-semibold px-6 py-3 rounded transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]">
            <span className="relative z-10">Voir les Projets</span>
            <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </a>

          <a href="#contact" className="relative border border-bordersubtle px-6 py-3 rounded transition-all duration-300 hover:scale-105 hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]">
            Me Contacter
          </a>

          <a href="/cv-altizou.pdf" download className="group flex items-center gap-2 border border-bordersubtle px-6 py-3 rounded text-accent transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-bgprimary hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]">
            <Download size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            Telecharger le CV
          </a>
        </div>
      </div>
    </section>
  );
}