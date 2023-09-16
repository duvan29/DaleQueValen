export default function ReusableButton({bgcolor,width,opacity,textColor,children}){
    const tailwindClass=`${bgcolor} opacity-${opacity ? opacity:'50'} text-white font-bold w-${width} h-16 px-4 py-3 hover:opacity-100 transition-all duration- 500 my-8 ease-in-out rounded font-semibold flex items-center justify-center border-solid border-4 border-green border-opacity-100 text-${textColor ? textColor:'white'}`;

    return(
        <button className={tailwindClass}>
        {children}
        </button>
    )
}