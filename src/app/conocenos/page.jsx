import ContainerMisionCarousel from "@/components/Containers/ContainerMision";
import mision from "@/mock/mockMisionVisionValores";

export default function Conocenos() {
    return(
        <main>
            <div>Conocenos</div>
            <ContainerMisionCarousel mision={mision}/>
        </main>
    )
}