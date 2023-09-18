import { Images } from "@/assets/img";
import Image from "next/image";

const BannerConocenos = () => {
  return (
    <div>
      <h1 className="text-blue mb-[40px]">QUIENES SOMOS</h1>
      <div className="flex justify-between mb-[40px]">
      <div className='w-[70%] flex items-center flex-col justify-start mr-[25px]'>
        <h4 className="mb-[20px]">
          Somos una fundación sin fines de lucro, que busca ser un puente de esperanza y fe para obtener las mejores terapias y recursos ortopédicos y tecnológicos para niños y niñas con Parálisis Cerebral en Tucumán.
        </h4>
        <h4 className="mb-[20px]">
          Nacimos con la ilusión de transformar todo aquello que vivimos con nuestro hijo Valentino, en un motor para obtener tratamientos innovadores en Tucumán (que sabemos existen en el mundo) y ser un puente para las familias de otros niños afectados por la Parálisis Cerebral Infantil asociados a la prematuridad.
        </h4>
        <h4 className="mb-[20px]">
          Nuestro objetivo principal es la búsqueda de tratamientos innovadores de salud para lograr una mejor calidad de vida en niños y niñas con PCI, potenciando al máximo el desarrollo motor, comunicacional, cognitivo y espiritual de cada uno de ellos.
        </h4>
        <h4 className="mb-[20px]">
          Buscamos acortar la brecha geográfica, medicinal y terapéutica que existe entre Tucumán y los países desarrollados, consiguiendo los elementos ortopédicos y la capacitación necesaria para obtener resultados similares a los de esos países.
        </h4>
      </div>
        <div className="h-[408px] flex justify-end">
          <Image
            src={Images.workTeam.Funder}
            className='object-cover w-[371px] h-[408px] rounded-2xl'
          />
        </div>
      </div>
    </div>  
  );
};

export default BannerConocenos;
