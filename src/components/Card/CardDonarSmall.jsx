import { Images } from '@/assets/img';

import Image from 'next/image';
import ButtonDonar from '@/components/ButtonDonar/ButtonDonar';

export default function CardDonarSmall() {
  return (
    <div
      className="lg:px-8 lg:py-8 flex-col mb-3 lg:my-8 bg-purple-30 lg:max-w-[370px] rounded-2xl lg:justify-center lg:py-10 lg:w-[33%] w-full "
      style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
    >
      <div className="flex flex-row  lg:flex-col justify-center items-center p-0 md:justify-between gap-2">
        <Image
          src={Images.workTeam.Funder}
          className="w-[40%] lg:w-auto lg:max-h-[350px]  rounded-2xl object-cover lg:mx-auto"
        />
        <div className="flex flex-col w-[50%] lg: w-full p-0 lg:my-auto items-end lg:items-center">
          <h2 className="text-left lg:text-center mt-2 text-black text-[12px]  lg:text-purple lg:uppercase lg:text-[24px] lg:uppercase">
            Ser voluntario
          </h2>
          <h4 className="text-[10px] md:text-[20px] lg:text-center lg:leading-7">
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
