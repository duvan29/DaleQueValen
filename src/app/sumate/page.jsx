import BannerSumate from '@/components/Banners/BannerSumate';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

export default function Sumate() {
  return (
    <main>
      <SectionTitle bgColor="purple" title="sumate" />
      <div className="h-[700px] flex justify-center items-center text-center">
        <BannerSumate />
      </div>
    </main>
  );
}
