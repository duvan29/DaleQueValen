import React from 'react';
import { Carousel } from '../Carousels/carousel';
import CardTeam from '../Card/CardTeam';


const ContainerTeam = ({ equipo }) => {
  return (
    <div className='pt-[60px] pb-[60px] relative'> 
      <div className='flex '>
        <div className='w-[50%] flex items-center justify-start'>
          <h1 className='text-blue mb-[40px]'>Equipo de Trabajo</h1>
        </div>
      </div>
      <div className='-ml-[140px] -mr-[140px] bg-blue-50'>
        <Carousel>
          {equipo.map((equipo) => (
            <CardTeam
              key={equipo.id} // Agrega una clave única aquí
              id={equipo.id}
              description={equipo.description}
              title={equipo.title}  
              image={equipo.Image}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ContainerTeam;
