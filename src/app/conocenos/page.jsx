import BannerConocenos from '@/components/Banners/BannerConocenos';
import ContainerMisionCarousel from '@/components/Containers/ContainerMision';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import mision from '@/mock/mockMisionVisionValores';

export default function Conocenos() {
  return (
    <main>
      <SectionTitle bgColor="blue-50" title="conocenos" />
      <BannerConocenos />
      <ContainerMisionCarousel mision={mision} />
    </main>
  );
}
