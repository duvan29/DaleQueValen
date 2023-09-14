import React from 'react';
import IconText from '../IconText';;

const CardGoals = ({desciption, icon, texticon}) => {
  return (
      <div className="w-[272px] h-[250px]">
            <IconText icon={icon} text={texticon}/>
            <div className='w-[272px] mt-6 h-[173px] bg-purple border-none rounded-md border flex items-center justify-start p-4 h' style={{ boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.5)' }}>
                <h3 className='text-white'>
                    {desciption}
                </h3>
            </div>
      </div>  
  );
};

export default CardGoals;
