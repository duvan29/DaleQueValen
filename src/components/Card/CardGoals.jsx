import React from 'react';
import IconText from '../IconText';;

const CardGoals = ({description, icon, textIcon}) => {
  return (
      <div className="w-[272px] h-[250px] mb-10">
            <IconText icon={icon} text={textIcon}/>
            <div className='w-[272px] mt-6 h-[173px] bg-purple border-none rounded-md border flex items-center p-4' style={{ boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.5)' }}>
                <h3 className='text-white text-center' >
                {description}
                </h3>
            </div>
      </div>  
  );
};

export default CardGoals;
