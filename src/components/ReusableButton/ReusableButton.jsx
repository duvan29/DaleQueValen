


export default function ReusableButton({children,isActive}){
    
    const tailwindClass=` ${isActive ? ` bg-green `:` bg-green-50 `}  font-bold w-full h-16 px-4 py-3 hover:bg-green transition-all duration-500 my-8 ease-in-out font-bold flex items-center justify-center border-4 border-green rounded-xl text-white text-xl`;
    
    return(
        <button className={tailwindClass}>
        {children}
        </button>
    )
}

