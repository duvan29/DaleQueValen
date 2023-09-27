import CallToAction from '@/components/CallToAction/CallToAction';
import BannerSumate from '@/components/Banners/BannerSumate';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SectionDonarDinero from '@/components/SectionDonarDinero/SectionDonarDinero';

export default function Sumate() {
  return (
    <main>
      <SectionTitle bgColor="purple" title="sumate" />
      <div className="h-[700px] flex justify-center items-center text-center">
        <BannerSumate />
      </div>
      <SectionDonarDinero/>
      <CallToAction  bgColor="purple"/>
    </main>
  );
}
