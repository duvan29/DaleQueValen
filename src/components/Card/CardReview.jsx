import Icon from '@/assets/icons/icon';
import React from 'react';

const CardReview = ({ name, profession, testimonio }) => {
  return (
    <div className="border-yellow border-[6px] ms:min-h-[100px] ms:mx-[15px] lg:mx-[0px] lg:w-[360px] ms:w-full ms:px-[25px] ms:py-[15px] lg:h-[480px] relative flex justify-center items-center mb-10">
      <div className="lg:w-[300px] lg:h-[420px] ms:h-full ms:w-full relative lg:p-10 ms:p-4 bg-yellow-50">
        <h5 className="relative z-10 lg:h-[300px] ms:text-[12px] md:text-[20px]  overflow-hidden mb-[5px]">
          {testimonio}
        </h5>
        <div className="border-t border-brown opacity-50 lg:pb-2"></div>
        <div className="flex flex-col items-end relative z-10">
          <h6 className='ms:text-[12px] md:text-[20px]'>{name}</h6>
          <p className='ms:text-[10px] md:text-[16px]'>{profession}</p>
        </div>
      </div>
      <div className="absolute top-0 left-0 bg-white -ml-[35px] w-[60px] h-[60px] flex justify-center items-center pb-[14px] pr-[12px] rotate-180">
        <Icon icon="quotations" />
      </div>
      <div className="absolute bottom-0 right-0 bg-white -mr-[35px] w-[60px] h-[60px] flex pb-[12px] pr-[12px]">
        <Icon icon="quotations" />
      </div>
    </div>
  );
};

export default CardReview;
