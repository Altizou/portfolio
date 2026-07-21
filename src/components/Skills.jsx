import { Code2, ServerCog, Database } from "lucide-react";

const skillGroups = [
  {
    title: "FRONTEND",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Nuxt.js"],
  },
  {
    title: "LANGAGES BACKEND",
    icon: ServerCog,
    skills: ["Java", "PHP", "Python", "C#", "C"],
  },
  {
    title: "BASES DE DONNEES",
    icon: Database,
    skills: ["MySQL", "PostgreSQL"],
  },
];

export default function Skills() {
  return (
    <section id="competences" className="py-24 px-6 border-b border-bordersubtle">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 border-l-4 border-accent pl-4">
          COMPETENCES TECHNIQUES
        </h2>
        <p className="text-textsecondary text-lg mb-12 max-w-2xl">
          Ma boite a outils technique dans differents domaines.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="bg-bgcard border border-bordersubtle rounded-lg p-6"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Icon size={18} className="text-accent" />
                  <h3 className="font-mono text-sm tracking-wider text-accent">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between border-b border-bordersubtle pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm">{skill}</span>
                      <span className="font-mono text-xs text-accent border border-accentdim rounded px-2 py-0.5">
                        MAITRISE
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
