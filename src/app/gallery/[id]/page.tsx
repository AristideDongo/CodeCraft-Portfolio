'use client';
import { ProjectsData } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from 'react-icons/fa'; // Importer l'icône

interface ProjectDetailsProps {
    params: { id: string };
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
    const { id } = params;
    const project = ProjectsData.find((p) => p.id.toString() === id);

    if (!project) {
        notFound();
    }

    const buttonBack = () => {
        window.location.href = '/gallery';
    };

    return (
        <div className="bg-[#070F2B] text-white min-h-screen">
            {/* Ajout d'un espace supérieur pour éviter le chevauchement */}
            <div className="max-w-screen-lg mx-auto p-8 pt-20">
                <div className="flex flex-col items-center">
                    {/* Bouton de retour */}
                    <button
                        onClick={buttonBack}
                        className="absolute top-24 left-8 px-4 py-2 bg-[#9290C3] text-black rounded-full shadow-lg hover:bg-[#6c6cb3] transition duration-300 flex items-center justify-center"
                    >
                        <FaArrowLeft className="text-xl mr-2" />
                    </button>
                    <h1 className="text-5xl mt-5 font-bold text-center mb-8 text-[#9290C3]">
                        {project.title}
                    </h1>
                    <p className="text-xl text-gray-100 text-center mt-6 mb-6 max-w-4xl">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {project.stack.map((stack, index) => (
                            <p
                                key={index}
                                className="bg-[#9290C3] text-black rounded px-4 py-2 text-sm md:text-md font-medium"
                            >
                                {stack.name}
                            </p>
                        ))}
                    </div>
                    {/* Conteneur dynamique pour les images */}
                    <div
                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(
                            project.imageUrl.length,
                            3
                        )} gap-8 w-full`}
                    >
                        {project.imageUrl.map((image, index) => (
                            <div
                                key={index}
                                className="relative mt-16 w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-xl transition-transform transform hover:scale-90"
                            >
                                <Image
                                    src={image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg shadow-xl transition-all duration-500"
                                />
                            </div>
                        ))}
                    </div>
                    <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 bg-[#9290C3] text-black py-3 px-6 rounded-lg font-bold hover:scale-90 transition duration-300"
                    >
                        Voir le projet en ligne
                    </Link>
                </div>
            </div>
        </div>
    );
}
