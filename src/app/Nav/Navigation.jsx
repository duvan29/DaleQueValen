"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Images } from "@/assets/img";
import ReusableButton from "@/components/ReusableButton/ReusableButton";


export default function Navigation() {
  
  const pathname= usePathname();

  const links = [
    {
      label: 'Home',
      route: '/'
    },
    {
      label: 'Conocenos',
      route: '/conocenos'
    },
    {
      label: 'Proyectos',
      route: '/proyectos'
    },
    {
      label: 'Sumate',
      route: '/sumate'
    },
  ];
  

  return (
    <div className={`${pathname=='/' ? '':'sticky top-0 z-10'}pr-[40px] pl-[40px] absolute left-0 right-0`}>
      <header className="flex items-center">
        <div className={`${pathname=='/' ? 'w-[370px]':'w-[275px]'} h-auto`}>
          <Image className="w-full h-full aspect-ratio-16/9" src={pathname=='/'? Images.logos.LogoWhite:Images.logos.LogoGreen} alt="DaleQueValen Logo" priority />
        </div>
        <nav className="w-full flex justify-end items-center">
          <div className="w-full flex justify-around">
            {links.map(({ label, route }) => (
              <Link key={route} href={route} className="w-[175px]">
                <ReusableButton color='green' border='green' width="full" isActive={pathname == route}>
                {label}
                </ReusableButton>
              </Link>
            ))
            }
            <Link href="#contacto" className="w-[175px]" >
              <ReusableButton color='green' border='green' width="full">
                Contacto
              </ReusableButton>
            </Link>
           
            
          </div>
        </nav>
      </header>
    </div>
  );
}