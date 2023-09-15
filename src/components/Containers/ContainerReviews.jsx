import React from 'react';
import CardReview from '../Card/CardReview';

const ContainerReviews = () => {
  return (
    <div className='pt-[60px] pb-[60px]'> 
    <h1 className='text-yellow mb-[40px]'>TESTIMONIOS</h1>
    <div className="flex flex-wrap justify-between">
        <CardReview
            testimonio="Sobre la condición de Valentino y tantos niños excluidos del sistema. Sobre la condición de Valentino y tantos niños excluidos del sistema. Sobre la condición de Valentino y tantos niños excluidos del sistema. Sobre la condición de Valentino y tantos niños excluidos del sistema."
            name="Eye"
            profession="CONCIENTIZAR"
        />
        <CardReview
            testimonio="Más opciones de ortopedia y mejores terapias con Tucumán."
            name="Share"
            profession="CONECTAR"
        />
        <CardReview
            testimonio="A terapeutas y médicos con nuevas tecnologías y terapias"
            name="Pc"
            profession="CAPACITAR"
        />
    </div>
</div>
  );
};

export default ContainerReviews;