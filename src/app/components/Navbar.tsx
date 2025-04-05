// src/app/components/Navbar.tsx

"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/personalInfo";
import Link from "next/link"; // Assuming you are using Next.js

function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md py-4 px-8 flex justify-between items-center shadow-md"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Link href="/" onClick={scrollToTop}>
        {" "}
        {/* Use Next.js Link and onClick */}
        <h2 className="text-xl font-semibold text-white cursor-pointer">
          {" "}
          {/* Add cursor-pointer for better UX */}
          {personalInfo.name}{" "}
        </h2>
      </Link>
      <div className="flex gap-4">
        <a
          href="#esperienze"
          className="text-violet-300 hover:text-white transition"
        >
          About
        </a>
        {/* Add other navigation links here */}
      </div>
    </motion.nav>
  );
}

export default Navbar;
