import SectionTitle from "@/components/SectionTitle/SectionTitle";
import CallToActionMobileTop from "@/components/CallToAction/CallToActionMobileTop";
import CallToActionMobileBottom from "@/components/CallToAction/CallToActionMobileBottom";
import Link from "next/link";
import Icon from "@/assets/icons/icon";

export default function Conocenos() {
  return (
    <main>
      <SectionTitle bgColor="pink" className="bg-pink" title="contacto" />
      <CallToActionMobileTop className="flex flex-col p-5 " bgColor="pink" />
      <div className="flex flex-col text-center mb-6">
        <h1 className="mb-6 text-base ms:text-[16px] md:text-[24px] mt-5">
          Redes sociales
        </h1>

        <section className="flex justify-evenly mb-6">
          <div className="flex flex-col justify-center items-center text-center">
            <Link
              className="w-10 hover:text-[#8e83bc]"
              href={"https://www.instagram.com/dalequevalen/"}
              target="_blank"
            >
              <Icon icon="Instagram" />
            </Link>
            <p className="mt-2 ms:text-[12px] md:text-[16px]">@dalequevalen</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Link
              className="w-10 hover:text-purple"
              href={"https://www.facebook.com/"}
              target="_blank"
            >
              <Icon icon="Facebook" />
            </Link>
            <p className="mt-2 ms:text-[12px] md:text-[16px]">@dalequevalen</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Link
              className="w-10 hover:text-[#8e83bc]"
              href={"https://www.linkedin.com/"}
              target="_blank"
            >
              <Icon icon="Linkedin" />
            </Link>
            <p className="mt-2 ms:text-[12px] md:text-[16px]">@dalequevalen</p>
          </div>
        </section>
        <CallToActionMobileBottom
          className="flex flex-col p-5"
          bgColor="pink"
        />
        <h1 className="mb-10 text-base ms:text-[16px] md:text-[24px] mt-5">
          Contacto
        </h1>
        <section className="flex justify-center items-center text-center mt-[-20px]">
          <div className="flex justify-center flex-col text-center items-center mr-5 ">
            <Link
              className=" w-12 hover:text-[#8e83bc] flex mx-2"
              href={"https://gmail.com/"}
              target="_blank"
            >
              <Icon icon="Mail" />
            </Link>
            <p className="underline ms:text-[12px] md:text-[16px] mx-0">
              dalequevalen@gmail.com
            </p>
          </div>

          <div className="flex justify-center flex-col text-center items-center md:mx-[20px] ms:mx-[20px] ml-5">
            <Link
              className=" w-10 hover:text-[#8e83bc] flex"
              href={"https://web.whatsapp.com/"}
              target="_blank"
            >
              <Icon icon="Whatsapp" />
            </Link>
            <p className="mt-2 ms:text-[12px] md:text-[16px] mx-0">
              +54 - 261 - 2425949
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
