'use client';
import Icon from "@/assets/icons/icon";

export default function IconText({ icon = IconText, text }) {
  return (
    <p className="flex justify-around items-center">
      <i className="h-14 w-14">
        <Icon icon={icon}/>
      </i>
      <h2 className="text-purple">{text}</h2>
    </p>
  );
}
