// src/app/components/Navbar.tsx

"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/personalInfo";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md py-4 px-8 flex justify-between items-center shadow-md"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-xl font-semibold text-white">{personalInfo.name}</h2>
      <div className="flex gap-4">
        <a
          href="#esperienze"
          className="text-violet-300 hover:text-white transition"
        >
          About
        </a>
        <a
          href="#progetti"
          className="text-violet-300 hover:text-white transition"
        >
          Projects
        </a>
        <a
          href="#contatti"
          className="text-violet-300 hover:text-white transition"
        >
          Contacts
        </a>
      </div>
    </motion.nav>
  );
}
