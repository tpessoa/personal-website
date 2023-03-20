import VerticalTimeline from "@/components/VerticalTimeline";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type HomeData = {
  links: {
    linkedin: string;
    github: string;
  };
};

const data: HomeData = {
  links: {
    github: "https://github.com/tpessoa",
    linkedin: "https://www.linkedin.com/in/tpessoa/",
  },
};

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex space-x-4 md:flex-row md:space-x-6">
        <div className="relative mx-auto block h-32 min-w-[128px] md:mx-0">
          <Image
            className="h-full w-full rounded-full object-cover shadow-xl"
            fill={true}
            alt="my-image"
            src="https://res.cloudinary.com/datqllqvo/image/upload/v1679347137/D4E6EFA6-C0CF-4CDD-B122-EDC9D29C179F_dcbrrf_raguku.jpg"
            priority={true}
          />
        </div>
        <div className="flex w-full flex-col justify-between md:flex-row">
          <div className="my-auto">
            <h2 className="text-3xl font-bold">Tiago Pessoa</h2>
            <h4 className="text-xl font-semibold text-gray-400 md:mt-2">
              Software Engineer
            </h4>
          </div>
          <div className="inline-flex space-x-4">
            <a href={data.links.github} target="_blank">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href={data.links.linkedin} target="_blank">
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p>
          With a passion for web development I am specialized in front-end,
          leveraging cutting-edge technologies to solve complex problems and
          deliver high-quality solutions. I am a dedicated professional with a
          passion for my work, constantly seeking new ways to improve my skills.
        </p>
        <br />
        <p>
          My current productive stack is based on React/Next.js for front-end
          development and Tailwind for styling purposes. While I have some
          experience with Express for back-end development, I recently
          discovered tRPC and was amazed by its robust type safety. It is
          currently my preferred choice for quickly developing prototypes. As
          for database, Prisma serves as my preferred database solution.
        </p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <VerticalTimeline
            works={[
              {
                title: "Critical Techworks (BMW Group)",
                description: "Front-End Developer",
                date: "sept. 2021",
                link: "https://www.criticaltechworks.com",
              },
            ]}
          />
        </motion.div>
      </div>
    </div>
  );
}
