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
};

const ProjectCard = ({
  title,
  links,
  images,
  description,
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
        className="flex w-full flex-col rounded-xl border-2 border-gray-200 p-4 shadow-md hover:bg-gray-100/40 dark:border-gray-600 dark:shadow-lg dark:hover:bg-gray-900/40"
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
        <div className="mt-4 dark:text-gray-300">
          <div className="">{description.text}</div>
          <ul className="ml-8">
            {description.bullets.map((bullet, index) => (
              <li className="list-disc" key={index}>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex w-full justify-center space-x-4">
          {images.files.map((file, index) => (
            <div className="relative inline-flex h-40 w-48" key={index}>
              <button onClick={() => openModal(images.relativePath + file)}>
                <Image
                  className="rounded-lg object-contain"
                  src={images.relativePath + file}
                  alt={file}
                  fill={true}
                  priority
                />
              </button>
            </div>
          ))}
        </div>
      </motion.div>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transform overflow-hidden rounded-2xl bg-white p-2 text-left align-middle shadow-xl transition-all md:p-6">
                  {/* <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title> */}
                  <div className="grid-element mt-2">
                    {/* <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p> */}

                    <Image
                      className="rounded-lg object-contain"
                      src={imagePath}
                      alt={imagePath}
                      fill={true}
                      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProjectCard;
