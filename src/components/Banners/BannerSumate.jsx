const BannerSumate = () => {
  return (
    <div className="ms:flex-col ms:mb-2 md:mb-4">
      <div className="ms:bg-bgBanner2 lg:hidden bg-cover bg-center bg-no-repeat ms:h-[127px] md:h-[227px] w-full"></div>

      <div className="ms:bg-none lg:bg-bgBanner2 bg-cover bg-center bg-no-repeat ms:w-[90%] lg:w-full lg:h-[480px] ms:mx-auto lg:mx-0">
        <div className="bg-white-50 border-none rounded-md border flex justify-center items-center ms:static ms:shadow-none ms:p-4 md:p-8 w-full md:static lg:h-[217px] lg:w-[470px] xl:mb-100 lg:relative lg:bottom-[-30%] lg:shadow-lg">
          <h4 className="text-left ms:text-[12px] md:text-[20px]">
            La fundación te necesita para hacer realidad su misión. No importa
            si tenes mucho o poco, lo que importa es que tengas ganas de ayudar
            y colaborar de cualquier manera.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BannerSumate;
