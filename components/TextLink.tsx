import React from "react";

type TextLinkProps = {
  link: string;
  text: string;
};

const TextLink = ({ link, text }: TextLinkProps) => {
  return (
    <a href={link} target="_blank">
      <span className="rounded-md bg-indigo-400/20 px-2 hover:cursor-pointer hover:rounded-xl hover:bg-indigo-500 hover:text-white hover:shadow-xl dark:bg-indigo-200/20 dark:hover:bg-indigo-500">
        {text}
      </span>
    </a>
  );
};

export default TextLink;
