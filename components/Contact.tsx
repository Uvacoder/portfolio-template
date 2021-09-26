import Image from "next/image";
import React from "react";
import ContactButtons from "./ContactButtons";
import data from "../public/data.json";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center w-screen mx-auto mt-20"
    >
      <div className="flex items-center mx-auto mt-10 space-x-5 md:space-x-10 md:ml-10">
        <div className="relative w-20 h-1 ml-0 md:w-60 md:ml-40">
          <Image src="/line.svg" alt="line" layout="fill" />
        </div>
        <h2 className="text-xl text-text md:text-4xl whitespace-nowrap">
          Get in Touch
        </h2>
        <div className="relative w-20 h-1 md:w-60">
          <Image src="/line.svg" alt="line" layout="fill" />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center min-w-full mt-10 -ml-6 space-x-10 md:justify-start md:mx-auto md:ml-10">
        {data.links.map((link, i) => (
          <div key={i}>
            <ContactButtons
              name={link.name}
              icon={link.icon}
              link={link.link}
            />
          </div>
        ))}
       
    
      </div>
    </div>
  );
};

export default Contact;
