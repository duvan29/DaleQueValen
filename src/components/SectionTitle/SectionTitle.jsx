export default function SectionTitle({ bgColor, title }) {
  const backgroundColor = `bg-${bgColor}`;
  return (
    <h1
      className={`${backgroundColor} text-center text-white border lg:mt-[130px] ms:mt-[78px] lg:-ml-[140px] lg:-mr-[140px] ms:-ml-[40px] ms:-mr-[15px] mb-[15px] h-16 flex justify-center items-center `}
    >
      {title}
    </h1>
  );
}
