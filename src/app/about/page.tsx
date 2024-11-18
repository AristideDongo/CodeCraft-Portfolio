'use client';
import Image from 'next/image';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGithub } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiFlutter, SiJavascript, SiNestjs, SiTypescript } from 'react-icons/si';
import { DiGit, DiMongodb } from 'react-icons/di';
import ImageUser from '@/images/user/Programming-rafiki.png';

export default function About() {
  return (
    <>
      <div className="bg-[#070F2B] h-min-screen">
        <div className="flex flex-col mx-10 lg:flex-row items-center p-8">
          {/* Section Description */}
          <div className="lg:w-1/2 mt-32 space-y-4 text-left">
            <h1 className="text-[40px] font-bold text-[#9290C3]">Quelques mots sur moi</h1>
            <p className="text-[20px] text-[#E2DFD0]">
              Je suis un développeur passionné, spécialisé dans la création de solutions Web et d&apos;applications mobiles élégantes et logiques.
              J&apos;aime résoudre des problèmes complexes tout en créant des expériences utilisateur fluides et agréables.
            </p>
            <p className="text-[20px] text-[#E2DFD0]">
              En dehors de la programmation, j&apos;aime concevoir et explorer de nouvelles technologies.
            </p>
          </div>

          {/* Section Photo */}
          <div className="lg:w-1/2 mt-32 lg:mt-0 flex justify-center">
            <Image
              src={ImageUser}
              alt="Your Name"
              width={300}
              height={300}
              className="rounded-lg mt-20 object-cover"
            />
          </div>
        </div>

        {/* Section Langages de Programmation */}
        <div className="p-8 bg-[#070F2B]">
          <h2 className="text-[40px] font-bold text-center text-[#9290C3]">Langages que je maîtrise</h2>
          <div className="grid grid-cols-4 gap-8 mt-6 justify-items-center">
            <FaReact size={60} className="text-blue-600" />
            <FaNodeJs size={60} className="text-green-600" />
            <SiFlutter size={60} className="text-blue-500" />
            <RiNextjsFill size={60} className="text-black" />
            <FaCss3Alt size={60} className="text-blue-600" />
            <FaHtml5 size={60} className="text-orange-600" />
            <SiJavascript size={60} className="text-yellow-500" />
            <SiNestjs size={60} className="text-rose-600" />
            <SiTypescript size={60} className="text-blue-600" />
            <FaGithub size={60} className="text-gray-800" />
            <DiGit size={60} className="text-orange-600" />
            <DiMongodb size={60} className="text-green-600" />
          </div>
        </div>

        {/* Section Services */}
        <div className="p-8 bg-[#070F2B]">
          <h2 className="text-[40px] font-bold text-center text-[#9290C3]">Solutions proposées</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-[#DBAFA0] p-6 rounded-lg shadow-lg text-black">
              <h3 className="text-[24px] font-bold mb-4 underline">Développement Web</h3>
              <p className="text-[18px] font-semibold text-black">
                Création de sites Web modernes et performants adaptés à vos besoins.
              </p>
            </div>
            <div className="bg-[#8C6A5D] p-6 rounded-lg shadow-lg text-black">
              <h3 className="text-[24px] font-bold mb-4 underline">Applications Mobiles</h3>
              <p className="text-[18px] font-semibold text-black">
                Développement d&apos;applications mobiles élégantes et réactives.
              </p>
            </div>
            <div className="bg-[#DBAFA0] p-6 rounded-lg shadow-lg text-black">
              <h3 className="text-[24px] font-bold mb-4 underline">UI/UX Design</h3>
              <p className="text-[18px] font-semibold text-black">
                Conception d&apos;interfaces utilisateur intuitives et agréables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
