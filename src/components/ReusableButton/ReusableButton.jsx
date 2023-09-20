


export default function ReusableButton({color,border,width,text,children,isActive}){
    
    const tailwindClass=` ${isActive ? ` bg-${color} `:` bg-green-50 `}  font-bold w-${width} h-16 px-4 py-3 hover:bg-green transition-all duration-500 my-8 ease-in-out font-bold flex items-center justify-center border-4 border-green rounded-xl text-${text ? text:'white'} text-xl`;
    
    // const tailwindClass=`bg-${isActive ? color:`${color}-50`}  font-bold w-${width} h-16 px-4 py-3 hover:bg-${color} transition-all duration-500 my-8 ease-in-out rounded font-semibold flex items-center justify-center border-2 border-${border} text-${text ? text:'white'}`;
    // const tailwindClass2=`bg-${isActive ? `${color}`:`${color}-50`}  font-bold w-${width} h-16 px-4 py-3 hover:${'bg-'+color} transition-all duration-500 my-8 ease-in-out rounded font-semibold flex items-center justify-center border-2 border-${border} text-${text ? text:'white'}`;
    

    return(
        <button className={tailwindClass}>
        {children}
        </button>
    )
}




// export default function ReusableButton({ color, border, width, text, children, isActive }) {
//   const backgroundColorClass = `bg-${color}-50 hover:bg-${color}`;
//   const textColorClass = `text-${text ? text : 'white'}`;
//   const borderWidthClass = `border-2 border-${border}`;
//   const widthClass = `w-${width}`;

//   return (
//     <button
//       className={`font-bold h-16 px-4 py-3 ${backgroundColorClass} ${widthClass} ${textColorClass} ${borderWidthClass} transition-all my-8 ease-in-out rounded font-semibold flex items-center justify-center`}
//     >
//       {children}
//     </button>
//   );
// }