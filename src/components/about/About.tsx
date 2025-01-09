'use client';
import Image from 'next/image';
import ImageUser from '@/images/user/Programming-rafiki.png';

export default function About() {
  return (
    <>
      <div id='about' className="bg-[#070F2B] h-min-screen">
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
      </div>
    </>
  );
}
