// src/app/components/ProjectsSection.tsx

export default function ProjectsSection() {
  return (
    <section
      id="progetti"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-zinc-900"
    >
      <h2 className="text-4xl font-bold mb-6 text-violet-400">Progetti</h2>
      <p className="max-w-3xl text-lg text-gray-300 mb-8">
        Alcuni dei progetti che ho realizzato includono gestionali, webapp, AI e
        Machine Learning model.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <div className="p-6 bg-black/50 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-2">
            UCI Fiorenzuola Project
          </h3>
          <p className="text-gray-400">
            Un gestionale di gara per l&apos;associazione internazionale di
            ciclismo UCI. In particolare, per il velodromo di Fiorenzuola
            d&apos;Arda che ospita gare di ciclismo su pista con atleti di tutto
            il mondo. <br />
            Progetto realizzato da freelancer.
          </p>
        </div>
        <div className="p-6 bg-black/50 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-2">
            Context of Gen AI model
          </h3>
          <p className="text-gray-400">
            Webapp realizzata al DinLab nella mia esperienza di stage in
            Francia. L&apos;obbiettivo era quello di limitare il contesto degli
            output di un LLM in modo che il modello fosse più guidato garantendo
            sicurezza e pertinenza all&apos;utente. <br />
            Progetto realizzato con ARG team &lt;3
          </p>
        </div>
      </div>
    </section>
  );
}
