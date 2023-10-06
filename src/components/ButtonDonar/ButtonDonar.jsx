import Link from 'next/link';

export default function ButtonDonar({ href, action }) {
  return (
    <Link
      target="_blank"
      href={href}
      className="bg-purple px-4 py-4 rounded-xl ms:min-w-[102px] lg:min-w-[200px] md:min-w-[170px] inline-block text-white hover:bg-purple-50 mt-3 text-center"
    >
      <h2 className="ms:text-[12px] md:text-[20px] lg:px-6 lg:py-2 capitalize">
        {' '}
        {action}{' '}
      </h2>
    </Link>
  );
}
