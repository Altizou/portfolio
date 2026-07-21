import { Fuel, FolderTree, Zap, ShoppingCart } from "lucide-react";

const projects = [
  {
    id: "PRJ.001",
    title: "Gestion de Station-Service",
    description:
      "Application de gestion complete pour une station-service : suivi des stocks, ventes et rapports.",
    tags: ["PHP", "MySQL", "Backend"],
    status: "TERMINE",
    icon: Fuel,
  },
  {
    id: "PRJ.002",
    title: "Tri de Fichiers",
    description:
      "Outil d'automatisation pour trier et organiser des fichiers selon des regles personnalisees.",
    tags: ["Python", "Automatisation"],
    status: "TERMINE",
    icon: FolderTree,
  },
  {
    id: "PRJ.003",
    title: "Automatisation de Taches",
    description:
      "Programme C# pour automatiser des taches repetitives et gagner en productivite.",
    tags: ["C#", "Automatisation"],
    status: "TERMINE",
    icon: Zap,
  },
  {
    id: "PRJ.004",
    title: "Plateforme E-commerce",
    description:
      "Site e-commerce complet avec catalogue produits, panier et gestion des commandes.",
    tags: ["JavaScript", "Next.js", "React"],
    status: "EN COURS",
    icon: ShoppingCart,
  },
];

export default function Projects() {
  return (
    <section id="projets" className="py-24 px-6 border-b border-bordersubtle">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 border-l-4 border-accent pl-4">
          PROJETS PHARES
        </h2>
        <p className="text-textsecondary text-lg mb-12 max-w-2xl">
          Une selection de mes travaux en developpement web, desktop et automatisation.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="bg-bgcard border border-bordersubtle rounded-lg p-6 hover:border-accent transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded bg-bgprimary border border-bordersubtle flex items-center justify-center">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <span
                    className={`font-mono text-xs px-2 py-0.5 rounded border ${
                      project.status === "EN COURS"
                        ? "text-accent border-accentdim"
                        : "text-textsecondary border-bordersubtle"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="font-mono text-xs text-textmuted">{project.id}</span>
                </div>
                <p className="text-textsecondary text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-textsecondary border border-bordersubtle rounded px-2 py-1"
                    >
                      {tag}
                    </span>
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
