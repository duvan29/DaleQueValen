
import BannerHome from "@/components/Banners/BannerHome";
import CardGoalsContainer from "@/components/Containers/ContainerGoals";
import ContainerReviews from "@/components/Containers/ContainerReviews";
import Founder from "@/components/Founder";
import { createIconsTypes } from "@/utils/createIcons";



// createIconsTypes();

export default function Home() {
  return (
    <main >
      <BannerHome/>
      <CardGoalsContainer/>
      <Founder/>
      <ContainerReviews/>
    </main>
  )
}
