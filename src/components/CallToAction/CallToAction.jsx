import { Images } from "@/assets/img";
import Image from "next/image";

const CallToAction = ({ bgColor }) => {
  const backgroundColor = `${bgColor ? `bg-${bgColor}` : ` bg-yellow-50 `}`;

  return (
    <div className="ms:hidden lg:block">
      <div
        className={`${backgroundColor} lg:-mx-[140px] lg:px-[140px] h-[160px] relative flex`}
      >
        <div className="md:w-[50%] ms:w-full h-full flex">
          <div className="w-full flex text-center items-center">
            <h6 className="text-black ms:text-[12px] md:text-[24px] max-w-[300px] ">
              “Gracias por confiar en DALE que VALEN”
            </h6>
          </div>
          <div className="w-[42%] flex justify-end absolute pr-10 -mt-[40px] ">
            <Image
              src={Images.animals.Elephant}
              className="h-[240px] w-[230px] object-cover"
            />
          </div>
        </div>

        <div className="md:w-[50%] flex">
          <div className="w-[50%] absolute -mt-[40px] xl:pl-10 ">
            <Image
              src={Images.animals.Lion}
              className="h-[240px] w-[205px] object-cover"
            />
          </div>
          <div className="w-full flex justify-end text-center items-center ">
            <h6 className="text-black ms:text-[12px] md:text-[24px] max-w-[300px]">
              “Entérate de todas nuestras novedades en nuestras redes sociales”
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
