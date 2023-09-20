import { Images } from "@/assets/img";
import Image from "next/image";

const Founder = () => {
  return (
    <>
      <h1 className=" ms:mb-[12px] ms:text-center ms:text-black ms:text-[14px]">fundador</h1>
      <div className="flex justify-around items-center flex-row lg:pr-[300px] lg:pl-[300px]">
        {/* Sección izquierda con la foto */}
        <div className=" p-4">
          <div className="rounded-full overflow-hidden md:h-[270px] ms:w-[104px] md:w-[270px] ms:h-[104px] mx-auto">
            <Image
              src={Images.workTeam.Funder}
              className="h-full w-full object-cover"
              alt="Foto del fundador"
            />
          </div>
        </div>

        {/* Sección derecha con el nombre, rol y descripción */}
        <div className="p-4 md:text-center flex flex-col md:justify-center ms:text-left md:items-center">
          <h1 className="mb-2 text-blue ms:text-[12px] md:text-[32px]">ARANTXA OLMOS SALGADO</h1>
          <h2 className="mb-2 text-blue ms:hidden">FUNDADORA</h2>
          <h4 className="lg:w-[650px] ms:w-full ms:text-[10px] md:text-[20px]">
            Amet ex sint irure mollit sunt ut deserunt ut cillum sit irure est
            amet. Magna magna nostrud est labore non duis cillum. Pariatur nulla
            ipsum cupidatat mollit magna amet occaecat voluptate enim incididunt
            culpa. Nostrud qui culpa qui eiusmod id pariatur non fugiat esse mollit
            ea.
          </h4>
        </div>
      </div>
    </>
  );
};

export default Founder;