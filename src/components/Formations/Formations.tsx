import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const formations = [
  {
    diplome: "Master en Développement Web",
    ecole: "École Supérieure du Digital",
    lieu: "Paris",
    periode: "2022 - 2024",
    description: "Spécialisation en développement front-end avec React et back-end avec Node.js. Projets réalisés en équipe avec méthodologie Agile.",
    competences: ["React", "Node.js", "TypeScript", "Docker"]
  },
  {
    diplome: "Licence Informatique",
    ecole: "Université de Paris",
    lieu: "Paris",
    periode: "2019 - 2022",
    description: "Formation fondamentale en informatique couvrant les algorithmes, les structures de données et la programmation orientée objet.",
    competences: ["Java", "Python", "SQL", "Algorithmes"]
  }
];

const EducationSection = () => {
  return (
    <div id='formations' className="max-w-4xl mx-auto py-16 px-4 relative">
      {/* Effet de fond futuriste */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 -z-10" />
      <div className="absolute inset-0 backdrop-blur-3xl -z-10" />

      <div className="text-center mb-16 relative">
        <h2 className=" mb-4 text-[40px] font-bold text-[#9290C3]">
          Formations
        </h2>
        <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
      </div>

      <div className="space-y-8">
        {formations.map((formation, index) => (
          <div 
            key={index}
            className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 
                     hover:bg-white/20 transition-all duration-300 group
                     shadow-[0_0_15px_rgba(59,130,246,0.1)]
                     hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
          >
            {/* Effet de bordure animée */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 
                          group-hover:opacity-10 transition-opacity duration-300" />

            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold ml-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                {formation.diplome}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                <span className="text-gray-200">{formation.ecole} - {formation.lieu}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-2 text-purple-500" />
                <span className="text-gray-200">{formation.periode}</span>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {formation.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {formation.competences.map((competence, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 rounded-full text-sm
                           bg-gradient-to-r from-blue-500/10 to-purple-500/10
                           border border-white/10 backdrop-blur-sm
                           text-white shadow-lg"
                >
                  {competence}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;