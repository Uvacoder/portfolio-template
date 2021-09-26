import Image from "next/image";
import React from "react";
import data from "../public/data.json";
import Title from "./Title";

const Projects = () => {
  return (
    <div id="work">
      <Title num={3} title="Some Things I’ve Built" />

      <div className="flex flex-col">
        {data.projects.map((project, i) => (
          <div key={i} className="flex flex-col items-center mt-10 md:flex-row">
            <div className="relative w-[450px] h-[250px] rounded-lg">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                className="rounded-lg"
                objectFit="contain"
              />
            </div>

            <div className="md:ml-20 ml-2 md:w-1/3">
              <h2 className="text-3xl font-semibold text-neongreen mt-5">
                {project.name}
              </h2>
              <p className="sm:mt-5 mt-2 text-textdark">{project.about}</p>
              <div className="flex justify-between mt-3 font-fira">
                {project.tech.map((title) => {
                  <p>{title}</p>;
                })}
              </div>

              <div className="flex space-x-4 mt-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.links.GitHub}
                  className="py-2 px-5 hover:bg-neongreen/90 flex items-center hover:border-neongreen/90 hover:backdrop-blur-lg duration-100 border-neongreen border-2 stroke-current group-hover:text-white hover:text-white text-neongreen rounded-lg fill-current"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4998 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9.00001 2.48C6.27001 0.649999 5.09001 0.999999 5.09001 0.999999C4.57638 2.19835 4.54415 3.54851 5.00001 4.77C4.03013 5.7887 3.49253 7.14346 3.50001 8.55C3.50001 13.97 6.80001 15.16 9.94001 15.55C9.61101 15.89 9.35727 16.2954 9.19532 16.7399C9.03336 17.1844 8.96682 17.6581 9.00001 18.13V22M9.00001 19C4.00001 20.5 4.00001 16.5 2.00001 16L9.00001 19Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className="ml-2">GitHub</span>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.links.Live}
                  className="py-2 px-5 hover:bg-neongreen/90 flex items-center hover:border-neongreen/90 hover:backdrop-blur-lg duration-100 border-neongreen border-2 stroke-current group-hover:text-white hover:text-white text-neongreen rounded-lg fill-current"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current"
                  >
                    <path
                      d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 3H21V9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 14L21 3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="ml-2">Visit</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
