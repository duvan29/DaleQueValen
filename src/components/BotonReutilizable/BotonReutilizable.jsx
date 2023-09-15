export default function BotonReutilizable({color,tamaño,opacity,children}){
    const clases=`bg-${color} opacity-${opacity ? opacity:'50'} text-white font-bold w-${tamaño} h-16 px-4 py-3 hover:opacity-100 transition-all duration- 500 my-8 ease-in-out rounded font-semibold flex items-center justify-center`;

    return(
        <button className={clases}>
        {children}
        </button>
    )
}