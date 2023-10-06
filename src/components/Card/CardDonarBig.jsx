import { Images } from "@/assets/img";

import Image from "next/image";
import ButtonDonar from "../ButtonDonar/ButtonDonar";

export default function CardDonarBig() {
  return (
    <div>
      <div
        className="flex w-full mb-3 md:p-0 lg:my-8 bg-purple-30 rounded-2xl lg:justify-between lg:py-8 md:max-h-[400px] lg:h-auto md:mb-8 lg:m-0"
        style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        <Image
          src={Images.Sumate.ColaborarEquipo}
          className="w-[40%] md:w-[30%] rounded-2xl lg:items-center lg:p-0 lg:m-0 object-cover lg:mx-auto lg:mx-auto lg:p-0"
        />
        <div className="flex-col w-[60%] md:w-auto md:pl-12 md:py-8 md:pr-20 lg:w-[50%] px-4 py-3 lg:pl-0  lg:my-auto">
          <h2 className="text-center text-[12px] mb-2 md:text-purple md:uppercase md:text-[24px] md:mb-5">
            Colaborar con equipamientos o insumos
          </h2>
          <h4 className="text-[10px] md:text-[20px]">
            Tenes insumos o equipamiento que tu niño ya no usa (sillas de
            ruedas, medicamentos, cuello ortopédico, lo que se te ocurra) y te
            gustaría poder donárselo a otro niño?
          </h4>

          <div className="text-right mt-1 lg:flex lg:items-center lg:justify-end">
            <ButtonDonar
              href="https://docs.google.com/forms/d/e/1FAIpQLScX2KIa2NhN9GwfMTfbPFMrttEUXao8V2gBuLCgEHcavuacyA/viewform?usp=sf_link"
              action="colaborar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
