"use client";
import Link from 'next/link'
import React, {useState} from 'react';
import { RxHamburgerMenu, RxCross1} from "react-icons/rx";

function Navigation() {
  const [navbarOpen, setNavarOpen] = useState(false)
  return (
  <nav className='bg-black  top-0 left-0 right-0 z-10 bg-opacity-90'>
    <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
      <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>LOGO</Link>
      <div className='mobile-menu block md:hidden'>
        
      { !navbarOpen ?(

        <button onClick={() => setNavarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>  <RxHamburgerMenu className='text-xl' /></button>
      ) : (

        <button onClick={() => setNavarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>  <RxCross1 className='text-xl' /></button>
      )
      }
        
      </div>
      <div className='menu hidden md:block md:w-auto'>
        <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
          <li>
            <Link href={"/about"} className='block py-2 pl-3 pr-4 text-[#c2c3c4] sm-text-xl rounded md:p-0 hover:text-white'>Conócenos</Link>
          </li>
          <li>
            <Link href={"/services"} className='block py-2 pl-3 pr-4 text-[#c2c3c4] sm-text-xl rounded md:p-0 hover:text-white '>Areas de Acción</Link>
          </li>
          <li>
            <Link href={"/joinin"} className='block py-2 pl-3 pr-4 text-[#c2c3c4] sm-text-xl rounded md:p-0 hover:text-white'>Sumate</Link>
          </li>
          <li>
            <Link href={"/contact"} className='block py-2 pl-3 pr-4 text-[#c2c3c4] sm-text-xl rounded md:p-0 hover:text-white'>Contacto</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  )
}

export default Navigation