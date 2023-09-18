export default function ReusableButton({ color, border, width, text, children, isActive }) {
  const backgroundColorClass = `bg-${color}-50 hover:bg-${color}`;
  const textColorClass = `text-${text ? text : 'white'}`;
  const borderWidthClass = `border-2 border-${border}`;
  const widthClass = `w-${width}`;

  return (
    <button
      className={`font-bold h-16 px-4 py-3 ${backgroundColorClass} ${widthClass} ${textColorClass} ${borderWidthClass} transition-all my-8 ease-in-out rounded font-semibold flex items-center justify-center`}
    >
      {children}
    </button>
  );
}