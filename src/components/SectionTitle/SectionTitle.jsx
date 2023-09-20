export default function SectionTitle({ bgColor, title }) {
  const backgroundColor = `bg-${bgColor}`;
  return (
    <h1
      className={`${backgroundColor} text-center text-white border mt-[130px] -ml-[140px] -mr-[140px] mb-[40px] h-16 flex justify-center items-center `}
    >
      {title}
    </h1>
  );
}
