import { Images } from "@/assets/img";
import Image from "next/image";

const Founder = () => {
  return (
    <div className="flex justify-around items-center flex-wrap pr-[300px] pl-[300px] ">
      {/* Sección izquierda con la foto */}
      <div className=" p-4">
        <div className="rounded-full overflow-hidden h-[270px] w-[270px] mx-auto">
          <Image
            src={Images.workTeam.Funder}
            className="h-full w-full object-cover"
            alt="Foto del fundador"
          />
        </div>
      </div>

      {/* Sección derecha con el nombre, rol y descripción */}
      <div className=" p-4 text-center flex flex-col justify-center items-center">
        <h1 className="mb-2 text-blue">ARANTXA OLMOS SALGADO</h1>
        <h2 className="mb-2 text-blue">FUNDADORA</h2>
        <h4 className="w-[650px]">
          Amet ex sint irure mollit sunt ut deserunt ut cillum sit irure est
          amet. Magna magna nostrud est labore non duis cillum. Pariatur nulla
          ipsum cupidatat mollit magna amet occaecat voluptate enim incididunt
          culpa. Nostrud qui culpa qui eiusmod id pariatur non fugiat esse mollit
          ea.
        </h4>
      </div>
    </div>
  );
};

export default Founder;