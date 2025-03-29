// src/app/components/ContactSection.tsx

import { personalInfo } from "@/lib/personalInfo";

export default function ContactSection() {
  return (
    <section
      id="contatti"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-6 text-violet-400">Contatti</h2>
      <p className="max-w-2xl text-lg text-gray-300 mb-8">
        Se vuoi collaborare o semplicemente fare due chiacchiere, scrivimi pure
        o seguimi sui social!
      </p>
      <div className="flex gap-6">
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-violet-400 hover:text-white transition text-lg"
        >
          Email
        </a>
        <a
          href={personalInfo.github}
          className="text-violet-400 hover:text-white transition text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href={personalInfo.linkedin}
          className="text-violet-400 hover:text-white transition text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
