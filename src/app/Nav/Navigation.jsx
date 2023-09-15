"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Images } from "@/assets/img";


import BotonReutilizable from "@/components/BotonReutilizable/BotonReutilizable";


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
      route: '/proyetos'
    },
    {
      label: 'Sumate',
      route: '/sumate'
    },
  ];
  

  return (
    <div className={`${pathname=='/' ? '':'sticky top-0 z-10'}pr-[40px] pl-[40px] absolute left-0 right-0`}>
      <header className="flex items-center">
        <div className={`${pathname=='/' ? 'w-100':'w-60'} h-auto`}>
          <Image className="w-full h-full aspect-ratio-16/9" src={Images.logos.LogoGreen} alt="DaleQueValen Logo" priority />
        </div>
        <nav className="w-full flex justify-end items-center">
          <ul className="w-full flex justify-around">
            {links.map(({ label, route }) => (
              <Link key={route} href={route} className="w-2/12">
                <BotonReutilizable key={route} color="green" tamaño="full" opacity={pathname == route ? ' opacity-100':""} >
                {label}
                </BotonReutilizable>
              </Link>
            ))
            }
            <Link href="/contacto" className="w-2/12" >
              <BotonReutilizable color="green" tamaño="full">
                Contacto
              </BotonReutilizable>
            </Link>
           
            
          </ul>
        </nav>
      </header>
    </div>
  );
}