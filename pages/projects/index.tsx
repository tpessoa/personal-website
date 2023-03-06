import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import React from "react";

export const projectsDataCard: ProjectCardProps[] = [
  {
    title: "Pomodoro",
    description: {
      text: "Tool for boosting productivity and staying focused throughout the day. Main features:",
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
      relativePath: "https://res.cloudinary.com/datqllqvo/image/upload/",
      files: [
        "v1679005645/pomodoro_2_fucqrj.png",
        "v1679005645/pomodoro_3_dejcq5.png",
      ],
    },
  },
  {
    title: "Dictionary",
    description: {
      text: "Dictionary Web App tool for expanding vocabulary and finding the words definitions. Main features:",
      bullets: [
        "Integration with a dictionary API for fetching word definitions and related information",
        "A toggle feature to switch between dark and light mode.",
        "Text to speech.",
        "The application is designed to be responsive across multiple screen sizes.",
      ],
    },
    links: {
      demo: "https://tpessoa-dictionary.vercel.app/",
      github: "https://github.com/tpessoa/dictionary-web-app",
    },
    images: {
      relativePath: "https://res.cloudinary.com/datqllqvo/image/upload/",
      files: [
        "v1679005645/dictionary_2_tnoi8d.png",
        "v1679005645/dictionary_1_m1rnid.png",
      ],
    },
  },
  {
    title: "Multi Step Form",
    description: {
      text: "PoC of an multi step form. Main features:",
      bullets: [
        "Dynamic final summary based on the subscritions/princing choosed.",
        "Applied React useContext hook to share state between the form pages.",
        "The application is designed to be responsive across multiple screen sizes.",
      ],
    },
    links: {
      demo: "https://tpessoa-multi-step-form.vercel.app/",
      github: "https://github.com/tpessoa/multi-step-form",
    },
    images: {
      relativePath: "https://res.cloudinary.com/datqllqvo/image/upload/",
      files: ["v1679005419/step_3_pjxflm.png", "v1679005419/step_4_vzgj5k.png"],
    },
  },
];

const index = () => {
  return (
    <div className="w-full">
      <h1 className="mb-6 text-3xl">Projects</h1>
      <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2">
        {projectsDataCard.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default index;
