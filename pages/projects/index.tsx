import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import React from "react";

const data: ProjectCardProps[] = [
  {
    title: "Pomodoro",
    description: {
      text: "This application is a solution to a challenge presented by the Front End Mentor website, where the objective was to develop a Pomodoro timer. Its main functionalities include:",
      bullets: [
        "Three different timers: Pomodoro, short break, and long break.",
        "A form editing feature is available for each timer, and this information is stored in the local storage of the user's browser.",
        "The application is designed to be responsive across multiple screen sizes.",
      ],
    },
    links: {
      demo: "http://pomodoro-tpessoa.vercel.app",
      github: "https://github.com/tpessoa/pomodoro",
    },
    images: {
      relativePath: "/projects/pomodoro/",
      files: ["pomodoro_4.png", "pomodoro_2.png", "pomodoro_3.png"],
    },
  },
  {
    title: "Dictionary Web App",
    description: {
      text: "This application is a solution to a challenge presented by the Front End Mentor website, where the objective was to develop a dictionary. Its main functionalities include:",
      bullets: [
        "Integration with a dictionary API for fetching word definitions and related information.",
        "A toggle feature to switch between dark and light mode.",
        "The application is designed to be responsive across multiple screen sizes.",
        "Text to speech.",
      ],
    },
    links: {
      demo: "https://tpessoa-dictionary.vercel.app/",
      github: "https://github.com/tpessoa/dictionary-web-app",
    },
    images: {
      relativePath: "/projects/dictionary/",
      files: ["dictionary_1.png", "dictionary_2.png"],
    },
  },
  {
    title: "Dictionary Web App",
    description: {
      text: "This application is a solution to a challenge presented by the Front End Mentor website, where the objective was to develop a dictionary. Its main functionalities include:",
      bullets: [
        "Integration with a dictionary API for fetching word definitions and related information.",
        "A toggle feature to switch between dark and light mode.",
        "The application is designed to be responsive across multiple screen sizes.",
        "Text to speech.",
      ],
    },
    links: {
      demo: "https://tpessoa-dictionary.vercel.app/",
      github: "https://github.com/tpessoa/dictionary-web-app",
    },
    images: {
      relativePath: "/projects/dictionary/",
      files: ["dictionary_1.png", "dictionary_2.png"],
    },
  },
];

const index = () => {
  return (
    <div className="w-full">
      <h1 className="mb-6 text-3xl">Projects</h1>
      <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2">
        {data.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default index;
