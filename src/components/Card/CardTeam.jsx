import Image from 'next/image';
import React from 'react';

const CardTeam = ({ title, description, image, id }) => {
  return (
    <section className='flex flex-row justify-center text-center '>
      <div className='flex flex-col justify-center text-center items-center p-5'>
      <div className="rounded-full overflow-hidden h-[270px] w-[270px] mx-auto mb-[10px]">
            <Image
              key={id}
              id={id}
              src={image}
              className='h-full w-full object-cover rounded-full'
            />
        </div>
          <h4 className='text-black mb-[10px]'>{description}</h4>
          <h2 className=' text-blue text-center'>{title}</h2>
      </div>
      <div className='flex flex-col justify-center text-center items-center p-5'>
      <div className="rounded-full overflow-hidden h-[270px] w-[270px] mx-auto mb-[10px]">
            <Image
              key={id}
              id={id}
              src={image}
              className='h-full w-full object-cover rounded-full'
            />
        </div>
          <h4 className='text-black mb-[10px]'>{description}</h4>
          <h2 className=' text-blue text-center'>{title}</h2>
      </div>
      <div className='flex flex-col justify-center text-center items-center p-5'>
      <div className="rounded-full overflow-hidden h-[270px] w-[270px] mx-auto mb-[10px]">
            <Image
              key={id}
              id={id}
              src={image}
              className='h-full w-full object-cover rounded-full'
            />
        </div>
          <h4 className='text-black mb-[10px]'>{description}</h4>
          <h2 className=' text-blue text-center'>{title}</h2>
      </div>
      <div className='flex flex-col justify-center text-center items-center p-5'>
      <div className="rounded-full overflow-hidden h-[270px] w-[270px] mx-auto mb-[10px]">
            <Image
              key={id}
              id={id}
              src={image}
              className='h-full w-full object-cover rounded-full'
            />
        </div>
          <h4 className='text-black mb-[10px]'>{description}</h4>
          <h2 className=' text-blue text-center'>{title}</h2>
      </div>
      <div className='flex flex-col justify-center text-center items-center p-5'>
      <div className="rounded-full overflow-hidden h-[270px] w-[270px] mx-auto mb-[10px]">
            <Image
              key={id}
              id={id}
              src={image}
              className='h-full w-full object-cover rounded-full'
            />
        </div>
          <h4 className='text-black mb-[10px]'>{description}</h4>
          <h2 className=' text-blue text-center'>{title}</h2>
      </div>
    </section>
  );
};

export default CardTeam;