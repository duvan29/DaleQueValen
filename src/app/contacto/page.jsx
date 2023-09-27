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
        <h1 className="mb-10 text-base ms:text-[16px] md:text-[24px] mt-12">
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
        <h1 className="mb-10 text-base ms:text-[16px] md:text-[24px] mt-12">
          Contacto
        </h1>
        <section className="flex justify-center items-center text-center">
          <div className="flex justify-center flex-col text-center items-center m-10">
            <Link
              className=" w-12 hover:text-[#8e83bc] flex mx-2"
              href={"https://gmail.com/"}
              target="_blank"
            >
              <Icon icon="Mail" />
            </Link>
            <p className="mt-2 underline ms:text-[12px] md:text-[16px] mx-0 px-0">
              dalequevalen@gmail.com
            </p>
          </div>

          <div className="flex justify-center flex-col text-center items-center md:mx-[70px] ms:mx-[60px]">
            <Link
              className=" w-10 hover:text-[#8e83bc] flex mx-2"
              href={"https://web.whatsapp.com/"}
              target="_blank"
            >
              <Icon icon="Whatsapp" />
            </Link>
            <p className="mt-2 ms:text-[12px] md:text-[16px] mx-0">
              +542612425949
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
