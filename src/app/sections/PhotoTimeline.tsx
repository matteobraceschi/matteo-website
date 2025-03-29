// src/app/components/PhotoTimeline.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/images/gruppo.jpg", text: "Friends" },
  { src: "/images/japan.png", text: "Japan Trip" },
];

export default function PhotoTimeline() {
  return (
    <section
      id="esperienze"
      className="w-full py-24 px-4 sm:px-6 flex flex-col gap-12 sm:gap-20"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-violet-400 mb-8 sm:mb-10">
        Esperienze
      </h2>
      <div className="flex flex-col gap-16 sm:gap-24">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative w-full flex justify-center items-center bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl min-h-[60vh] sm:min-h-[80vh]"
          >
            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                src={photo.src}
                alt={photo.text}
                width={1000}
                height={600}
                className="object-contain max-h-[80vh] w-auto h-auto"
                priority={index === 0}
              />
            </motion.div>

            <motion.div
              className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-10 bg-black/60 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl text-white text-lg sm:text-2xl max-w-xs sm:max-w-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {photo.text}
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
