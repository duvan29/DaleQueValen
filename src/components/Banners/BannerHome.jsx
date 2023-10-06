const BannerHome = () => {
  return (
    <div className="lg:h-[745px] lg:block ms:flex ms:flex-col ms:items-center ms:justify-center ms:w-full ">
      <div className="bg-cover bg-center bg-fixed bg-no-repeat bg-bgBanner pr-[40px] pl-[40px] ms:-ml-[149px]  md:-ml-[149px] ms:-mr-[149px] ms:mt-[99px] lg:mt-0 lg:-ml-140 lg:h-full lg:-mr-140 ms:w-full  ms:w-3/4 ms:px-[20px] ms:w-[90%] ms:py-[20px] ms:bg-local md:bg-local ms:h-[142px] md:h-[350px] lg:w-[100vw]"></div>

      <div
        className="w-full  md:w-full lg:w-[570px] lg:relative lg:h-[328px] lg:bottom-[403px]  bg-white-80 border-none rounded-md border p-4 md:p-12 mb-4 md:mb-12 xl:mb-100 ms:shadow-none lg:shadow-lg "
        style={{
          maxWidth: "1200px",
        }}
      >
        <h4 className="ms:text-[12px] md:text-[20px] lg:relative lg:bottom-8">
          Dale que valen es una fundación, sin fines de lucro, cuyo principal
          propósito es encontrar y ofrecer soluciones de salud innovadoras y
          efectivas que mejoren su bienestar y les permitan desarrollar todo su
          potencial. La fundación busca constantemente aprender y aplicar las
          mejores prácticas terapéuticas que existen en los países del primer
          mundo. Somos un puente que une a los niños y niñas con parálisis
          cerebral con las oportunidades que merecen.
        </h4>
      </div>
    </div>
  );
};

export default BannerHome;
