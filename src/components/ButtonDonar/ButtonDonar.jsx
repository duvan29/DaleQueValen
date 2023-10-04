import Link from 'next/link';

export default function ButtonDonar({ href, action }) {
  return (
    <Link
      href={href}
      className="bg-purple px-4 py-4 rounded-xl inline-block text-white hover:bg-purple-50 mt-3"
    >
      <h2 className="ms:text-[12px] md:text-[20px] lg:px-6 lg:py-2 capitalize">
        {' '}
        {action}{' '}
      </h2>
    </Link>
  );
}
