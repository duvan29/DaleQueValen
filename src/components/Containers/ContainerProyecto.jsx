'use client'
import React, { useEffect, useState } from 'react';
import ProyectoCard from '../Card/CardProyects';
import Image from 'next/image';


function ProyectoContainer({proyects}) {
  const [selectedProject, setSelectedProject] = useState(proyects[0]); // Establecer el primer proyecto como seleccionado por defecto

  const handleProjectClick = (id) => {
    const project = proyects.find((project) => project.id === id);
    setSelectedProject(project);
  };

  useEffect(() => {
    // Establecer el primer proyecto como seleccionado cuando se carga la página
    setSelectedProject(proyects[0]);
  }, []); // El segundo argumento vacío asegura que esto solo se ejecute una vez al cargar la página

  return (
    <div className="ms:mb-[40px] lg:mb-[80px]">
      <div className="flex md:space-x-4 ms:space-x-2">
      {proyects.map((project) => (
          <ProyectoCard
            key={project.id}
            project={project}
            onClick={handleProjectClick}
            isActive={project.id === selectedProject.id}
          />
        ))}
      </div>
      <div>
        {selectedProject && (
          <div>
          <div className="h-full relative lg:mb-10 md:mb-5 ms:mb-0 md:rounded-b-lg">
            <Image
              src={selectedProject.Image}
              alt={selectedProject.title}
              className="md:h-[270px] ms:h-[165px] w-full object-cover md:rounded-b-lg"
            />
            <h1 className="absolute inset-0 flex items-center justify-center text-center text-orange bg-black-50 md:rounded-b-lg">
              {selectedProject.title}
            </h1>
          </div>
          
          <div className='ms:p-5 md:p-0 ms:bg-orange-20 md:bg-white ms:rounded-b-lg'>
            <h6 className='ms:text-[14px] md:text-[20px]'>Resumen</h6>
            <p className='mb-[30px] ms:text-[10px] md:text-[16px]'>{selectedProject.description}</p>
            <h6 className='ms:text-[14px] md:text-[20px]'>{selectedProject.title}</h6>
            {
              selectedProject.complete.split('\n\n').map((paragraph, index) => (
                <p key={index} className='ms:text-[10px] md:text-[16px]'>
                  {paragraph}
                  <br /><br /> {/* Dos saltos de línea */}
                </p>
            ))
          }
          </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProyectoContainer;
