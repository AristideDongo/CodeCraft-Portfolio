import { experienceData } from '@/data/experience';
import Image from 'next/image';
import Image1 from '@/images/entreprise/meta.webp';
import { LuPin } from 'react-icons/lu';

export default function Experience() {
  return (
    <section className="bg-[#070F2B] py-10">
      <div className="container mx-auto mt-24 px-4">
        <h2 className="text-[40px] font-bold text-center text-[#9290C3] mb-6">Expérience</h2>
        <p className='text-white text-[16px] font-semibold mx-auto sm:mx-4 md:mx-32 mb-6'>
          J&apos;ai travaillé sur des projets web et mobiles, en créant des solutions adaptées aux besoins des clients grâce à des technologies modernes comme React, Next.js et Flutter. Ces expériences m&apos;ont permis de développer mes compétences techniques et ma capacité à collaborer efficacement en équipe.
        </p>
        <div className="relative">
          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className={`mb-8 flex flex-col sm:flex-row items-center ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              {/* Ligne de connexion */}
              <div className="w-1/12 relative mb-4 sm:mb-0">
                <div className="h-full w-[2px] bg-gray-300 mx-auto"></div>
                <div className="w-4 h-4 rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  {/* Icône épingle avec React Icons */}
                  <LuPin className="text-white w-6 h-6" />
                </div>
              </div>

              {/* Contenu de la carte */}
              <div className="w-full sm:w-11/12 md:w-6/12 bg-[#1B1A55] shadow-md rounded-lg p-6">
                <h3 className="text-[30px] font-bold text-[#E7CBCB]">{exp.title}</h3>
                <h4 className="text-gray-200 text-[15px] font-semibold">{exp.company}</h4>
                <p className="text-base font-medium text-gray-100 mb-4">{exp.date}</p>
                <p className="text-[#E5E5CB] font-semibold text-[17px]">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Entreprises */}
        <div className="mt-16">
          <h3 className="text-[30px] font-bold text-center text-[#9290C3] mb-6">Avec Qui J&apos;ai Travaillé</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Images des entreprises */}
            <div className="w-full h-32 bg-transparent rounded-lg flex justify-center items-center">
              <Image
                src={Image1}
                alt="Entreprise 1"
                className="max-h-full object-contain" />
            </div>
            <div className="w-full h-32 bg-transparent rounded-lg flex justify-center items-center">
              <Image
                src={Image1}
                alt="Entreprise 2"
                className="max-h-full object-contain" />
            </div>
            <div className="w-full h-32 bg-transparent rounded-lg flex justify-center items-center">
              <Image
                src={Image1}
                alt="Entreprise 3"
                className="max-h-full object-contain" />
            </div>
            <div className="w-full h-32 bg-transparent rounded-lg flex justify-center items-center">
              <Image
                src={Image1}
                alt="Entreprise 4"
                className="max-h-full object-contain" />
            </div>
            <div className="w-full h-32 bg-transparent rounded-lg flex justify-center items-center">
              <Image
                src={Image1}
                alt="Entreprise 5"
                className="max-h-full object-contain" />
            </div>
            <div className="w-full h-32 bg-transparent rounded-lg flex justify-center items-center">
              <Image
                src={Image1}
                alt="Entreprise 6"
                className="max-h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
