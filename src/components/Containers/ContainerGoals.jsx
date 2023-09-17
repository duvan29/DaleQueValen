// CardGoalsContainer.js
import React from 'react';
import CardGoals from '../Card/CardGoals';

const CardGoalsContainer = () => {
  return (
    <div className='pt-[60px] pb-[60px]'> 
        <h1 className='text-purple mb-[40px]'>Nuestros Objetivos</h1>
        <div className="flex flex-wrap justify-between">

    
            <CardGoals
                description="Sobre la condición de Valentino y tantos niños excluidos del sistema."
                icon="Facebook"
                textIcon="CONCIENTIZAR"
            />
            <CardGoals
                description="Más opciones de ortopedia y mejores terapias con Tucumán."
                icon="Facebook"
                textIcon="CONECTAR"
            />
            <CardGoals
                description="A terapeutas y médicos con nuevas tecnologías y terapias"
                icon="Facebook"
                textIcon="CAPACITAR"
            />
            <CardGoals
                description="Valorar y respetar las diferencias porque no hay una sola forma de ser para ser valioso, interesante, querible o exitoso."
                icon="Facebook"
                textIcon="EMPATIZAR"
            />
        </div>
    </div>
  );
};

export default CardGoalsContainer;

