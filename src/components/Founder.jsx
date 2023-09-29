import { Images } from "@/assets/img";
import Image from "next/image";

const Founder = () => {
  return (
    <>
      <h1 className=" ms:mb-[12px] ms:text-center ms:text-black ms:text-[14px] md:hidden">fundador</h1>
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
          <h2 className="mb-2 text-blue ms:hidden md:flex">FUNDADORA</h2>
          <h4 className="lg:w-[650px] ms:w-full ms:text-[10px] md:text-[20px]">
          Arantxa es una experta en marketing digital con una sólida formación académica y experiencia laboral en el campo. Su mayor logro es la fundación y dirección de "Dale que Valen", una organización sin fines de lucro en Tucumán que brinda terapias alternativas a niños con parálisis cerebral. Esta iniciativa surgió de su propia experiencia, ya que su hijo Valentino tiene parálisis cerebral. La fundación busca mejorar la calidad de vida de estos niños, ofreciéndoles terapias y apoyo especializado. Arantxa es una líder comprometida que utiliza su creatividad y solidaridad para transformar vidas.
          </h4>
        </div>
      </div>
    </>
  );
};

export default Founder;