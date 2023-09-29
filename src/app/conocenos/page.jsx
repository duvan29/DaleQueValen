import BannerConocenos from '@/components/Banners/BannerConocenos';
import ContainerMisionCarousel from '@/components/Containers/ContainerMision';
import ContainerTeam from '@/components/Containers/ContainerTeam';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import mision from '@/mock/mockMisionVisionValores';
import equipo from '@/mock/mockEquipoDeTrabajo';

import ContainerTimeline from "@/components/Containers/ContainerTimeline";
import { Container } from 'postcss';
import CallToAction from '@/components/CallToAction/CallToAction';

export default function Conocenos() {

  return (
    <main>
      <SectionTitle bgColor="blue" title="conocenos" />
      <BannerConocenos />
      <ContainerMisionCarousel mision={mision} />
      <ContainerTimeline/>
      <ContainerTeam equipo={equipo}/>
      <CallToAction  bgColor="blue"/>
    </main>
  );
}
