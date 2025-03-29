// src/app/components/ProjectsSection.tsx

export default function ProjectsSection() {
  return (
    <section
      id="progetti"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-zinc-900"
    >
      <h2 className="text-4xl font-bold mb-6 text-violet-400">Progetti</h2>
      <p className="max-w-3xl text-lg text-gray-300 mb-8">
        Alcuni dei progetti che ho realizzato includono app mobili, siti web
        interattivi, e esperimenti creativi con animazioni e intelligenza
        artificiale.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <div className="p-6 bg-black/50 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-2">Project One</h3>
          <p className="text-gray-400">
            Un progetto che combina React, Tailwind e AI per creare
            un&apos;esperienza unica.
          </p>
        </div>
        <div className="p-6 bg-black/50 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-2">Project Two</h3>
          <p className="text-gray-400">
            Un&apos;app mobile sviluppata in Flutter per connettere creativi in
            tempo reale.
          </p>
        </div>
      </div>
    </section>
  );
}
