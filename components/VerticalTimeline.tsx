import React from "react";
import Image from "next/image";

type Work = {
  company: string;
  jobTitle: string;
  description: string[];
  startDate: string;
  endDate: string;
  link: string;
};

type VerticalTimelineProps = {
  works: Work[];
};

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ works }) => {
  return (
    <>
      <h2 className="mb-4 text-left text-xl font-bold dark:text-gray-400">
        Professional Experience
      </h2>
      <div className="relative rounded-md border border-gray-300 bg-gray-100/50 px-2 py-6 dark:bg-black/20">
        {works.map((work, index) => (
          <div className="flex" key={index}>
            <div className="relative block min-w-[50px]">
              <div className="absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2 transform border border-indigo-500"></div>
              <div className="absolute top-[2px] left-1/2 h-4 w-4 -translate-x-1/2 transform rounded-full bg-indigo-400 ring-2 ring-indigo-500"></div>
            </div>
            <div className="grow">
              <div className="flex space-x-2 md:space-x-4">
                <h3 className="font-semibold">{work.jobTitle}</h3>
                <a
                  href={work.link}
                  target="_blank"
                  className="inline-flex items-center space-x-2"
                >
                  <div className="relative h-5 w-5">
                    <Image
                      className="rounded-lg object-contain"
                      src={`https://www.google.com/s2/favicons?domain=${work.link}&sz=64`}
                      alt={work.company}
                      fill={true}
                      priority
                    />
                  </div>
                  <p className="font-semibold tracking-tighter text-indigo-500">
                    {work.company}
                  </p>
                </a>
              </div>
              <p className="text-sm text-gray-400">
                {work.startDate} - {work.endDate}
              </p>
              {/* <ul className="mt-2">
                {work.description.map((description, index) => (
                  <li key={index} className="text-sm">
                    - {description}
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VerticalTimeline;
