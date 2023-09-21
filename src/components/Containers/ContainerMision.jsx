import React from 'react';
import { Carousel } from '../Carousels/carousel';
import CardMision from '../Card/CardMision';


const ContainerMisionCarousel = ({ mision }) => {
  return (
    <div className='pt-[60px] pb-[60px] relative'> 
      <div className='flex '>
        <div className='w-[50%] flex items-center justify-start'>
          <h1 className='text-blue mb-[40px]'>Mision, Vision, Valores</h1>
        </div>
      </div>
      <div className='-ml-[140px] -mr-[140px] bg-blue-20'>
        <Carousel useFlexStyle={true}>
          {mision.map((mision) => (
            <CardMision
              key={mision.id} // Agrega una clave única aquí
              id={mision.id}
              description={mision.description}
              title={mision.title}  
              image={mision.Image}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ContainerMisionCarousel;
