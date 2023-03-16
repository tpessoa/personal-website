import React from "react";
import Image from "next/image";

type Work = {
  title: string;
  description: string;
  date: string;
  link: string;
};

type VerticalTimelineProps = {
  works: Work[];
};

const isReverse = (index: number) => index % 2 == 0;

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ works }) => {
  return (
    <div className="relative rounded-md border border-gray-300 bg-gray-100/50 p-2 dark:bg-black/30">
      <h2 className="mb-6 text-center text-xl font-bold">Professional Work</h2>
      {works.map((work, index) => (
        <div
          key={index}
          className="flex"
          style={{ flexDirection: isReverse(index) ? "row" : "row-reverse" }}
        >
          <div className="m-2 basis-1/2">
            <div className="h-full rounded-md bg-gray-300 p-2 dark:bg-gray-700">
              <a
                href={work.link}
                target="_blank"
                className="inline-flex items-center space-x-2"
              >
                <div className="relative h-5 w-5">
                  <Image
                    className="rounded-lg object-contain"
                    src={`https://www.google.com/s2/favicons?domain=${work.link}&sz=64`}
                    alt={work.title}
                    fill={true}
                    priority
                  />
                </div>
                <p className="font-semibold underline">{work.title}</p>
              </a>
              <p className="font-extralight">{work.description}</p>
            </div>
          </div>
          <div className="relative basis-1/12">
            <div className="absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2 transform border border-indigo-500"></div>
            <div className="absolute top-7 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-indigo-400 ring-2 ring-indigo-500"></div>
          </div>
          <div className="m-2 basis-1/2">
            <p
              className="py-2 font-light"
              style={{
                textAlign: isReverse(index) ? "left" : "right",
              }}
            >
              {work.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;
