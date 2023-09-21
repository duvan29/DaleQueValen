import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReusableButton from '../ReusableButton/ReusableButton';

const CardProyectCarousel = ({title, description, image, id}) => {
  return (
    <div className='flex md:h-[450px] ms:h-[190px] ms:flex-row-reverse lg:flex-row'> 
      {/* Lado izquierdo */}
      <div className='md:w-[50%] ms:w-full h-full flex flex-col justify-center relative'>
        <h2 className='text-black md:mb-[20px] ms:text-[12px] md:text-[24px]'>{title}</h2>
        <h4 className='text-black md:mb-[20px] md:max-w-[500px] md:text-[20px] ms:text-[10px] overflow-hidden'>{description}</h4>
        <div className='lg:w-[80%]  ms:w-[100%] text-right md:mb-[10px] '>
          <Link href='/proyectos'>
                <botton className='text-orange ms:underline'>
                  <h6 className='ms:text-[12px] md:text-[20px]'>Ver Más</h6>
                </botton>
          </Link>
      </div>
      </div>
      {/* Lado derecho con imagen de fondo */}
      <div className='mt-[1px] md:w-[50%] ms:w-[120px] md:h-[450px] ms:h-full md:relative ms:mr-[15px] lg:mr-[0px]'>
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


