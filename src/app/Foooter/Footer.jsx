import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Images } from "@/assets/img";
import CardGoals from '@/assets/icons/icon';


const Footer = () => {
  return (
    <footer className='bg-[#a9d730] text-white h-1/2 p-5 w-full flex md:flex-row flex-col justify-between text-center items-center'>
      <div className='mx-32'>
        <ul>
          <div className='flex gap-6'>
            <Link
              className='w-10 hover:text-[#8e83bc]'
              href={"https://www.facebook.com/"}
              target='_blank'>
              <CardGoals
                icon="Facebook"
              />
            </Link>
            <Link
              className='w-10 hover:text-[#8e83bc]'
              href={"https://www.youtube.com/"}
              target='_blank'>
                <CardGoals
                icon="Youtube"
              />
            </Link>
            <Link
              className='w-10 hover:text-[#8e83bc]'
              href={"https://www.instagram.com/dalequevalen/"}
              target='_blank'>
                <CardGoals
                icon="Instagram"
              />
            </Link>
            <Link
              className='w-10 hover:text-[#8e83bc]'
              href={"https://www.linkedin.com/"}
              target='_blank'>
                <CardGoals
                icon="Linkedin"
              />
            </Link>
          </div>
        </ul>
      </div>
      <div>
        <div>
          <Image className='w-60' src={Images.logos.LogoBlack} alt="DaleQueValen Logo" priority />
        </div>
        <p>
          ©️Copyright
        </p>
      </div>
      <div className='flex gap-4 flex-col mx-32'>
        <div className='flex'>
          <Link
            className=' w-10 hover:text-[#8e83bc] flex mx-2'
            href={"https://gmail.com/"}
            target='_blank'>
              <CardGoals
                icon="Mail"
              />
          </Link>
          <p className='gap-4 mt-2'>
            dalequevalen@gmail.com
          </p>
        </div>
        <div className='flex'>
          <Link
            className=' w-10 hover:text-[#8e83bc] flex mx-2'
            href={"https://web.whatsapp.com/"}
            target='_blank'>
             <CardGoals
                icon="Whatsapp"
              />
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