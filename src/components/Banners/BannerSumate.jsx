const BannerSumate = () => {
  return (
    <div className="h-full ms:flex ms:flex-col ms:w-[90%] lg:w-full lg:mb-[32px]">
      <div className="bg-bgBanner bg-cover bg-center bg-no-repeat w-full ms:h-[142px] md:h-[350px] lg:h-full"></div>

      <div className="bg-white-50 border-none rounded-md border mb-4 flex justify-center items-center ms:static ms:shadow-none  ms:p-4 md:p-8 md:w-full md:static md:mb-12 lg:bottom-[40%] lg:h-[217px] lg:relative lg:shadow-lg lg:w-[470px] xl:mb-100">
        <h4 className="text-left ms:text-[12px] md:text-[20px]">
          La fundación te necesita para hacer realidad su misión. No importa si
          tenes mucho o poco, lo que importa es que tengas ganas de ayudar y
          colaborar de cualquier manera.
        </h4>
      </div>
    </div>
  );
};

export default BannerSumate;
