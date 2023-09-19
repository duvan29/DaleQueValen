import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReusableButton from '../ReusableButton/ReusableButton';

const CardProyectCarousel = ({title, description, image, id}) => {
  return (
    <div className='flex h-[450px]'> 
      {/* Lado izquierdo */}
      <div className='w-[50%] h-full flex flex-col justify-center relative'>
        <h2 className='text-black mb-[20px]'>{title}</h2>
        <h4 className='text-black mb-[20px] max-w-[500px]'>{description}</h4>
        <div className='absolute bottom-0 right-0 m-8 w-[175px]'>
          <Link href='/proyectos'>
                <ReusableButton color="white" border='orange' text='orange' width="full">
                  Ver más
                </ReusableButton>
          </Link>
      </div>
      </div>
      {/* Lado derecho con imagen de fondo */}
      <div className='w-[50%] h-[450px] relative'>
        <Image
          key={id}
          id={id}
          src={image}
          className='h-full w-full object-cover'
        />
      </div>
    </div>
  );
};

export default CardProyectCarousel;


