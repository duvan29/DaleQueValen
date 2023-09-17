import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from '@/app/Nav/Navigation.module.css';
import { Images } from "@/assets/img";
import Facebook from '@/assets/icons/Facebook';
import Instagram from '@/assets/icons/Instagram';
import Whatsapp from '@/assets/icons/Whatsapp';
import Youtube from '@/assets/icons/Youtube';
import Linkedin from '@/assets/icons/Linkedin';
import Mail from '@/assets/icons/Mail';




const Footer = () => {
  return (
    <footer className='bg-[#a9d730] text-white h-1/2 w-full flex md:flex-row flex-col justify-around p-10 bg-opacity-90 text-center items-center'>
      <div className='p-5'>
        <ul>
          <div className='flex gap-6 pb-5'>
            <Link
              className='w-10 hover:text-[#8e83bc]'
              href={"https://www.facebook.com/"}
              target='_blank'>
              <Facebook />
            </Link>
            <Link
              className='w-10 hover:text-[#8e83bc]'
              href={"https://www.youtube.com/"}
              target='_blank'>
              <Youtube />
            </Link>
            <Link
              className='w-10 hover:text-[#8e83bc]'
              href={"https://www.instagram.com/dalequevalen/"}
              target='_blank'>
              <Instagram />
            </Link>
            <Link
              className='w-10 hover:text-[#8e83bc]'
              href={"https://www.linkedin.com/"}
              target='_blank'>
              <Linkedin />
            </Link>
          </div>
        </ul>
      </div>
      <div>
        <div>
          <Image className={styles.logo} src={Images.logos.LogoBlack} alt="DaleQueValen Logo" priority />
        </div>
        <p>
          ©️Copyright
        </p>
      </div>
      <div className='flex gap-6 pt-5 flex-col'>
        <div className='flex'>
          <Link
            className=' w-10 hover:text-[#8e83bc] flex mx-2' 
            href={"https://gmail.com/"}
            target='_blank'>
            <Mail />
          </Link>
          <p className='gap-6 mt-2'>
            dalequevalen@gmail.com
          </p>
        </div>
        <div className='flex'>
        <Link
            className=' w-10 hover:text-[#8e83bc] flex mx-2'
            href={"https://web.whatsapp.com/"}
            target='_blank'>
            <Whatsapp />
          </Link>
          <p className='gap-6 mt-2'>
            +54-2612425949
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;