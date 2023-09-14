import BannerHome from "@/components/Banners/BannerHome/BannerHome";
import CardGoals from "@/components/Card/CardGoals";
import CardGoalsContainer from "@/components/Containers/ContainerGoals";
import Founder from "@/components/Founder";
import { createIconsTypes } from "@/utils/createIcons";



// createIconsTypes();

export default function Home() {
  return (
    <main >
      <BannerHome/>
      <CardGoalsContainer/>
      <Founder/>
    </main>
  )
}
