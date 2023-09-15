import Image from 'next/image';
import React from 'react';

const CardProyectCarousel = ({title, description, image}) => {
  return (
    <div className='flex h-[450px]'> 
      {/* Lado izquierdo */}
      <div className='w-[40%] h-full flex flex-col justify-center relative'>
        <h1 className='text-black mb-[20px]'>{title}</h1>
        <p className='text-black mb-[20px] max-w-[500px]'>{description}</p>
        <div className='absolute bottom-0 right-0 m-8'>
            <button className='bg-blue text-white px-4 py-2 rounded-lg'>Botón</button>
        </div>
      </div>
      {/* Lado derecho con imagen de fondo */}
      <div className='w-[60%] h-[450px] relative'>
        <Image
          src={image}
          alt='Logo'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      </div>
    </div>
  );
};

export default CardProyectCarousel;


