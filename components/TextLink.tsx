import React from "react";

type TextLinkProps = {
  link: string;
  text: string;
};

const TextLink = ({ link, text }: TextLinkProps) => {
  return (
    <a href={link} target="_blank">
      <span className="px-2 hover:cursor-pointer hover:rounded-xl hover:bg-gray-600 hover:text-white hover:shadow-xl dark:hover:bg-blue-300 dark:hover:text-gray-800">
        {text}
      </span>
    </a>
  );
};

export default TextLink;
