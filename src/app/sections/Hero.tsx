// src/app/components/Hero.tsx

"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

import { personalInfo } from "@/lib/personalInfo";

export default function Hero() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-black via-zinc-900 to-violet-900 text-white px-6 sm:px-8 md:px-16 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left gap-12 md:gap-0 pt-32 md:pt-24 relative overflow-hidden">
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          {personalInfo.name}
        </h1>
        <p className="text-lg sm:text-xl mt-4 text-violet-300 max-w-xl mx-auto md:mx-0">
          {personalInfo.description}
        </p>
      </motion.div>

      <motion.div
        className="flex items-center justify-center md:justify-end gap-6 z-10"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <a
          href={`mailto:${personalInfo.email}`}
          className="hover:scale-110 transition-transform"
        >
          <Mail size={32} className="text-violet-400 hover:text-violet-300" />
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Github size={32} className="text-violet-400 hover:text-violet-300" />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Linkedin
            size={32}
            className="text-violet-400 hover:text-violet-300"
          />
        </a>
      </motion.div>

      {/* Visual effect */}
      <div className="absolute w-[80vw] h-[80vw] bg-violet-600/10 rounded-full blur-[150px] top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0" />
    </section>
  );
}
