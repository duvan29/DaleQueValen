import { Images } from "@/assets/img";
import Image from "next/image";

const CallToAction = ({ bgColor }) => {
  const backgroundColor = `${bgColor ? `bg-${bgColor}` : ` bg-yellow-50 `}`;

  return (
    <div className="lg:hidden ">
      <div
        className={`${backgroundColor} lg:-mx-[140px] lg:px-[140px] md:h-[160px] ms:h-[100px] mt-10 relative flex px-3`}
      >
        <div className=" flex">
          <div className="absolute -mt-[40px] ">
            <Image
              src={Images.animals.Lion}
              className="md:h-[210px] md:w-[175px] ms:h-[130px] ms:w-[105px] md:mt-[25px] ms:mt-[30px] object-cover"
            />
          </div>
          <div className="flex justify-end text-center items-center ">
            <h6 className="text-black ms:text-[12px] md:text-[20px] w-[55%] md:mr-[80px] ms:mr-[30px]">
              “Enterate de todas nuestras novedades en nuestras redes sociales”
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
