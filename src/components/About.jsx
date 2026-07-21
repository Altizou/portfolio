export default function About() {
  return (
    <section id="apropos" className="py-24 px-6 border-b border-bordersubtle">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 border-l-4 border-accent pl-4">
          A PROPOS DE MOI
        </h2>
        <p className="text-textsecondary text-lg mb-12 max-w-2xl">
          Batir des applications solides, de l'idee au deploiement.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-bgcard border border-bordersubtle rounded-lg p-8">
            <p className="text-textsecondary leading-relaxed">
              <span className="text-accent font-mono">&gt;</span> Je suis etudiant a
              l&apos;EMIT de Fianarantsoa et developpeur web &amp; mobile depuis 2 ans.
              J&apos;ai travaille sur des projets varies allant de la gestion
              d&apos;entreprise (station-service en PHP) au traitement de donnees
              (tri de fichiers en Python), en passant par l&apos;automatisation de
              taches en C#.
            </p>
            <p className="text-textsecondary leading-relaxed mt-4">
              Actuellement, je developpe une plateforme e-commerce complete avec
              React et Next.js, et j&apos;approfondis mes competences backend avec
              Java et les bases de donnees relationnelles (MySQL, PostgreSQL).
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-bgcard border border-bordersubtle rounded-lg p-6">
              <h3 className="font-bold mb-2">Formation</h3>
              <p className="text-textsecondary text-sm">
                Etudiant a l&apos;EMIT de Fianarantsoa
              </p>
            </div>
            <div className="bg-bgcard border border-bordersubtle rounded-lg p-6">
              <h3 className="font-bold mb-2">Experience</h3>
              <p className="text-textsecondary text-sm">
                2 ans en developpement web &amp; mobile
              </p>
            </div>
            <div className="bg-bgcard border border-bordersubtle rounded-lg p-6">
              <h3 className="font-bold mb-2">Focus actuel</h3>
              <p className="text-textsecondary text-sm">
                Java, Next.js, React, MySQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
