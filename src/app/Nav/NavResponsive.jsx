'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Images } from "@/assets/img"
import links from "@/mock/mockNavLinks"

export default function NavResponsive() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }

    const toggleMenuLogo = ()=>{
        isOpen ? setIsOpen(!isOpen) : '';
    }

    
      
    return(
        <div className="fixed top-0 left-0 z-50 h-[80px] w-screen flex justify-between items-center bg-green p-4 lg:hidden">
            <div className={`fixed top-0 left-0 z-60 h-[100%] ${isOpen ? 'w-[60%] ':'w-0' }  bg-white transition-width duration-300 ease-in-out lg:hidden`}>
               <div className={` flex flex-col bg-blue mt-[80px]  ${isOpen ? '':'hidden'}`}>
                    {links.map(({ label, route }) => (
                    <Link onClick={toggleMenuLogo} key={route} href={route} className="w-[175px] mr-[30px]">
                        
                        {label}
                        
                    </Link>
                    ))
                    }
               </div>
            </div>
            <button onClick={toggleMenu} className={`text-white flex-start ${isOpen ? 'hidden':''}`}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                </svg>
            </button>
            <Link href="/" onClick={toggleMenuLogo} className={`mx-auto transform translate-x-[-12px] ${isOpen ? `absolute x-[15px]`:''}`}>
                <Image src={isOpen ? Images.logos.LogoGreen : Images.logos.LogoWhite} alt="Logo Dale Que Valen" className="w-auto h-[80px]"/>
            </Link>
        </div>
        
    )
}