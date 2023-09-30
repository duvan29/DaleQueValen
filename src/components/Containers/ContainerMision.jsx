import React from "react";
import { Carousel } from "../Carousels/carousel";
import CardMision from "../Card/CardMision";

const ContainerMisionCarousel = ({ mision }) => {
  return (
    <div className="pt-[60px] pb-[60px] relative">
      <div className="flex ">
        <div className="w-[100%] flex items-center md:justify-start ms:justify-center">
          <h1 className="md:text-blue  md:text-[30px] md:text-left  ms:text-center ms:text-black ms:text-[14px] md:mb-[40px] ms:mb-[12px]">
            Mision, Vision, Valores
          </h1>
        </div>
      </div>
      <div className="lg:-ml-[140px] lg:-mr-[140px] ms:-ml-[15px] ms:-mr-[15px] bg-blue-20">
        <Carousel useFlexStyle={true}>
          {mision.map((mision) => (
            <CardMision
              key={mision.id} // Agrega una clave única aquí
              id={mision.id}
              description={mision.description}
              title={mision.title}
              image={mision.Image}
              z
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ContainerMisionCarousel;
