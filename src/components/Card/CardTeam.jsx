import Image from 'next/image';
import React from 'react';

const CardTeam = ({ title, description, image, id }) => {
  return (
    <section className='flex flex-row justify-center text-center p-5'>
      <div className='flex flex-col h-[400px] justify-center text-center items-center p-5 m-[50px] md:m-10'>
     
        <div className='w-full h-full'>
          <Image
            key={id}
            id={id}
            src={image}
            className='h-full w-full object-cover rounded-full'
          />
        </div>
        <div className='w-full h-full flex flex-col justify-center'>
          <h4 className='text-black'>{description}</h4>
          <h2 className=' text-blue text-center'>{title}</h2>
        </div>
      </div>


      <div className='flex flex-col h-[400px] p-5 m-[50px] md:m-10'>

        <div className='w-full h-full'>
          <Image
            key={id}
            id={id}
            src={image}
            className='h-full w-full object-cover rounded-full'
          />
        </div>
        <div className='w-full h-full flex flex-col justify-center'>
          <h4 className='text-black'>{description}</h4>
          <h2 className=' text-blue text-center'>{title}</h2>
        </div>
      </div>



      <div className='flex flex-col h-[400px] p-5 m-[50px] md:m-10'>
  
        <div className='w-full h-full'>
          <Image
            key={id}
            id={id}
            src={image}
            className='h-full w-full object-cover rounded-full'
          />
        </div>
        <div className='w-full h-full flex flex-col justify-center'>
          <h4 className='text-black'>{description}</h4>
          <h2 className=' text-blue text-center'>{title}</h2>
        </div>
      </div>
    </section>

    

  );
};

export default CardTeam;