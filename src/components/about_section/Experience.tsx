import React from "react";
import { info } from "../../data/info";

interface ExperienceProps {
  experience: (typeof info)["about"]["experience"];
}

export default function Experience(props: ExperienceProps) {
  const { experience: experience } = props;

  return experience.length == 0 ? (
    <div></div>
  ) : (
    <div className="flex flex-col space-y-4 lg:w-1/2 mx-4">
      <h1 className="text-3xl font-bold">Experience</h1>
      {experience.map((exp, index) => (
        <div className="flex flex-col space-y-2 relative" key={index}>
          <div className="flex items-center space-x-2">
            <i className="fas fa-briefcase text-2xl text-secondary dark:text-dk-secondary dark:hover:text-dk-accent hover:text-accent z-10"></i>
            <h2 className="text-xl font-semibold">{exp.title}</h2>
          </div>
          <div className="relative left-10 w-full">
            <p className="text-xl font-normal">{exp.date}</p>
            <p className="text-xl font-normal">{exp.location}</p>
            <p className="lg:text-xl text-lg font-normal">{exp.description}</p>
          </div>

          {index !== experience.length - 1 && (
            <div className="absolute top-3.5 left-[0.655rem] h-full w-1 bg-secondary dark:bg-dk-secondary hover:bg-accent dark:hover:bg-dk-accent -z-10"></div>
          )}
        </div>
      ))}
    </div>
  );
}
