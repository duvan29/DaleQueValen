import Icon from '@/assets/icons/icon';
import React from 'react';

const CardReview = ({ name, profession, testimonio }) => {
  return (
    <div className="border-yellow border-[6px] ms:min-h-[200px] ms:mx-[15px] lg:mx-[0px] lg:w-[360px] ms:w-full ms:p-[25px] lg:h-[480px] relative flex justify-center items-center mb-10">
      <div className="lg:w-[300px] lg:h-[420px] ms:h-full ms:w-full relative lg:p-10 ms:p-8 bg-yellow-50">
        <h5 className="relative z-10 h-[300px]  overflow-hidden mb-[5px]">
          {testimonio}
        </h5>
        <div className="border-t border-brown opacity-50 pb-2"></div>
        <div className="flex flex-col items-end relative z-10">
          <h6>{name}</h6>
          <p>{profession}</p>
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
