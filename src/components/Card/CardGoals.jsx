import React from 'react';
import IconText from '../IconText';

const CardGoals = ({description, icon, textIcon}) => {
  return (
      <div className="w-[272px] h-[250px] mb-10">
            <IconText icon={icon} text={textIcon}/>
            <div className='w-[272px] mt-6 h-[200px] bg-purple border-none rounded-md border flex items-center p-3' style={{ boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.5)' }}>
                <h4 className='text-white text-center' >
                {description}
                </h4>
            </div>
      </div>  
  );
};

export default CardGoals;
