'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Images } from "@/assets/img"
import links from "@/mock/mockNavLinks"
import Icon from "@/assets/icons/icon"

export default function NavResponsive() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }

    const toggleMenuLogo = ()=>{
        isOpen ? setIsOpen(!isOpen) : '';
    }

    
      
    return(
        <div className="fixed top-0 left-0 z-50 h-[80px] w-screen flex justify-between items-center bg-green p-4 mt-0 lg:hidden">
            <div className={`fixed top-0 left-0 z-60 h-[98%] ${isOpen ? 'w-[60%] ':'w-0' }  bg-white transition-width duration-300 ease-in-out flex flex-col justify-between lg:hidden`}>
               <div className={` flex flex-col border-t-2 mt-[80px] text-[14px] ${isOpen ? '':'hidden'}`}>
                    {links.map(({ label, route }) => (
                    <Link onClick={toggleMenuLogo} key={route} href={route} className="w-full mr-[30px] flex justify-between px-3 py-2">
                        <p>{label}</p>
                        <div className="bg-blue">"#"</div>
                    </Link>
                    ))
                    }
               </div>
                
                <div className={`flex flex-col text-center mb-6 ${isOpen ? '':'hidden'}`}>
                    <p className='mb-3'>Seguinos en redes:</p>
                    <div className='flex justify-evenly mb-6'>
                        <Link
                        className='w-10 hover:text-[#8e83bc]'
                        href={"https://www.instagram.com/dalequevalen/"}
                        target='_blank'>
                        <Icon
                        icon="Instagram"
                        />
                        </Link>

                        <Link
                        className='w-10 hover:text-purple'
                        href={"https://www.facebook.com/"}
                        target='_blank'>
                        <Icon
                        icon="Facebook"
                        />
                        </Link>

                        <Link
                        className='w-10 hover:text-[#8e83bc]'
                        href={"https://www.linkedin.com/"}
                        target='_blank'>
                        <Icon
                        icon="Linkedin"
                        />
                        </Link>
                    </div>
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
            <Link href={isOpen ? "":"/"} onClick={toggleMenuLogo} className={`mx-auto transform translate-x-[-12px] ${isOpen ? `absolute x-[15px]`:''}`}>
                <Image src={isOpen ? Images.logos.LogoGreen : Images.logos.LogoWhite} alt="Logo Dale Que Valen" className="w-auto h-[80px]"/>
            </Link>
        </div>
        
    )
}