import React from 'react';
import CardDonarSmall from '../Card/CardDonarSmall';

export default function ContainerTiposDonar({ tiposDeDonar }) {
  const widthFull = 'w-full ms:h-[90px] md:h-auto';
  const width40 = 'w-[40%]';
  const flexGrow1 = `grow md:grow-0 `;
  const flexGrow0 = `grow w-[135px]`;
  const flexDirectionRow = `flex`;
  const flexDirectionCol = `flex-col md:flex md:flex-row `;
  const centerButton = `flex ms:justify-center md:justify-end lg:justify-center `;
  const endButton = `flex ms:justify-end lg:justify-center `;
  return (
    <div className="flex flex-wrap justify-between mt-4 gap-4 md:gap-0 items-center md:flex-nowrap md:flex-col md:justify-evenly lg:items-stretch lg:flex-row lg:gap-8 mb-8 lg:mb-20">
      {tiposDeDonar
        .filter((tipoDeDonar) => tipoDeDonar.id >= 3 && tipoDeDonar.id <= 5)
        .map((tipoDeDonar) => (
          <CardDonarSmall
            key={tipoDeDonar.id}
            tipoDeDonar={tipoDeDonar}
            flexGrow={tipoDeDonar.id === 3 ? flexGrow1 : flexGrow0}
            flexDirection={
              tipoDeDonar.id === 3 ? flexDirectionRow : flexDirectionCol
            }
            width={tipoDeDonar.id === 3 ? width40 : widthFull}
            button={tipoDeDonar.id === 3 ? endButton : centerButton}
          />
        ))}
    </div>
  );
}
