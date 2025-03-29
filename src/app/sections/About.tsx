// src/app/components/AboutSection.tsx

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-6 text-violet-400">Chi sono</h2>
      <p className="max-w-3xl text-lg text-gray-300">
        Sono un developer appassionato di design e tecnologia. Mi piace creare
        esperienze interattive, visive e funzionali, con un tocco personale. Il
        mio percorso mi ha portato a lavorare su progetti freelance, startup e
        hackathon, crescendo ogni giorno.
      </p>
    </section>
  );
}
