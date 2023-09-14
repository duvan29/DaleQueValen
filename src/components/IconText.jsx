import React from 'react';
import Icon from "@/assets/icons/icon"; // Importa de manera estática

export default function IconText({ icon, text }) {
  return (
    <p className="flex justify-center items-center">
      <div className="h-14 w-14">
        <Icon icon={icon}/>
      </div>
      <h2 className="text-purple ml-4">{text}</h2>
    </p>
  );
}