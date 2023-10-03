import React from 'react';
import CardDonarSmall from '../Card/CardDonarSmall';

export default function ContainerTiposDonar({ tiposDeDonar }) {
  const widthFull = 'w-full ms:h-[90px] md:h-auto';
  const width40 = 'w-[40%]';
  const flexGrow1 = `grow-[2] md:grow-0 `;
  const flexGrow0 = `grow-[1] w-[135px]`;
  const flexDirectionRow = `flex`;
  const flexDirectionCol = `flex-col md:flex md:flex-row `;
  const centerButton = `flex ms:justify-center md:justify-end lg:justify-center `;
  const endButton = `flex ms:justify-end lg:justify-center `;
  return (
    <div className="flex flex-wrap justify-between items-center md:flex-nowrap md:flex-col md:justify-evenly lg:flex-row gap-4 lg:gap-8 mb-8 lg:mb-20">
      {tiposDeDonar
        .filter((tipoDeDonar) => tipoDeDonar.id >= 2 && tipoDeDonar.id <= 4)
        .map((tipoDeDonar) => (
          <CardDonarSmall
            key={tipoDeDonar.id}
            tipoDeDonar={tipoDeDonar}
            flexGrow={tipoDeDonar.id === 2 ? flexGrow1 : flexGrow0}
            flexDirection={
              tipoDeDonar.id === 2 ? flexDirectionRow : flexDirectionCol
            }
            width={tipoDeDonar.id === 2 ? width40 : widthFull}
            button={tipoDeDonar.id === 2 ? endButton : centerButton}
          />
        ))}
    </div>
  );
}
