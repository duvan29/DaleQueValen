import CallToAction from '@/components/CallToAction/CallToAction';
import BannerSumate from '@/components/Banners/BannerSumate';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SectionDonarDinero from '@/components/SectionDonarDinero/SectionDonarDinero';

export default function Sumate() {
  return (
    <main>
      <SectionTitle bgColor="purple" title="sumate" />
      <BannerSumate />
      <SectionDonarDinero/>
      <CallToAction  bgColor="purple"/>
    </main>
  );
}
