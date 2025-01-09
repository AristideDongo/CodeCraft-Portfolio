'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/NavbarHome';
import About from '@/components/about/About';
import Experience from '@/components/experience/Experience';
import Gallery from '@/components/gallery/Gallery';
import Contact from '@/components/contact/Contact';
import UserImage from '@/images/user/Sans titre.png'
import EducationSection from '@/components/Formations/Formations';
import CertificationsSection from '@/components/certificate/certifications';
import Competences from '@/components/skills/Skills';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative">
      <Navbar />
    {/* Hero Section */}
<section className="relative min-h-screen w-full bg-[#070F2B] overflow-hidden">
  {/* Split Container */}
  <div className="container mx-auto h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-10 gap-6 lg:gap-12">
    {/* Left Side - Image */}
    <div className="w-full lg:w-5/12 h-auto lg:h-[600px] relative order-2 lg:order-1">
      <div className="relative mt-[50px] sm:mt-[100px] lg:mt-[150px] w-full h-[300px] sm:h-[400px] lg:h-full rounded-2xl overflow-hidden">
        <Image
          src={UserImage}
          alt="Profile"
          fill
          className="object-cover"
          priority
        />
        
        {/* Decorative Elements */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#9290C3] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#9290C3] rounded-full blur-3xl opacity-20"></div>
      </div>
    </div>

    {/* Right Side - Content */}
    <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
      <div className="flex items-center mb-4">
        <div className="h-[2px] w-8 sm:w-12 bg-[#9290C3] mr-3 sm:mr-4"></div>
        <span className="text-[#9290C3] font-medium text-sm sm:text-base">Développeur Full Stack</span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] text-[#9290C3] font-bold mb-4 sm:mb-6 leading-tight">
        ARISTIDE DOE
      </h1>
      
      <p className="max-w-2xl lg:max-w-none text-xs sm:text-sm md:text-base text-[#F6F1EE] font-medium mb-6 sm:mb-8 leading-relaxed">
        Passionné par le développement, je conçois des solutions web et mobiles innovantes
        en utilisant des technologies modernes telles que JavaScript, React et Next.js.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
        <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-bold 
                           border-2 border-[#9290C3] text-[#9290C3] 
                           rounded-md transition duration-300
                           hover:bg-[#9290C3] hover:text-black
                           focus:ring-2 focus:ring-[#9290C3] focus:ring-offset-2 focus:ring-offset-[#070F2B]">
          Télécharger Mon CV
        </button>
      </div>
    </div>
  </div>

  {/* Mouse Follower */}
  <div
    className="fixed w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#00FF9C]
               pointer-events-none mix-blend-difference z-50"
    style={{
      left: `${mousePosition.x - 20}px`,
      top: `${mousePosition.y - 20}px`,
      transition: 'all 0.15s ease-out',
    }}
  />
</section>

      {/* Other Sections */}
      <section className="bg-[#070F2B]">
        <About />
        <Competences />
        <EducationSection />
        <Experience />
        <CertificationsSection />
        <Gallery />
        <Contact />
      </section>
    </main>
  );
}