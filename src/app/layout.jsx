
import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from '../components/Nav/Navigation.jsx';
import NavResponsive from '../components/Nav/NavResponsive';
import Footer from '../components/Foooter/Footer';
import { createIconsTypes } from '@/utils/createIcons';
const inter = Inter({ subsets: ['latin'] });
import SocialNetworks from '@/components/SocialNetworks/socialNetworks';


export const metadata = {
  title: ' Fundación ONG',
  description: 'Create by footalent',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <title>DaleQueValen</title>
      </head>


      <body className='lg:pr-[140px] lg:pl-[140px] ms:pr-[15px] ms:pl-[15px]'>
        <Navigation/>
        <NavResponsive/>
          {children}
        {<Footer/>}
        <SocialNetworks/>
      </body>
    </html>
  );
}
