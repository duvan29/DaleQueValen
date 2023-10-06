import Image from 'next/image';

const CardTeam = ({ title, description, image, id }) => {
  return (
    <section className='flex flex-row justify-between text-center w-[33%]'>
      <div className='flex flex-col justify-center text-center items-center p-5'>
        <div className="rounded-full overflow-hidden lg:h-[200px] lg:w-[200px] wl:h-[270px] md:w-[140px] wl:w-[270px] ms:w-[100px] ms:h-[100px]  md:h-[140px] mx-auto mb-[10px]">
            <Image
              key={id}
              id={id}
              src={image}
              className='h-full w-full object-cover rounded-full'
            />
        </div>
          <h4 className='text-black mb-[10px] lg:text-[20px] md:text-[18px]  ms:text-[10px]'>{description}</h4>
          <h2 className=' text-blue text-center lg:text-[24px] md:text-[20px]  ms:text-[10px]'>{title}</h2>
      </div> 
    </section>
  );
};

export default CardTeam;