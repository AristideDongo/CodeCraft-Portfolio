import React from 'react';
import { Award, Calendar, Check } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      titre: "AWS Certified Solutions Architect",
      organisme: "Amazon Web Services",
      date: "Décembre 2023",
      competences: ["Cloud Architecture", "AWS Services", "Security"],
      status: "Actif",
      dateExpiration: "Décembre 2026"
    },
    {
      id: 2,
      titre: "Professional Scrum Master I",
      organisme: "Scrum.org",
      date: "Octobre 2023",
      competences: ["Agile", "Scrum", "Project Management"],
      status: "Actif",
      dateExpiration: "N/A"
    }
  ];

  return (
    <div id='certificate' className="max-w-4xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="mb-4 text-[40px] font-bold text-[#9290C3]">Certifications</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Découvrez mes certifications professionnelles et accréditations techniques
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div 
            key={cert.id}
            className="backdrop-blur-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 border border-slate-700/50"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-blue-500" />
                <div>
                  <h3 className="text-xl font-bold text-white">{cert.titre}</h3>
                  <p className="text-blue-400">{cert.organisme}</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400 border border-green-500/30">
                {cert.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 text-slate-300">
              <div>
                <p className="text-sm text-slate-400">Date d&apos;obtention</p>
                <div className="flex items-center mt-1">
                  <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                  {cert.date}
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-400">Expiration</p>
                <div className="flex items-center mt-1">
                  <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                  {cert.dateExpiration}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-slate-400 mb-2">Compétences validées</p>
              <div className="flex flex-wrap gap-2">
                {cert.competences.map((competence, idx) => (
                  <span
                    key={idx}
                    className="flex items-center px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400 border border-blue-500/30"
                  >
                    <Check className="w-3 h-3 mr-1" />
                    {competence}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;