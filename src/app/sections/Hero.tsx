// src/app/components/Hero.tsx

"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

import { personalInfo } from "@/lib/personalInfo";

export default function Hero() {
  return (
    <section className="h-screen w-full bg-gradient-to-br from-black via-zinc-900 to-violet-900 text-white px-8 md:px-16 flex items-center justify-between relative overflow-hidden pt-24">
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          {personalInfo.name}
        </h1>
        <p className="text-xl mt-4 text-violet-300">
          {personalInfo.description}
        </p>
      </motion.div>

      <motion.div
        className="flex items-center gap-6 z-10"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <a
          href={`mailto:${personalInfo.email}`}
          className="hover:scale-110 transition-transform"
        >
          <Mail size={40} className="text-violet-400 hover:text-violet-300" />
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Github size={40} className="text-violet-400 hover:text-violet-300" />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Linkedin
            size={40}
            className="text-violet-400 hover:text-violet-300"
          />
        </a>
      </motion.div>

      {/* Light visual background effect */}
      <div className="absolute w-[60vw] h-[60vw] bg-violet-600/10 rounded-full blur-[150px] top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-0" />
    </section>
  );
}
