import { Images } from '@/assets/img';

import Image from 'next/image';
import ButtonDonar from '../ButtonDonar/ButtonDonar';

export default function CardDonarBig() {
  return (
    <div>
      <div
        className="flex w-full mb-3 md:my-8 bg-purple-30 rounded-2xl md:justify-between md:py-10"
        style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
      >
        <Image
          src={Images.workTeam.Funder}
          className="w-[40%] md:w-[30%] md:max-h-[350px] rounded-2xl object-cover md:mx-auto"
        />
        <div className="flex flex-col w-[60%] md:w-[50%] px-4 py-3 md:pl-0 md:pr-20 md:my-auto ms:items-end">
          <h2 className="md:text-left text-center text-black text-[12px] mb-2 md:text-purple md:uppercase md:text-[24px] md:mb-5 md:uppercase">
            Colaborar con insumos o medicamentos
          </h2>
          <h4 className="text-[10px] md:text-[20px]">
            Tenes insumos o equipamiento que tu niño ya no usa (sillas de
            ruedas, medicamentos, cuello ortopédico, lo que se te ocurra) y te
            gustaría poder donárselo a otro niño?
          </h4>{' '}
          <div className="text-right mt-1 lg:flex lg:items-center lg:justify-end">
            <ButtonDonar href="#" action="colaborar" />
          </div>
        </div>
      </div>
    </div>
  );
}
