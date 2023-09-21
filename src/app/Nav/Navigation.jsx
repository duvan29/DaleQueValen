'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Images } from '@/assets/img';
import ReusableButton from '@/components/ReusableButton/ReusableButton';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Conocenos',
      route: '/conocenos',
    },
    {
      label: 'Proyectos',
      route: '/proyectos',
    },
    {
      label: 'Sumate',
      route: '/sumate',
    },
  ];

  return (
    // <div className={`${pathname=='/' ? '':'sticky top-0 z-50 bg-white'} pr-[40px] pl-[40px] absolute left-0 right-0`}>
    <div
      className={`${
        pathname == '/'
          ? 'pr-[40px] pl-[40px] absolute left-0 right-0'
          : 'fixed top-0 left-0 right-0 z-50 bg-white-50 px-[45px]'
      } `}
    >
      <header className="flex items-center justify-between">
        <Link
          href="/"
          className={`${
            pathname == '/' ? 'w-[370px] ml-[45px]' : 'w-[185px]'
          } h-auto`}
        >
          <Image
            className="w-full h-full aspect-ratio-16/9"
            src={
              pathname == '/' ? Images.logos.LogoWhite : Images.logos.LogoGreen
            }
            alt="DaleQueValen Logo"
            priority
          />
        </Link>
        <nav className="w-[1000px] flex justify-end items-center">
          <div className="w-full flex justify-around">
            {links.map(({ label, route }) => (
              <Link key={route} href={route} className="w-[175px] mr-[30px]">
                <ReusableButton
                  color="green"
                  border="green"
                  width="full"
                  isActive={pathname == route}
                >
                  {label}
                </ReusableButton>
              </Link>
            ))}
            <Link href="#contacto" className="w-[175px]">
              <ReusableButton color="green" border="green" width="full">
                Contacto
              </ReusableButton>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
