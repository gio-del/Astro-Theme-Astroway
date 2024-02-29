// This react component takes a project and displays it in a card format
// A project has a title, description, date, and a list of technologies used
// Use tailwind for styling

import { info } from "../../data/info";

interface ProjectCardProps {
  project: (typeof info)["projects"][number];
}

export default function ProjectCard(props: ProjectCardProps) {
  const { project } = props;

  return (
    <div className="flex flex-col bg-primary dark:bg-dk-primary rounded-lg">
      <div className="flex-shrink-0">
        <img
          className="h-52 w-full object-cover"
          src="https://images.unsplash.com/photo-1683009680116-b5c04463551d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Project image"
        />
      </div>
      <div className="flex-1 bg-primary dark:bg-dk-primary p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-text dark:text-dk-text">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {project.title}
            </a>
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="block mt-2"
          >
            <p className="text-xl font-semibold text-gray-900">
              {project.description}
            </p>
          </a>
        </div>

        <div className="mt-6 flex items-center">
          <div className="flex flex-wrap space-x-2">
            {project.tech.map((tech) => (
              <span className="text-accent dark:text-dk-accent text-xs font-semibold">
                #{tech}
              </span>
            ))}
          </div>
          <p className="ml-auto text-sm font-medium text-gray-900">
            {project.date}
          </p>
        </div>
      </div>
    </div>
  );
}
