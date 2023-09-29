import { Images } from "@/assets/img";
import Image from "next/image";

const CallToAction = ({ bgColor }) => {
  const backgroundColor = `${bgColor ? `bg-${bgColor}` : ` bg-yellow-50 `}`;

  return (
    <div className="w-full flex flex-col">
      <div
        className={`${backgroundColor} md:h-[160px] ms:-ml-[40px] ms:-mr-[15px]  ms:h-[100px] mt-10 relative flex px-[50px]`}
      >
        <div className="ms:w-full h-full flex">
          <div className="w-full flex  text-center items-center">
            <h6 className="text-black ms:text-[12px] md:text-[20px] w-[50%] mx-10">
              “No dudes en contactarnos y dejar tu huella en el mundo”
            </h6>
          </div>

          <div className="flex absolute -mt-[40px] left-[70%]">
            <Image
              src={Images.animals.Elephant}
              className="md:h-[220px] md:w-[210px] md:mt-[10px] ms:h-[125px] ms:w-[115px] ms:mt-[25px] ms:ml-[-10px] object-cover mx-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
