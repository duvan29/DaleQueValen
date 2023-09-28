import React from 'react';
import CardReview from '../Card/CardReview';
import { Carousel } from '../Carousels/carousel';

const ContainerReviews = () => {
  return (
    <div className='pt-[60px] pb-[60px]'> 
    <h1 className='md:text-black  md:text-[30px] md:text-left ms:mb-[12px] md:mb-[40px]  ms:text-center ms:text-black ms:text-[14px]'>TESTIMONIOS</h1>
        <div className='lg:-ml-[140px] lg:-mr-[140px] ms:-ml-[15px] ms:-mr-[15px]'>
            <Carousel >
                <CardReview
                    testimonio="“Gracias a la fundación por solucionarnos y conseguir el cuello ortopédico danmar para nuestro hijo. Gracias a los que están trabajando y haciendo posible los cambios,nos sentimos acompañados y orientados en este camino tan difícil"
                    name="María"
                    profession="Mamá de Mateo"
                />
                <CardReview
                    testimonio="“Como terapeuta ocupacional, me siento muy afortunada de contar con el respaldo de la fundación Dale que Valen. Gracias a ellos, he podido conocer medicina alternativa que me han permitido actualizar mis conocimientos y habilidades"
                    name="Mariana"
                    profession="Terapeuta ocupacional"
                />
                <CardReview
                    testimonio="“Gracias por brindarles a estos niños una oportunidad de mejorar su calidad de vida y su desarrollo integral. Su trabajo es admirable y necesario en nuestra comunidad"
                    name="Lucía"
                    profession="Empleada de comercio"
                />
                 <CardReview
                    testimonio="“No tengo palabras para agradecer a la fundación por su invaluable colaboración. Gracias a su donación, mi hijo pudo acceder a un tratamiento especializado con medicación que no estaba a nuestro alcance. Su gesto ha hecho una gran diferencia en nuestra vida familiar y en el bienestar de mi hijo"
                    name="Paulina"
                    profession="Mamá de Liam"
                />
                <CardReview
                    testimonio="“Quiero agradecerles por la oportunidad de conocer su proyecto a través de las redes.. Aprendí mucho de los niños y de sus ganas de superarse."
                    name="Nestor"
                    profession="Diseñador Gráfico"
                />
            </Carousel>
        </div>
</div>
  );
};

export default ContainerReviews;