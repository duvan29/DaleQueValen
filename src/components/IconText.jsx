import React from 'react';
import Icon from '@/assets/icons/icon'; // Importa de manera estática

export default function IconText({ icon, text }) {
  return (
    <div className="flex justify-center items-center ms:flex-col ms:gap-[5px] md:flex-row ">
      <div className="h-14 w-14 ms:rounded-full ms:border-[3px] ms:border-purple ms:h-[86px] ms:w-[84px] ms:py-[16px] ms:px-[16px] md:border-none ms:hover:bg-purple">
        <Icon icon={icon} />
      </div>
      <h2 className="text-purple md:ml-4 md:text-[24px] ms:text-[12px] ms:ml-0">
        {text}
      </h2>
    </div>
  );
}
