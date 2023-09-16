
import BannerHome from "@/components/Banners/BannerHome";
import CardGoalsContainer from "@/components/Containers/ContainerGoals";
import ContainerProyectCarousel from "@/components/Containers/ContainerProyectCarousel";
import ContainerReviews from "@/components/Containers/ContainerReviews";
import Founder from "@/components/Founder";
import proyects from "@/mock/mockReviwes";
import { createIconsTypes } from "@/utils/createIcons";



// createIconsTypes();

export default function Home() {
  return (
    <main >
      <BannerHome/>
      <CardGoalsContainer/>
      <Founder/>
      <ContainerProyectCarousel proyects={proyects}/>
      <ContainerReviews/>
    </main>
  )
}
