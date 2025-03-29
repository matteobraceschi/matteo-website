// src/app/components/PhotoTimeline.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/images/gruppo.jpg", text: "Friends" },
  { src: "/images/uci-project.png", text: "Uci Project" },
];

export default function PhotoTimeline() {
  return (
    <section id="esperienze" className="w-full py-32 px-6 flex flex-col gap-20">
      <h2 className="text-4xl font-bold text-center text-violet-400 mb-10">
        Esperienze
      </h2>
      <div className="flex flex-col gap-24">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative w-full min-h-[90vh] rounded-3xl overflow-hidden shadow-2xl"
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                src={photo.src}
                alt={photo.text}
                layout="fill"
                objectFit="cover"
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-8 z-10 bg-black/60 backdrop-blur-md px-6 py-4 rounded-xl text-white text-2xl max-w-xl shadow-lg"
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
