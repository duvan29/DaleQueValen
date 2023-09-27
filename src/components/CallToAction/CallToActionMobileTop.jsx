import { Images } from "@/assets/img";
import Image from "next/image";

const CallToAction = ({ bgColor }) => {
  const backgroundColor = `${bgColor ? `bg-${bgColor}` : ` bg-yellow-50 `}`;

  return (
    <div className="lg:hidden ">
      <div
        className={`${backgroundColor} lg:-mx-[140px] lg:px-[140px] md:h-[160px] ms:h-[100px]  relative flex px-8`}
      >
        <div className=" flex">
          <div className="w-[50%]">
            <Image
              src={Images.animals.Lion}
              className="md:h-[200px] md:w-[165px] ms:h-[120px] ms:w-[85px] object-cover"
            />
          </div>
          <div className="w-full flex justify-end text-center items-center ">
            <h6 className="text-black ms:text-[12px] md:text-[20px] w-[75%]">
              “Enterate de todas nuestras novedades en nuestras redes sociales”
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
