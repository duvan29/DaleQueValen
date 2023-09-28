import Image from "next/image"
export default function TimelineItem({ year, text1, text2, imageSrc1, imageSrc2, children }) {
  return (
    <div className="flex flex-col items-center  relative">
      {/* Línea vertical */}
      <div className="absolute h-full w-1 bg-blue left-1/2 transform -translate-x-1/2"></div>

      {/* Círculo con el año */}
      <div className="w-20 h-20 rounded-full bg-blue text-white flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 text-[25px] font-bold ">
        {year}
      </div>

      <div className={`flex w-full justify-between pt-20 mt-5 md:mb-16 ms:mb-[15px] ${text1==""? "hidden":""}`}>
        {/* Cuadro de imagen 1 */}
        <div className="w-1/2 pl-4 flex justify-center">
          <div className=" rounded-xl overflow-hidden max-w-[470px] mr-4 max-h-[315px]">
            <Image src={imageSrc1} alt={`Imagen ${year}-1`} className="w-full" />
          </div>
        </div>

        {/* Cuadro de texto 1 */}
        <div className="w-1/2 pl-4 flex justify-center">
          <div className="max-w-[470px] lg:max-h-[280px] md:max-h-[310px] md:text-[20px] ms:text-[10px] border-2 rounded-3xl md:border-blue-50 ms:border-none md:px-8 ms:px-0 flex items-center">{text1}</div>
        </div>
      </div>

      <div className={`flex w-full justify-between pt-20 mt-5 md:mb-16 ms:mb-[15px] ${text2==""? "hidden":""}`}>
        {/* Cuadro de texto 2 */}
        <div className="w-1/2 pl-4 flex justify-center">
          <div className="max-w-[470px] max-h-[280px] md:text-[20px] ms:text-[10px] border-2 rounded-3xl mr-4 md:border-blue-50 ms:border-none md:px-8 ms:px-0 flex items-center">{text2}</div>
        </div>
        {/* Cuadro de imagen 2 */}
        <div className="w-1/2 pl-4 flex justify-center">
          <div className="rounded-xl overflow-hidden max-w-[470px] max-h-[315px] ">
            <Image 
            src={imageSrc2} 
            alt={`Imagen ${year}-2`} 
            className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}