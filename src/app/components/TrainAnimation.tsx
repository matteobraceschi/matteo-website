"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Plane, Line, Text } from "@react-three/drei";
import { useRef, useState, useEffect, WheelEvent } from "react";
import * as THREE from "three";
import { AnimatePresence, motion } from "framer-motion";
import TrainModel from "../models/TrainModel";

type City = {
  name: string;
  position: [number, number, number];
  images: string[];
};

const cities: City[] = [
  { name: "Tokyo", position: [4.9, 0.2, 3.3], images: ["/japan/tokyo.jpg"] },
  {
    name: "Kanazawa",
    position: [0, 0.2, 2],
    images: ["/japan/kanazawa.jpg", "/japan/kanazawa2.jpg"],
  },
  {
    name: "Shirakawa-go",
    position: [0.5, 0.2, 2.5],
    images: ["/japan/shirakawa-go.jpg", "/japan/shirakawa-go2.jpg"],
  },
  {
    name: "Kyoto",
    position: [-1.2, 0.2, 3.6],
    images: ["/japan/kyoto.jpg", "/japan/kyoto2.jpg"],
  },
  { name: "Nara", position: [-1.2, 0.2, 4.2], images: ["/japan/nara.jpg"] },
  { name: "Osaka", position: [-1.6, 0.2, 4.2], images: ["/japan/osaka.jpg"] },
  { name: "Himeji", position: [-3.2, 0.2, 4.4], images: ["/japan/himeji.jpg"] },
  {
    name: "Hiroshima",
    position: [-6.2, 0.2, 4.9],
    images: ["/japan/hiroshima.jpg"],
  },
  {
    name: "Fujiyoshida",
    position: [3.6, 0.2, 3.7],
    images: ["/japan/fujiyoshida.jpg", "/japan/fujiyoshida2.png"],
  },
  {
    name: "Tokyo",
    position: [4.9, 0.2, 3.3],
    images: ["/japan/tokyo2.jpg", "/japan/tokyo3.jpg"],
  },
];

export default function TrainAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isActiveSection, setIsActiveSection] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentCity, setCurrentCity] = useState<number | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const touchStartRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || animationComplete) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top <= 0 && rect.bottom > 0;

      if (inView) {
        setIsActiveSection(true);
        document.body.style.overflow = "hidden";
      } else {
        setIsActiveSection(false);
        document.body.style.overflow = "auto";
        setCurrentCity(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [animationComplete]);

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (!isActiveSection || animationComplete) return;
    e.preventDefault();
    const speedFactor = 0.01;
    const delta = e.deltaY > 0 ? speedFactor : -speedFactor;
    const nextProgress = Math.min(Math.max(progress + delta, 0), 1);
    setProgress(nextProgress);
    if (nextProgress >= 1) {
      setAnimationComplete(true);
      document.body.style.overflow = "auto";
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isActiveSection) return;
    touchStartRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isActiveSection || animationComplete || touchStartRef.current === null)
      return;
    const currentY = e.touches[0].clientY;
    const delta = touchStartRef.current - currentY;
    const speedFactor = 0.001;
    const nextProgress = Math.min(
      Math.max(progress + delta * speedFactor, 0),
      1
    );
    setProgress(nextProgress);
    if (nextProgress >= 1) {
      setAnimationComplete(true);
      document.body.style.overflow = "auto";
    }
    touchStartRef.current = currentY;
  };

  useEffect(() => {
    if (!isActiveSection) return;

    const segment = 1 / (cities.length - 1);
    if (progress >= 1) {
      setCurrentCity(cities.length - 1); // mostra ultima città
      return;
    }

    const index = Math.floor(progress / segment);
    const segmentStart = index * segment;
    const distance = Math.abs(progress - segmentStart);

    if (distance < segment * 0.35) {
      setCurrentCity(index);
    } else {
      setCurrentCity(null);
    }
  }, [progress, isActiveSection]);

  return (
    <div
      ref={sectionRef}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="relative w-full h-[100dvh] min-h-screen sticky top-0 overflow-hidden pt-20 sm:pt-0"
    >
      <AnimatePresence>
        {isActiveSection && currentCity !== null && !animationComplete && (
          <motion.div
            key={`city-${currentCity}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="pointer-events-none fixed top-0 left-0 w-full h-full flex items-center justify-center z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-black/70 to-white/10 backdrop-blur-md px-4 py-6 sm:px-8 sm:py-8 rounded-xl w-full max-w-4xl mx-auto"
            >
              <h2 className="text-xl sm:text-3xl font-semibold text-white mb-4 sm:mb-6 text-center">
                {cities[currentCity].name}
              </h2>

              <div
                className={
                  cities[currentCity].images.length === 1
                    ? "flex flex-col items-center gap-4 sm:gap-6"
                    : "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                }
              >
                {cities[currentCity].images.map((src, idx) => (
                  <motion.img
                    key={idx}
                    src={src}
                    alt="city"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="w-full max-w-full sm:max-w-md max-h-[40vh] h-auto object-contain rounded-2xl shadow-xl pointer-events-auto cursor-pointer"
                    onClick={() => setFullscreenImage(src)}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {fullscreenImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={() => setFullscreenImage(null)}
        >
          <motion.img
            src={fullscreenImage}
            alt="fullscreen"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </motion.div>
      )}

      <Canvas>
        <CameraController progress={progress} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <MapPlane />
        <TrainPath />
        {cities.map((city, index) => (
          <CityMarker key={index} name={city.name} position={city.position} />
        ))}
        <Train progress={progress} />
      </Canvas>
    </div>
  );
}

function MapPlane() {
  const texture = useLoader(THREE.TextureLoader, "/models/japan-map.png");
  return (
    <Plane args={[30, 20]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <meshStandardMaterial map={texture} roughness={1} />
    </Plane>
  );
}

function TrainPath() {
  const points = cities.map((city) => new THREE.Vector3(...city.position));
  return <Line points={points} color="white" lineWidth={2} dashed={false} />;
}

function Train({ progress }: { progress: number }) {
  const ref = useRef<THREE.Group>(null);
  const currentPos = useRef(new THREE.Vector3());

  useFrame(() => {
    if (!ref.current) return;
    const totalSegments = cities.length - 1;
    const realPosition = progress * totalSegments;
    const index = Math.floor(realPosition);
    const segmentT = realPosition - index;
    const from = cities[index]?.position;
    const to = cities[index + 1]?.position;
    if (!from || !to) return;

    const targetX = from[0] + (to[0] - from[0]) * segmentT;
    const targetY = from[1];
    const targetZ = from[2] + (to[2] - from[2]) * segmentT;
    const targetPos = new THREE.Vector3(targetX, targetY, targetZ);

    currentPos.current.lerp(targetPos, 0.05);
    ref.current.position.copy(currentPos.current);

    const lookTarget = new THREE.Vector3(to[0], targetY, to[2]);
    ref.current.lookAt(lookTarget);
  });

  return (
    <group ref={ref} name="Train">
      <TrainModel scale={[0.1, 0.1, 0.1]} />
    </group>
  );
}

function CameraController({ progress }: { progress: number }) {
  useFrame(({ camera, scene }) => {
    const start = new THREE.Vector3(0, 20, 0);
    const zoom = new THREE.Vector3(0, 7, 10);
    const end = new THREE.Vector3(0, 25, 25);

    const zoomInEnd = 0.08;
    const trainEnd = 0.9;

    if (progress < zoomInEnd) {
      const t = progress / zoomInEnd;
      camera.position.lerpVectors(start, zoom, t);
      camera.lookAt(0, 0, 0);
    } else if (progress < trainEnd) {
      const train = scene.getObjectByName("Train");
      if (train) {
        const pos = train.position.clone();
        const cameraOffset = new THREE.Vector3(0, 2.5, 5);
        const target = pos.clone().add(cameraOffset);
        camera.position.lerp(target, 0.02);
        camera.lookAt(pos);
      }
    } else {
      const t = (progress - trainEnd) / (1 - trainEnd);
      camera.position.lerpVectors(camera.position, end, t);
      camera.lookAt(0, 0, 0);
    }
  });

  return null;
}

function CityMarker({
  name,
  position,
}: {
  name: string;
  position: [number, number, number];
}) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <Text
        position={[0, 0.3, 0]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="bottom"
        outlineWidth={0.01}
        outlineColor="black"
      >
        {name}
      </Text>
    </group>
  );
}
