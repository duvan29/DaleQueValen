import React from 'react';
import CardProyectCarousel from '../Card/CardProyectCarousel';
import { Carousel } from '../Carousels/carousel';
import ReusableButton from '../BotonReutilizable/ReusableButton';
import Link from 'next/link';

const ContainerProyectCarousel = ({ proyects }) => {
  return (
    <div className='pt-[60px] pb-[60px] relative'> 
      <div className='flex '>
        <div className='w-[50%]'>
          <h1 className='text-orange mb-[40px] '>PROYECTOS</h1>
        </div>
        <div className='flex justify-end w-[40%]'>
          <Link href='/sumate' className="w-[175px]">
              <ReusableButton color="green" width="full">
                Quiero Colaborar
              </ReusableButton>
          </Link>
        </div>
      </div>
      
      <div className='bg-orange opacity-50 absolute inset-0 -ml-[140px] mt-[148px] -mr-[140px] h-[450px]'></div>
      <div className='-ml-[140px] -mr-[140px]'>
        <Carousel>
          {proyects.map((proyect) => (
            <CardProyectCarousel 
              description={proyect.description}
              title={proyect.title}  
              image={proyect.Image}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ContainerProyectCarousel;
