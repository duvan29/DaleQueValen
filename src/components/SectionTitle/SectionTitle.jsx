export default function SectionTitle({ bgColor, title }) {
  const backgroundColor = `bg-${bgColor}`;
  return (
    <h1
      className={`${backgroundColor} text-center text-white border lg:mt-[130px] ms:mt-[78px] -ml-[140px] -mr-[140px] mb-[40px] h-16 flex justify-center items-center `}
    >
      {title}
    </h1>
  );
}
