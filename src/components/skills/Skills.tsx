import React from 'react';

const Competences = () => {
  const competences = [
    { nom: 'JavaScript', niveau: 100 },
    { nom: 'React', niveau: 50 },
    { nom: 'Tailwind CSS', niveau: 50 },
    { nom: 'Node.js', niveau: 25 },
  ];

  // Calcul de la moyenne simple des pourcentages
  const totalCompetence = competences.reduce((sum, competence) => sum + competence.niveau, 0) / competences.length;

  return (
    <div id='skills' className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="mb-4 text-center text-[40px] font-bold text-[#9290C3]">
          Mes Compétences
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {competences.map((competence, index) => (
            <div key={index} className="bg-[#1B1A55] overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-200">
                  {competence.nom}
                </h3>
                <div className="mt-2">
                  <span className="text-sm text-gray-500">{competence.niveau}%</span>
                  <div className="mt-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${competence.niveau}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <p className="text-xl text-gray-400">Pourcentage total de compétences: <strong className='text-green-600'>{totalCompetence.toFixed(2)}%</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Competences;