import BannerConocenos from '@/components/Banners/BannerConocenos';
import ContainerMisionCarousel from '@/components/Containers/ContainerMision';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import mision from '@/mock/mockMisionVisionValores';

import ContainerTimeline from "@/components/Containers/ContainerTimeline";

export default function Conocenos() {

  return (
    <main>
      <SectionTitle bgColor="blue" title="conocenos" />
      <BannerConocenos />
      <ContainerMisionCarousel mision={mision} />
      <ContainerTimeline/>
    </main>
  );
}

