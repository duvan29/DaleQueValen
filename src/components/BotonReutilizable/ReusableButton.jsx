export default function ReusableButton({color,width,opacity,children}){
    const tailwindClass=`bg-${color} opacity-${opacity ? opacity:'50'} text-white font-bold w-${width} h-16 px-4 py-3 hover:opacity-100 transition-all duration- 500 my-8 ease-in-out rounded font-semibold flex items-center justify-center`;

    return(
        <button className={tailwindClass}>
        {children}
        </button>
    )
}