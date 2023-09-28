import { Images } from '@/assets/img';

import Image from 'next/image';
import ButtonDonar from '../ButtonDonar/ButtonDonar';

export default function CardDonar() {
  return (
    <div
      className="flex w-full mb-3 lg:my-8 bg-purple-30 rounded-2xl items-center justify-center lg:py-10 "
      style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
    >
      <Image
        src={Images.workTeam.Funder}
        className="w-[40%] lg:w-[30%] rounded-2xl object-cover lg:mx-auto "
      />
      <div className="flex-col w-[60%] lg:w-[50%] px-4 py-3 lg:pl-0 lg:pr-20 lg:my-auto">
        <h2 className="text-left text-[12px] mb-2 lg:text-purple lg:uppercase lg:text-[24px] lg:mb-5">
          colaborar con equipamiento, insumos o medicamentos
        </h2>
        <h4 className="text-[10px] lg:text-[20px]">
          Tenes insumos o equipamiento que tu niño ya no usa (sillas de ruedas,
          medicamentos, cuello ortopédico, lo que se te ocurra) y te gustaría
          poder donárselo a otro niño?
        </h4>

        <div className="text-right mt-1 lg:flex lg:items-center lg:justify-end">
          <ButtonDonar />
        </div>
      </div>
    </div>
  );
}
