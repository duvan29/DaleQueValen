import React from "react";
import { Carousel } from "../Carousels/carousel";
import CardTeam from "../Card/CardTeam";

const ContainerTeam = ({ equipo }) => {
  return (
    <div className="pb-[60px] relative">
      <div className="flex ">
        <div className="w-[100%] flex items-center md:justify-start ms:justify-center">
          <h1 className="md:text-blue  md:text-[30px] md:text-left  ms:text-center ms:text-black ms:text-[14px] md:mb-[40px] ms:mb-[12px]">
            COLABORADORES
          </h1>
        </div>
      </div>
      <div className="lg:-ml-[140px] lg:-mr-[140px] ms:-ml-[15px] ms:-mr-[15px] bg-blue-20">
        <Carousel useFlexStyle={false}>
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
