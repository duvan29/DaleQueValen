import BannerHome from '@/components/Banners/BannerHome';
import CallToAction from '@/components/CallToAction/CallToAction';
import CardGoalsContainer from '@/components/Containers/ContainerGoals';
import ContainerProyectCarousel from '@/components/Containers/ContainerProyectCarousel';
import ContainerReviews from '@/components/Containers/ContainerReviews';
import Founder from '@/components/Founder';
import proyects from '@/mock/mockProyects';
import { createIconsTypes } from '@/utils/createIcons';

// createIconsTypes();

export default function Home() {
  return (
    <main>
      <BannerHome />
      <CardGoalsContainer />
      <ContainerProyectCarousel proyects={proyects} />
      <Founder />
      <ContainerReviews/>
      <CallToAction/>
    </main>
  );
}
