import React from "react";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

type ProjectSectionProsp = {
  title: string;
  projects: ProjectCardProps[];
};

const ProjectSection = (props: ProjectSectionProsp) => {
  return (
    <div className="flex flex-col space-y-3">
      <h2 className="text-xl">{props.title}</h2>
      <div className="grid auto-rows-fr grid-cols-1 gap-4 lg:grid-cols-3">
        {props.projects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
