import React from 'react';
import IconText from '../IconText';

const CardGoals = ({ description, icon, textIcon }) => {
  return (
    <div className="md:w-[272px] md:h-[250px] mb-10">
      <IconText icon={icon} text={textIcon} />
      <div
        className="w-[272px] mt-6 h-[200px] bg-purple border-none rounded-md border flex items-center p-3 ms:hidden md:flex justify-center px-[25px] py-[10px] "
        style={{ boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.5)' }}
      >
        <h4 className="text-white text-center md:text-[18px] lg:text-[20px] ">
          {description}
        </h4>
      </div>
    </div>
  );
};

export default CardGoals;
