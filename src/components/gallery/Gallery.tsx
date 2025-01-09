'use client';
import React from 'react';
import { ProjectsData } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
    return (
        <div id='gallery' className="bg-[#070F2B] min-h-screen">
            <h1 className="text-center pt-28 text-[32px] md:text-[40px] font-bold text-[#9290C3] mb-8">
                Galerie
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-10 lg:px-20">
                {ProjectsData.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 max-w-[400px] mx-auto"
                    >
                        <Link href={`/gallery/${project.id}`}>
                            <Image
                                className="w-full h-[200px] object-cover"
                                width={400}
                                height={200}
                                src={project.imageUrl[0]}
                                alt={`${project.title} Image`}
                            />
                            <div className="p-6">
                                <h2 className="font-semibold text-lg text-gray-800 hover:text-indigo-600 transition duration-300">
                                    {project.title}
                                </h2>
                                <p className="text-gray-600 text-sm mt-2">
                                    {project.description}
                                </p>
                                <div className="flex justify-center items-center mt-4 flex-wrap gap-2">
                                    {project.stack.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-[#222831] text-cyan-500 px-3 py-1 rounded-md text-sm"
                                        >
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
