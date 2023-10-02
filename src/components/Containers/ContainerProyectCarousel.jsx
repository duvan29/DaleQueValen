import React from 'react';
import CardProyectCarousel from '../Card/CardProyectCarousel';
import { Carousel } from '../Carousels/carousel';
import ReusableButton from '../ReusableButton/ReusableButton';
import Link from 'next/link';

const ContainerProyectCarousel = ({ proyects }) => {
  return (
    <div className='md:pt-[60px] md:pb-[60px] ms:pb-[10px] relative'> 
      <div className='flex ms:mb-[12px] md:mb-[40px]'>
        <div className='md:w-[50%] ms:w-[100%]'>
          <h1 className='md:text-orange  md:text-[30px] md:text-left  ms:text-center ms:text-black ms:text-[14px]'>PROYECTOS</h1>
        </div>
        <div className='md:flex md:justify-end md:w-[50%] ms:hidden'>
          <Link href='/sumate' className="w-[275px]">
              <button className='bg-orange-20 w-full h-16 px-4 py-3 hover:bg-orange transition-all duration-500 ease-in-out flex items-center justify-center border-2 border-orange text-gray hover:text-white rounded-xl'>
                <h6>Quiero Colaborar</h6>
              </button>
          </Link>
        </div>
      </div>
      <div className='lg:-ml-[140px] lg:-mr-[140px] ms:-ml-[15px] ms:-mr-[15px] bg-orange-20'>
        <Carousel useFlexStyle={true}>
          {proyects.map((proyect) => (
            <CardProyectCarousel 
              key={proyect.id} // Agrega una clave única aquí
              id={proyect.id}
              description={proyect.description}
              title={proyect.title}  
              image={proyect.Image}
            />
          ))}
        </Carousel>
      </div>
      <div className='ms:flex ms:justify-end ms:w-[100%] md:hidden'>
          <Link href='/sumate'>
              <button className='bg-white h-[36px] w-[180px] px-4 py-3 my-[12px] flex items-center justify-center border-2 border-orange rounded-xl text-orange'>
                <h6 className='text-[12px]'>Colaborar</h6>
              </button>
          </Link>
        </div>
    </div>
  );
};

export default ContainerProyectCarousel;
