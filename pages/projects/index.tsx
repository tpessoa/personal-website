import { ProjectCardProps } from "@/components/ProjectCard";
import ProjectSection from "@/components/ProjectSection";
import React from "react";

const prototypingProjectsData: ProjectCardProps[] = [
  {
    title: "Pomodoro",
    description: {
      text: "Tool for boosting productivity and staying focused throughout the day. Main features:",
      bullets: [
        "Three different timers: Pomodoro, short break, and long break",
        "A form editing feature is available for each timer, and this information is stored in the local storage of the user's browser",
        "The application is designed to be responsive across multiple screen sizes",
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
    technologies: ["Next.js", "Tailwind"],
  },
  {
    title: "Dictionary",
    description: {
      text: "Dictionary Web App tool for expanding vocabulary and finding the words definitions. Main features:",
      bullets: [
        "Integration with a dictionary API for fetching word definitions and related information",
        "A toggle feature to switch between dark and light mode",
        "Text to speech",
        "The application is designed to be responsive across multiple screen sizes",
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
    technologies: ["Next.js", "Tailwind", "API integration"],
  },
  {
    title: "Multi Step Form",
    description: {
      text: "PoC of an multi step form. Main features:",
      bullets: [
        "Dynamic final summary based on the subscritions/princing choosed",
        "Field validations with react-formik",
        "Applied React useContext hook to share state between the form pages",
        "The application is designed to be responsive across multiple screen sizes",
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
    technologies: ["Next.js", "Tailwind"],
  },
];

const productionProjectsData: ProjectCardProps[] = [
  {
    title: "Personal Website",
    description: {
      text: "My personal website/portfolio. Main features:",
      bullets: ["Custom timeline", "Mobile responsive"],
    },
    links: {
      demo: "https://www.tpessoa.online",
      github: "https://github.com/tpessoa/personal-website",
    },
    technologies: ["Next.js", "Tailwind"],
  },
];

const index = () => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col space-y-6">
      <ProjectSection title={"Production"} projects={productionProjectsData} />
      <ProjectSection
        title={"Prototyping / Training"}
        projects={prototypingProjectsData}
      />
    </div>
  );
};

export default index;
