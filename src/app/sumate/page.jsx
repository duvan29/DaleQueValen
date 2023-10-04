import CallToAction from '@/components/CallToAction/CallToAction';
import BannerSumate from '@/components/Banners/BannerSumate';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SectionDonarDinero from '@/components/SectionDonarDinero/SectionDonarDinero';
import CardDonarBig from '@/components/Card/CardDonarBig';
import CardDonarSmall from '@/components/Card/CardDonarSmall';
import ContainerTiposDonar from '@/components/Containers/ContainerTiposDonar';
import { tiposDeDonar } from '@/mock/mockTiposDeDonar';

export default function Sumate() {
  return (
    <main>
      <SectionTitle bgColor="purple" title="sumate" />

      <BannerSumate />
      <SectionDonarDinero />
      <CardDonarBig />
      <ContainerTiposDonar tiposDeDonar={tiposDeDonar} />

      <CallToAction bgColor="purple" />
    </main>
  );
}
