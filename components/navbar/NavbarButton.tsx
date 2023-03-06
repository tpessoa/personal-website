import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

type NavbarButtonProps = {
  label: string;
  link: string;
};

const NavbarButton = ({ label, link }: NavbarButtonProps) => {
  const router = useRouter();
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    setIsButtonActive(router.route === link);
  }, [link, router.route]);

  return (
    <Link className="relative focus:outline-none" href={link}>
      {label}
      {isButtonActive && (
        <div className="mt-[2px] h-[2px] rounded-lg bg-indigo-400"></div>
      )}
    </Link>
  );
};

export default NavbarButton;
