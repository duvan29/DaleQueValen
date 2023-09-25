const BannerHome = () => {
  return (
    <div className="lg:h-[745px] lg:block ms:flex ms:flex-col ms:items-center ms:justify-center ms:w-full ">
      <div className="bg-cover bg-center bg-fixed bg-no-repeat bg-bgBanner pr-[40px] pl-[40px] -ml-[180px] -mr-[180px] ms:mt-[99px] lg:mt-0 lg:-ml-140 lg:h-[745px] ms:h-[350px] lg:-mr-140 ms:w-full  ms:w-3/4 ms:px-[20px] ms:py-[20px] ms:bg-local md:bg-local ms:h-[142px] md:h-[350px] lg:w-auto"></div>

      <div
        className="w-full  md:w-full lg:w-[570px] lg:relative lg:h-[330px] lg:bottom-[500px] lg:right-1/4 bg-white-50 border-none rounded-md border p-4 md:p-12 mb-4 md:mb-12 xl:mb-100 ms:shadow-none lg:shadow-lg "
        style={{
          margin: '0 auto', // Centrar el elemento en pantallas grandes
          maxWidth: '1200px', // Establecer un ancho máximo para pantallas grandes
        }}
      >
        <h4 className="ms:text-[12px] md:text-[20px]">
          Somos Dale que Valen, una fundación que cree en el poder de la salud
          para mejorar la vida de los niños y niñas con parálisis cerebral.
          Buscamos innovar y acercar las mejores opciones terapéuticas y
          tecnológicas que existen en el mundo para potenciar el desarrollo
          integral de nuestros pequeños valientes. ¡Súmate a nuestra causa y
          ayúdanos a hacer realidad sus sueños!
        </h4>
      </div>
    </div>
  );
};

export default BannerHome;
