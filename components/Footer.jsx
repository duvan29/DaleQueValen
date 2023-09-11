import React from 'react'
import Link from 'next/link'
import { AiFillFacebook,AiFillTwitterSquare,AiFillYoutube,AiOutlineInstagram,AiOutlineLinkedin} from "react-icons/ai";

export default function Footer() {
    return (
        <footer className='bg-black h-1/2 w-full flex md:flex-row flex-col justify-around p-20 bg-opacity-90 text-center items-center'>
            <div className='p-5'>
                <ul>
                    <p className='text-gray-800 font-bold text-3xl pb-6'>
                        Redes <span className='text-blue-600'>Sociales</span>
                    </p>
                    <div className='flex gap-6 pb-5'>
                        <Link href={"https://www.facebook.com/"} target='_blank'><AiFillFacebook className='text-white text-2xl cursor-pointer hover:text-blue-600'/></Link>                      
                        <Link href={"https://twitter.com/"} target='_blank'><AiFillTwitterSquare className='text-white text-2xl cursor-pointer hover:text-blue-600'/></Link>  
                        <Link href={"https://www.youtube.com/"} target='_blank'><AiFillYoutube className='text-white text-2xl cursor-pointer hover:text-blue-600'/></Link>  
                        <Link href={"https://www.instagram.com/dalequevalen/"} target='_blank'><AiOutlineInstagram className='text-white text-2xl cursor-pointer hover:text-blue-600'/></Link>  
                        <Link href={"https://www.linkedin.com/"} target='_blank'><AiOutlineLinkedin className='text-white text-2xl cursor-pointer hover:text-blue-600'/></Link>  
                    </div>
                </ul>
            </div>
        </footer>
    )
}
