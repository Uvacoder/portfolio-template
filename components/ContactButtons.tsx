import Image from "next/image";
import React from "react";

interface ButtonProps {
  link: string;
  icon: string;
  name: string;
}

const ContactButtons: React.FC<ButtonProps> = ({ link, name, icon }) => {
  return (
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="py-2 md:flex hidden px-5 items-center duration-100 border-neongreen border-2 text-neongreen rounded-lg fill-current"
      >
        <Image src={`/logos/${icon}`} alt={name} width={25} height={25} />
        <span className="ml-2">{name}</span>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="py-2 flex md:hidden items-center duration-100  text-neongreen rounded-lg fill-current"
      >
        <Image src={`/logos/${icon}`} alt={name} width={25} height={25} />
      </a>
    </div>
  );
};

export default ContactButtons;
