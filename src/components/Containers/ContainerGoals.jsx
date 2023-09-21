// CardGoalsContainer.js
import React from 'react';
import CardGoals from '../Card/CardGoals';

const CardGoalsContainer = () => {
  return (
    <div className="pt-[60px] pb-[60px]">
      <h1 className="mb-[40px] ms:text-black ms:text-center md:text-purple ms:text-[14px] md:text-[32px] md:text-left ">
        NUESTROS OBJETIVOS
      </h1>
      <div className="flex flex-wrap justify-evenly ">
        <CardGoals
          description="Sobre la condición de Valentino y tantos niños excluidos del sistema."
          icon="Eye"
          textIcon="CONCIENTIZAR"
        />
        <CardGoals
          description="Más opciones de ortopedia y mejores terapias con Tucumán."
          icon="Share"
          textIcon="CONECTAR"
        />
        <CardGoals
          description="A terapeutas y médicos con nuevas tecnologías y terapias"
          icon="Pc"
          textIcon="CAPACITAR"
        />
        <CardGoals
          description="Valorar y respetar las diferencias porque no hay una sola forma de ser para ser valioso, interesante, querible o exitoso."
          icon="Heart"
          textIcon="EMPATIZAR"
        />
      </div>
    </div>
  );
};

export default CardGoalsContainer;
