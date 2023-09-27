import Icon from "@/assets/icons/icon";
import Link from "next/link";

function SocialNetworks() {
  return (
    <div className="fixed top-[560px] ms:hidden md:block right-0 transform -translate-y-1/2 rounded-tl-lg rounded-bl-lg bg-green p-4 shadow-md ">
      <div className="flex flex-col gap-6">
        <Link
          className="w-10 hover:text-purple text-white"
          href={"https://www.facebook.com/"}
          target="_blank"
        >
          <Icon icon="Facebook" />
        </Link>
        <Link
          className="w-10 hover:text-purple text-white"
          href={"https://www.youtube.com/"}
          target="_blank"
        >
          <Icon icon="Youtube" />
        </Link>
        <Link
          className="w-10 hover:text-purple text-white"
          href={"https://www.instagram.com/dalequevalen/"}
          target="_blank"
        >
          <Icon icon="Instagram" />
        </Link>
        <Link
          className="w-10 hover:text-purple  text-white"
          href={"https://www.linkedin.com/"}
          target="_blank"
        >
          <Icon icon="Linkedin" />
        </Link>
      </div>
    </div>
  );
}

export default SocialNetworks;
