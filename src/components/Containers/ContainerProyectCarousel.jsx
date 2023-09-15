import React from 'react';
import CardProyectCarousel from '../Card/CardProyectCarousel';
import { Carousel } from '../Carousels/carousel';

const ContainerProyectCarousel = ({ proyects }) => {
  return (
    <div className='pt-[60px] pb-[60px] relative'> 
      <div className='flex '>
        <div className='w-[50%]'>
          <h1 className='text-orange mb-[40px] '>PROYECTOS</h1>
        </div>
        <div className='flex justify-end w-[50%]'>
          <button>Hola</button>
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
