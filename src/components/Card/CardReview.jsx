import Icon from '@/assets/icons/icon';
import React from 'react';

const CardReview = ({ name, profession, testimonio }) => {
  return (
    <div className="border-yellow border-[6px] w-[360px] h-[480px] relative flex justify-center items-center mb-10">
      <div className="w-[300px] h-[420px] relative p-10 bg-yellow-50">
        <h5 className="relative z-10 h-[300px]  overflow-hidden mb-[5px]">
          {testimonio}
        </h5>
        <div className="border-t border-brown opacity-50 pb-2"></div>
        <div className="flex flex-col items-end relative z-10">
          <h6>{name}</h6>
          <h4>{profession}</h4>
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
