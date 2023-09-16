import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReusableButton from '../BotonReutilizable/ReusableButton';

const CardProyectCarousel = ({title, description, image}) => {
  return (
    <div className='flex h-[450px]'> 
      {/* Lado izquierdo */}
      <div className='w-[40%] h-full flex flex-col justify-center relative'>
        <h1 className='text-black mb-[20px]'>{title}</h1>
        <p className='text-black mb-[20px] max-w-[500px]'>{description}</p>
        <div className='absolute bottom-0 right-0 m-8'>
          <Link href='/proyectos' className="w-[175px]">
                <ReusableButton color="white" border='orange' width="full">
                  Ver más
                </ReusableButton>
          </Link>
      </div>
      </div>
      {/* Lado derecho con imagen de fondo */}
      <div className='w-[60%] h-[450px] relative'>
        <Image
          src={image}
          layout="fill" 
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default CardProyectCarousel;


