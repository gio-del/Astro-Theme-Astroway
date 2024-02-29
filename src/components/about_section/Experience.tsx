import { info } from "../../data/info";

interface ExperienceProps {
  experience: (typeof info)["about"]["experience"];
}

export default function Experience(props: ExperienceProps) {
  const { experience } = props;

  return experience.length == 0 ? (
    <div></div>
  ) : (
    <div className="flex flex-col space-y-4 w-full lg:w-1/2 mx-4">
      <h1 className="text-3xl font-bold">Job Experience</h1>
      {experience.map((exp, index) => (
        <div className="flex flex-col space-y-2 relative" key={index}>
          <div className="flex items-center space-x-2">
            <i className="fas fa-briefcase text-2xl text-secondary dark:text-dk-secondary dark:hover:text-dk-accent hover:text-accent z-10"></i>
            <h2 className="text-2xl font-semibold">{exp.title}</h2>
          </div>
          <div className="relative left-10">
            <p className="text-xl font-normal">{exp.date}</p>
            <p className="text-xl font-normal">{exp.location}</p>
            <p className="text-xl font-normal">{exp.description}</p>
          </div>

          {index !== experience.length - 1 && (
            <div className="absolute top-3 left-2.5 h-full w-1 bg-secondary dark:bg-dk-secondary"></div>
          )}
        </div>
      ))}
    </div>
  );
}
