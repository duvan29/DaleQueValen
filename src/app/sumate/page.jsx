import CallToAction from '@/components/CallToAction/CallToAction';
import BannerSumate from '@/components/Banners/BannerSumate';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SectionDonarDinero from '@/components/SectionDonarDinero/SectionDonarDinero';
import CardDonarBig from '@/components/Card/CardDonarBig';
import CardDonarSmall from '@/components/Card/CardDonarSmall';

export default function Sumate() {
  return (
    <main>
      <SectionTitle bgColor="purple" title="sumate" />
      <div className="h-[700px] flex justify-center items-center text-center">
        <BannerSumate />
      </div>
      <SectionDonarDinero />
      <CardDonarBig />
      <div className="flex flex-col justify-evenly lg:flex-row  gap-6">
        {' '}
        <CardDonarSmall />
        <CardDonarSmall />
        <CardDonarSmall />
      </div>

      <CallToAction bgColor="purple" />
    </main>
  );
}
