import Image from 'next/image';
import React from 'react';

const CardMision = ({title, description, image, id}) => {
  return (
    <div className='flex h-[450px]'> 
      {/* Lado izquierdo */}
      <div className='w-[40%] h-full relative'>
        <Image
          key={id}
          id={id}
          src={image}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='w-[60%] p-24 h-full flex flex-col justify-center relative'>
        <h2 className='mb-[20px] text-blue text-center'>{title}</h2>
        <h4 className='text-black mb-[20px] '>{description}</h4>
      </div>  
    </div>
  );
};

export default CardMision;