import Image from 'next/image';
import ButtonDonar from '@/components/ButtonDonar/ButtonDonar';

export default function CardDonarSmall({
  flexGrow,
  flexDirection,
  width,
  button,
  tipoDeDonar,
}) {
  return (
    <div className={`md:w-full lg:w-[33%] ${flexGrow}`}>
      <div
        className={`flex md:w-full h-full lg:flex-col md:mb-3 md:my-8 bg-purple-30 rounded-2xl lg:justify-between lg:py-10 lg:px-10 ${flexDirection} lg:h-full lg:m-0 `}
        style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
      >
        <Image
          src={tipoDeDonar.Image}
          className={` ${width} md:w-[30%] lg:w-full lg:min-h-[312px] lg:max-h-[350px]  rounded-2xl object-cover lg:mx-auto lg:h-[50%] `}
        />
        <div
          className={`flex flex-col  ms:justify-between ms:h-full md:items-center md:justify-center md:pr-20 md:py-4 md:w-full md:w-[50%] lg:w-full lg:m-0 px-4 py-3 md:py-8 lg:py-4 md:pr-16 md:pl-12 lg:p-0 lg:h-[60%] lg:justify-between lg:mb-4`}
        >
          <div className="flex ms:justify-between ms:flex-col ms:h-full lg:flex-col h-full">
              <h2 className="text-center md:mt-2 ms:pb-4 text-black text-[12px] md:text-[24px] md:text-purple md:uppercase capitalize ">
                {tipoDeDonar.title}
              </h2>
              <h4 className="text-[10px] md:text-[20px] md:text-left md:pt-4 lg:leading-7">
                {tipoDeDonar.description}
              </h4>{' '}
            <div
              className={`${button} lg:h-full mb-0 text-right md:mt-1 lg:flex md:items-end w-full`}
            >
              <ButtonDonar href={tipoDeDonar.href} action={tipoDeDonar.boton} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
