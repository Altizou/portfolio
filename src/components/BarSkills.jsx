"use client";

import { useEffect, useState } from "react";

const data = [
  { label: "Java", percent: 77 },
  { label: "PHP", percent: 82 },
  { label: "Python", percent: 90 },
  { label: "Frontend (HTML, CSS, JS, React, Next.js)", percent: 80 },
  { label: "C#", percent: 54 },
];

export default function BarSkills() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="py-24 px-6 border-b border-bordersubtle">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 border border-bordersubtle rounded-full px-4 py-1.5 mb-6 font-mono text-xs tracking-wider text-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          DEVELOPPEUR BACKEND
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4 border-l-4 border-accent pl-4">
          NIVEAU DE MAITRISE
        </h2>
        <p className="text-textsecondary text-lg mb-12 max-w-2xl">
          Pourcentage de maitrise par langage et par domaine.
        </p>

        <div className="flex flex-col gap-7">
          {data.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-2 font-mono text-sm">
                <span>{item.label}</span>
                <span className="text-accent">{item.percent}%</span>
              </div>
              <div className="w-full h-3 bg-bgcard border border-bordersubtle rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                  style={{ width: animated ? `${item.percent}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}