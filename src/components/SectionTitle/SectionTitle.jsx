export default function SectionTitle({ bgColor, title }) {
  const backgroundColor = `bg-${bgColor}`;
  return (
    <div
      className={`${backgroundColor} lg:mt-[130px] ms:mt-[78px] lg:-ml-[140px] lg:-mr-[140px] ms:-ml-[40px] ms:-mr-[15px] mb-[15px] h-16 flex justify-center items-center `}
    >
      <h1 className="text-center text-white ms:-mr-[30px] lg:mr-0">{title}</h1>
    </div>
  );
}
