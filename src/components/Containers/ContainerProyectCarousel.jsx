import React from 'react';
import CardProyectCarousel from '../Card/CardProyectCarousel';
import { Carousel } from '../Carousels/carousel';
import ReusableButton from '../ReusableButton/ReusableButton';
import Link from 'next/link';

const ContainerProyectCarousel = ({ proyects }) => {
  return (
    <div className='pt-[60px] pb-[60px] relative'> 
      <div className='flex '>
        <div className='w-[50%] flex items-center justify-start'>
          <h1 className='text-orange'>PROYECTOS</h1>
        </div>
        <div className='flex justify-end w-[40%]'>
          <Link href='/sumate' className="w-[275px]">
              <ReusableButton color="orange" border='orange' text='black' width="full" >
                Quiero Colaborar
              </ReusableButton>
          </Link>
        </div>
      </div>
      <div className='-ml-[140px] -mr-[140px] bg-orange-50'>
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
