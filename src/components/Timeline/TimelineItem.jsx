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

      <div className={`flex w-full justify-between pt-20 mt-5 mb-16 ${text1==""? "hidden":""}`}>
        {/* Cuadro de imagen 1 */}
        <div className="w-1/2 pl-4 flex justify-center">
          <div className=" rounded-xl overflow-hidden max-w-[470px] max-h-[315px]">
            <Image src={imageSrc1} alt={`Imagen ${year}-1`} className="w-full h-full" />
          </div>
        </div>

        {/* Cuadro de texto 1 */}
        <div className="w-1/2 pl-4 flex justify-center">
          <div className="max-w-[470px] max-h-[280px] text-[20px] border-2 rounded-3xl border-blue-50 px-8 flex items-center">{text1}</div>
        </div>
      </div>

      <div className={`flex w-full justify-between pt-20 mt-5 mb-16 ${text2==""? "hidden":""}`}>
        {/* Cuadro de texto 2 */}
        <div className="w-1/2 pl-4 flex justify-center">
          <div className="max-w-[470px] max-h-[280px] text-[20px] border-2 rounded-3xl border-blue-50 px-8 flex items-center">{text2}</div>
        </div>
        {/* Cuadro de imagen 2 */}
        <div className="w-1/2 pl-4 flex justify-center">
          <div className="rounded-xl overflow-hidden max-w-[470px] max-h-[315px]">
            <Image src={imageSrc2} alt={`Imagen ${year}-2`} className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}