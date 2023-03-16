import VerticalTimeline from "@/components/VerticalTimeline";
import { motion } from "framer-motion";
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

const options = {
  year: "numeric",
  month: "long",
};

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex space-x-4 md:flex-row md:space-x-6">
        <div className="relative mx-auto block h-24 min-w-[96px] md:mx-0">
          <Image
            className="object-fit w-full rounded-full"
            fill={true}
            alt="my-image"
            src="/my-image.jpg"
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
          <div className="inline-flex space-x-2 md:space-x-4">
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
        <p className="">
          With a passion for web development I am specialized in front-end,
          leveraging cutting-edge technologies to solve complex problems and
          deliver high-quality solutions. I am a dedicated professional with a
          passion for my work, constantly seeking new ways to improve my skills.
        </p>
        {/* <div className="mt-4">
          <h5 className="font-bold text-gray-400">Quick Skills</h5>
          <p>Front end</p>
        </div> */}
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
                description: "Full Stack Developer",
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
