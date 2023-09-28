import CallToAction from '@/components/CallToAction/CallToAction';
import BannerSumate from '@/components/Banners/BannerSumate';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SectionDonarDinero from '@/components/SectionDonarDinero/SectionDonarDinero';
import CardDonar from '@/components/Card/CardDonar';

export default function Sumate() {
  return (
    <main>
      <SectionTitle bgColor="purple" title="sumate" />
      <div className="h-[700px] flex justify-center items-center text-center">
        <BannerSumate />
      </div>
      <SectionDonarDinero />
      <CardDonar />
      <CallToAction bgColor="purple" />
    </main>
  );
}
