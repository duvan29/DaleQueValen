import Image from 'next/image';
import React from 'react';

const CardMision = ({title, description, image, id}) => {
  return (
    <div className='flex md:min-h-[400px] lg:h-[450px] ms:min-h-[260px] ms:flex-col lg:flex-row'> 
      {/* Lado izquierdo */}
      <div className='lg:w-[40%] ms:w-full lg:min-h-full ms:h-[110px] md:h-[150px] relative'>
        <Image
          key={id}
          id={id}
          src={image}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='lg:w-[60%] ms:w-full lg:p-24 lg:min-h-full flex flex-col lg:justify-center lg:relative'>
        <h2 className='mb-[20px] text-blue text-center ms:text-[12px] md:text-[24px]'>{title}</h2>
        <h4 className='text-black ms:text-[12px] md:text-[20px]'>{description}</h4>
      </div>  
    </div>
  );
};

export default CardMision;