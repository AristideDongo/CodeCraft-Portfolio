'use client'
import { useEffect, useState } from 'react';
import ImageFond from "@/images/pexels-pixabay-373543.jpg";
import Navbar from '@/components/NavbarHome';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${ImageFond.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Navbar />
      {/* Section principale */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-60 text-center relative overflow-hidden">
        {/* Superposition d'une couche noire transparente sur l'image */}
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

        {/* Espacement entre le titre et la navbar */}
        <h1 className="text-[90px] text-[#9290C3] mt-20 font-bold mb-6 z-10 
                        md:text-[70px] sm:text-[50px] xs:text-[40px]
                        sm:mt-12 xs:mt-16">
          ARISTIDE DOE
        </h1>
        <p className="text-xl mx-[220px] font-semibold text-[#F6F1EE] mb-6 z-10
                      md:mx-[100px] sm:mx-[50px] xs:mx-[20px] 
                      md:text-lg sm:text-base xs:text-sm">
          Passionné par le développement, je conçois des solutions web et mobiles innovantes en utilisant des technologies modernes telles que JavaScript, React et Next.js.
        </p>
        <button className="px-7 py-5 text-[20px] font-bold bg-transparent border-2 border-[#9290C3] text-[#9290C3] rounded-md hover:bg-[#9290C3] hover:text-black transition duration-300 z-10
                          md:px-6 md:py-4 sm:px-5 sm:py-3 xs:px-4 xs:py-2">
          Télécharger Mon CV
        </button>

        {/* Cercle lumineux qui suit la souris */}
        <div
          className="absolute w-10 h-10 rounded-full border border-[#00FF9C] bg-transparent opacity-90 pointer-events-none"
          style={{
            left: `${mousePosition.x - 20}px`,
            top: `${mousePosition.y - 20}px`,
            transition: 'left 0.1s ease, top 0.1s ease',
          }}
        ></div>
      </section>
    </div>
  );
}
