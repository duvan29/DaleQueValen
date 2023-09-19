export default function SectionTitle({ bgColor, title }) {
  const backgroundColor = `bg-${bgColor}`;
  return (
    <h1
      className={`${backgroundColor} text-center text-white border border-indigo-600 w-screen h-16 flex justify-center items-center`}
    >
      {title}
    </h1>
  );
}
