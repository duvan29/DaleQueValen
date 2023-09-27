import { Images } from "@/assets/img";
import Image from "next/image";

const CallToAction = ({ bgColor }) => {
  const backgroundColor = `${bgColor ? `bg-${bgColor}` : ` bg-yellow-50 `}`;

  return (
    <div className="lg:hidden w-full flex flex-col">
      <div
        className={`${backgroundColor} w-full md:h-[160px] ms:h-[100px] relative flex`}
      >
        <div className="ms:w-full h-full flex">
          <div className="w-full flex justify-end text-center items-center ">
            <h6 className="text-black ms:text-[12px] md:text-[20px] w-[75%] ">
              “No dudes en contactarnos y dejar tu huella en el mundo ”
            </h6>
          </div>
          <div className="flex justify-end w-[50%]">
            <Image
              src={Images.animals.Elephant}
              className="md:h-[200px] md:w-[190px] ms:h-[120px] ms:w-[110px] object-cover mx-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
