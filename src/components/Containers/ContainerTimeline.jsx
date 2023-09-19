import TimelineItem from "../Timeline/TimelineItem"
import { Images } from "@/assets/img"
export default function ContainerTimeline() {
    const timelineData=[
        {
            year: "2016",
            imageSrc1: Images.logos.LogoBlue,
            imageSrc2: Images.logos.LogoGreen,
            text1:"El 19 de noviembre del 2019 nace nuestro hijo Valentino prematuramente y sufrió una hemorragia cerebral que le provocó una parálisis cerebral. Desde ese momento nos enfrentamos a un mundo lleno de desafíos, decidimos buscar información, pero también encontramos muchas barreras.",
            text2:"Nunca nos rendimos, luchamos cada día por verlo progresar y entendimos que él es nuestro maestro. Valentino nos demuestra lo valioso que es, que merece ser feliz y tener las mismas oportunidades que cualquier niño.",
        },
        {
            year: "2020",
            imageSrc1: Images.logos.LogoBlue,
            imageSrc2:"",
            text1:"Así nace nuestra ilusión de transformar lo que vivimos junto a Valentino, un motor para conseguir tratamientos innovadores en Tucumán y ser un puente para las familias de otros niños afectados por la parálisis cerebral infantil asociados a la prematuridad.",
            text2:""
        },
        {
            year: "2021",
            imageSrc1: "",
            imageSrc2: Images.logos.LogoGreen,
            text1:"",
            text2:"Por eso, creamos nuestra fundación, con el sueño de mejorar la calidad de vida de los niños con parálisis cerebral y sus familias. ",
        },
        {
            year: "2023",
            imageSrc1: Images.logos.LogoBlue,
            imageSrc2: "",
            text1:"Hoy estamos orgullosos de este camino que recién comienza, y sabemos que nos queda muchísimo por hacer. Ahora, les pedimos que nos acompañen en este camino, que nos apoyen con su difusión, su donación o su voluntariado.",
            text2:"",
        },
      
      
    ]
    return(
        <div className="mb-10">
            <div className='flex '>
                <div className='w-[50%] flex items-center justify-start'>
                    <h1 className='text-blue mb-[40px]'>Cómo nace Dale Que Valen</h1>
                </div>
            </div>
            {timelineData.map((item,index)=>(
                <TimelineItem key={index} year={item.year} imageSrc1={item.imageSrc1} imageSrc2={item.imageSrc2} text1={item.text1} text2={item.text2}/>
            ))}
           <div className="w-[370px] h-[180px] rounded-2xl bg-blue text-white flex items-center justify-center relative top-0 left-1/2 transform -translate-x-1/2 text-[20px] font-bold text-center">
           Gracias por estar ahí. <br/> Un abrazo, <br/>Arantxa y Sebastian, los papás de Valentino.
            </div>
        </div>
        
    )
}