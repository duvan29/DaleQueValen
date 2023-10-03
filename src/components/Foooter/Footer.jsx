import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Images } from "@/assets/img";
import Icon from "@/assets/icons/icon";

const Footer = () => {
  return (
    <footer
      id="contacto"
      className="bg-green text-white h-[160px] p-5 lg:flex lg:flex-row flex-col justify-between items-center text-center -ml-[140px] -mr-[140px] ms:hidden"
    >
      <div className="mx-10 mb-3 pb-3">
        <Link href="/">
          <Image
            className="w-60"
            src={Images.logos.LogoWhite}
            alt="DaleQueValen Logo"
            priority
          />
        </Link>
        <p className="mt-[-15px]">©️Copyright FooTalent 2023</p>
      </div>
      <div className="flex gap-4 flex-row mx-20">
        <div className="flex">
          <Link
            className=" w-10 hover:text-purple flex mx-3"
            href={"https://wa.me/+543815108075"}
            target="_blank"
          >
            <Icon icon="Whatsapp" />
          </Link>
          <p className="gap-6 mt-2">+54 38 1510 8075</p>
        </div>
        <div className="flex">
        <Link
          className="w-10 hover:text-purple flex mx-2"
          href="mailto:info@dalequevalen.com"
          target="_blank"
        >
          <Icon icon="Mail" />
        </Link>
          <p className="gap-4 mt-2">info@dalequevalen.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
