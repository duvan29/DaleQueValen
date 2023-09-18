

export default function ReusableButton({color,border,width,text,children,isActive}){
    const tailwindClass=`bg-${isActive ? color:`${color}-50`}  font-bold w-${width} h-16 px-4 py-3 hover:bg-${color} transition-all duration-500 my-8 ease-in-out rounded font-semibold flex items-center justify-center border-2 border-${border} text-${text ? text:'white'}`;
    


    //const tailwindClass2=`bg-${isActive ? color:`${color}-50`}  font-bold w-${width} h-16 px-4 py-3 hover:${hover} transition-all duration-500 my-8 ease-in-out rounded font-semibold flex items-center justify-center border-solid border-4 border-${border} border-opacity-100 text-${text ? text:'white'}`;
    
    
    //Modificada:
    //const tailwindClass2=`${isActive ? `bg-${color}`:`bg-${color}-50`} font-bold w-${width} h-16 px-4 py-3 hover:bg-${color} hover:bg-opacity-100 transition-all duration-500 my-8 ease-in-out rounded font-semibold flex items-center justify-center border-solid border-4 border-${border ? border:'green'} border-opacity-100 text-${text ? text:'white'}`;
    //Estatica:
    //const tailwindClass3=`${isActive ? 'bg-green':`bg-green-50`} font-bold w-${width} h-16 px-4 py-3 hover:bg-green hover:bg-opacity-100 transition-all duration-500 my-8 ease-in-out rounded font-semibold flex items-center justify-center border-solid border-4 border-green border-opacity-100 text-${text ? text:'white'}`;


    return(
        <button className={tailwindClass}>
        {children}
        </button>
    )
}


