import Link from 'next/link';

export default function ButtonDonar() {
  return (
    <Link
      href="#"
      className="bg-purple-50 px-8 py-3 rounded-xl inline-block text-white hover:bg-purple"
    >
      <h2 className="text-[12px] lg:text-[24px] lg:px-6 lg:py-2">Donar</h2>
    </Link>
  );
}
