import { Images } from "@/assets/img";
import Image from "next/image";

const BannerConocenos = () => {
  return (
    <div>
      <h1 className="md:text-blue md:mb-[40px] md:text-[30px] md:text-left ms:mb-[12px] ms:text-center ms:text-black ms:text-[14px]">
        QUIENES SOMOS
      </h1>
      <div className="flex md:justify-between md:mb-[40px] ms:flex-col-reverse md:flex-row ">
        <div className="w-[70%] flex flex-col justify-start mr-[25px] ms:w-[100%] md:text-left">
          <h4 className="mb-[20px] ms:mb-[10px] ms:text-[12px] md:text-[20px]">
            Somos una fundación sin fines de lucro, que busca ser un puente de
            esperanza y fe para obtener las mejores terapias y recursos
            ortopédicos y tecnológicos para niños y niñas con Parálisis Cerebral
            en Tucumán.
          </h4>
          <h4 className="mb-[20px] ms:mb-[10px] ms:text-[12px] md:text-[20px]">
            Nacimos con la ilusión de transformar todo aquello que vivimos con
            nuestro hijo Valentino, en un motor para obtener tratamientos
            innovadores en Tucumán (que sabemos existen en el mundo) y ser un
            puente para las familias de otros niños afectados por la Parálisis
            Cerebral Infantil asociados a la prematuridad.
          </h4>
          <h4 className="mb-[20px] ms:mb-[10px] ms:text-[12px] md:text-[20px]">
            Nuestro objetivo principal es la búsqueda de tratamientos
            innovadores de salud para lograr una mejor calidad de vida en niños
            y niñas con PCI, potenciando al máximo el desarrollo motor,
            comunicacional, cognitivo y espiritual de cada uno de ellos.
          </h4>
          <h4 className="mb-[20px] ms:mb-[10px] ms:text-[12px] md:text-[20px]">
            Buscamos acortar la brecha geográfica, medicinal y terapéutica que
            existe entre Tucumán y los países desarrollados, consiguiendo los
            elementos ortopédicos y la capacitación necesaria para obtener
            resultados similares a los de esos países.
          </h4>
        </div>
        <div className="md:h-[408px] ms:h-[300px] ms:mb-[12px] md:mb-[0px] flex justify-end">
          <Image
            src={Images.empresa.AboutUS}
            className="lg:object-top ms:object-cover min-w-[371px] h-[408px] ms:w-full ms:h-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerConocenos;
