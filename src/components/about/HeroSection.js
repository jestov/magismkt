import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import Arrow from "@/components/icons/Arrow";
import Shine from "@/components/icons/Shine";

function getRandomIndexes(size, numActive) {
  const indexes = [];
  while (indexes.length < numActive) {
    const randomIndex = Math.floor(Math.random() * size);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }
  return indexes;
}

function HeroSection() {
  const desktopGridSize = 84; // Grid para pantallas grandes (12x7)
  const mobileGridSize = 36; // Grid reducido para pantallas móviles (4x4)
  const [gridSize, setGridSize] = useState(desktopGridSize);
  const [grid, setGrid] = useState(Array(gridSize).fill(false));
  const [isFading, setIsFading] = useState(Array(gridSize).fill(false)); // Para controlar el fade-out

  // Detectar cambios de tamaño de pantalla y ajustar gridSize dinámicamente
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setGridSize(mobileGridSize); // Pantallas móviles
      } else {
        setGridSize(desktopGridSize); // Pantallas grandes
      }
    };

    handleResize(); // Ajustar el grid al cargar por primera vez
    window.addEventListener("resize", handleResize); // Escuchar cambios de tamaño de ventana

    return () => window.removeEventListener("resize", handleResize); // Cleanup al desmontar
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const activeIndexes = getRandomIndexes(
        gridSize,
        3 + Math.floor(Math.random() * 3), // Entre 3 y 5 cuadros activos
      );

      // Paso 1: Fade out
      setIsFading(Array(gridSize).fill(true));

      // Paso 2: Después de una pequeña espera, cambiar el fondo y hacer fade-in
      setTimeout(() => {
        setGrid(grid.map((_, idx) => activeIndexes.includes(idx)));
        setIsFading(Array(gridSize).fill(false));
      }, 1000); // Esperar 1000ms antes de cambiar el fondo
    }, 3000); // Ajustar el tiempo para el ciclo completo

    return () => clearInterval(intervalId); // Limpiar intervalo al desmontar el componente
  }, [gridSize]); // Escuchar cambios en gridSize

  return (
    <section className="relative z-20 text-white text-left px-[20px] py-32 lg:p-8 lg:min-h-[100vh] flex flex-col justify-center items-center w-full bg-[url('/images/team.jpg')] bg-cover bg-center lg:bg-fixed">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-main via-[rgba(25,12,19,0.25)] to-transparent bg-opacity-60 z-20"></div>

      {/* Contenido */}
      <div className="relative z-30 px-4 flex flex-col gap-4 lg:gap-10 w-full mx-auto max-w-7xl">
        <div className="flex gap-4 items-center">
          <Shine color="#DC0073" />
          <h4>
            Who <span className="font-ramillas italic text-110">we are</span>
          </h4>
        </div>
        <h5>
          We are a{" "}
          <span className="text-main bg-pink inline px-1.5 lg:px-2.5 py-0.25 lg:py-1.5 -z-10 relative rounded-full font-ramillas italic font-bold text-110">
            100% women-led
          </span>{" "}
          multidisciplinary team.
        </h5>

        <div className="flex items-center">
          <Button
            text="Meet the team"
            bgColor="bg-black"
            textColor="text-white"
            iconBgColor="bg-green"
            href="#services"
            icon={Arrow}
          />
        </div>
      </div>
      {/* 4x4 Grid en móvil y 12x7 en pantallas grandes */}
      <div
        className={`grid ${
          gridSize === mobileGridSize
            ? "grid-cols-6 grid-rows-6"
            : "grid-cols-12 grid-rows-7"
        } absolute w-full h-full top-0 z-20 left-0`}
      >
        {grid.slice(0, gridSize).map((isGreen, index) => (
          <div
            key={index}
            className="relative w-full h-full border border-white !border-opacity-5 border-collapse"
          >
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isFading[index] ? "opacity-0" : "opacity-100"
              } ${isGreen ? "bg-green bg-opacity-80" : ""}`}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-4 items-center absolute bottom-[10vh] lg:bottom-[18vh] z-20">
        <h3
          className="text-pinkSecondary flex items-center gap-2
          "
        >
          Magis <span className="font-light">=</span>
          <span className="text-green font-ramillas font-bold text-105 italic">
            More
          </span>{" "}
          <span className="text-50 font-ramillas font-medium italic text-white tracking-normal -mb-1">
            in Latin
          </span>
        </h3>
      </div>
    </section>
  );
}

export default HeroSection;