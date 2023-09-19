import ContainerMisionCarousel from "@/components/Containers/ContainerMision";
import mision from "@/mock/mockMisionVisionValores";

import ContainerTimeline from "@/components/Containers/ContainerTimeline";

export default function Conocenos() {
    return(
        <main>
            <div>Conocenos</div>
            <ContainerMisionCarousel mision={mision}/>
            <ContainerTimeline></ContainerTimeline>
        </main>
    )
}