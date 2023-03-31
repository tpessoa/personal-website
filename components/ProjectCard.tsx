import Image from "next/image";
import React, { Fragment, useState } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";
import { motion, Variants } from "framer-motion";

export type ProjectCardProps = {
  title: string;
  description: {
    text: string;
    bullets: string[];
  };
  links: {
    github: string;
    demo: string;
  };
  images: {
    relativePath: string;
    files: string[];
  };
  technologies: string[];
};

const ProjectCard = ({
  title,
  links,
  images,
  description,
  technologies,
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imagePath, setImagePath] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(path: string) {
    setImagePath(path);
    setIsOpen(true);
  }

  return (
    <>
      <motion.div
        className="flex w-full flex-col space-y-2 rounded-xl border-2 border-gray-200 p-4 shadow-md hover:bg-gray-100/40 dark:border-gray-600 dark:shadow-lg dark:hover:bg-gray-900/40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex justify-between">
          <div className="text-xl font-bold">{title}</div>
          <div className="inline-flex space-x-4">
            <div className="block">
              <a href={links.github} target="_blank">
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
            <div className="block">
              <a href={links.demo} target="_blank">
                <HiOutlineExternalLink className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex grow flex-col justify-between space-y-3">
          <div className="dark:text-gray-300">
            <div>{description.text}</div>
            <ul className="ml-8">
              {description.bullets.map((bullet, index) => (
                <li
                  className="list-disc text-sm text-gray-600 dark:text-gray-400"
                  key={index}
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <ul className="inline-flex flex-wrap items-start justify-center font-semibold text-indigo-500">
            {technologies.map((tech, index) => (
              <li className="ml-4" key={index}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
