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
      {/* <div className="flex flex-wrap justify-between items-center md:flex-nowrap md:flex-col md:justify-evenly lg:flex-row gap-4 lg:gap-8 mb-8 lg:mb-20">
        {' '}
        <CardDonarSmall
          flexGrow={flexGrow1}
          flexDirection={flexDirectionRow}
          width={width40}
          button={endButton}
        />
        <CardDonarSmall
          flexGrow={flexGrow0}
          flexDirection={flexDirectionCol}
          width={widthFull}
          button={centerButton}
        />
        <CardDonarSmall
          flexGrow={flexGrow0}
          flexDirection={flexDirectionCol}
          width={widthFull}
          button={centerButton}
        />
      </div> */}

      <CallToAction bgColor="purple" />
    </main>
  );
}
