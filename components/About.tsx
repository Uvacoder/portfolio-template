import Image from "next/image";
import React from "react";
import data from "../public/data.json";
import Title from "./Title";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center md:justify-start md:items-start ml-4 md:ml-0"
    >
      <div className="ml- sm:!-ml-0 flex items-center">
        <Title num={1} title="About me" />
      </div>

      <div className="flex flex-col md:flex-row items-center md:justify-start md:items-start justify-center">
        <h3 className="text-textdark md:w-1/2 mt-10 text-xl">{data.about}</h3>

        <div className="ml-0 md:mt-0 mx-auto md:ml-20 mt-20 w-80 h-80 relative rounded-full border-2 border-neongreen">
          <Image
            src={data.image}
            alt={data.name}
            objectFit="contain"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
