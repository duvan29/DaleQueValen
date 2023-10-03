import CallToAction from '@/components/CallToAction/CallToAction';
import BannerSumate from '@/components/Banners/BannerSumate';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SectionDonarDinero from '@/components/SectionDonarDinero/SectionDonarDinero';
import CardDonarBig from '@/components/Card/CardDonarBig';
import CardDonarSmall from '@/components/Card/CardDonarSmall';
import ContainerTiposDonar from '@/components/Containers/ContainerTiposDonar';
import { tiposDeDonar } from '@/mock/mockTiposDeDonar';

export default function Sumate() {
  const widthFull = 'w-full ms:h-[90px] md:h-auto';
  const width40 = 'w-[40%]';
  const flexGrow1 = `grow-[2] md:grow-0 `;
  const flexGrow0 = `grow-[1] w-[135px]`;
  const flexDirectionRow = `flex`;
  const flexDirectionCol = `flex-col md:flex md:flex-row `;
  const centerButton = `flex ms:justify-center md:justify-end lg:justify-center `;
  const endButton = `flex ms:justify-end lg:justify-center `;
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
