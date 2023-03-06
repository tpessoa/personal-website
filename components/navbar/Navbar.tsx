import { useTheme } from "next-themes";
import React, { Fragment, useEffect, useState } from "react";
import {
  MdDarkMode,
  MdLightMode,
  MdOutlineRestaurantMenu,
  MdRestaurantMenu,
} from "react-icons/md";
import NavbarButton from "./NavbarButton";
import { BiCodeAlt } from "react-icons/bi";
import useWindowSize from "@/hooks/useWindownSize";
import { smallScreenMax } from "@/utils/screen";
import { HiOutlineMenu, HiOutlineHome } from "react-icons/hi";
import { BsPersonBadge } from "react-icons/bs";
import { Menu, Switch, Transition } from "@headlessui/react";
import clsx from "clsx";
import { useRouter } from "next/router";
import Head from "next/head";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { width } = useWindowSize();
  const router = useRouter();
  const barMenu = smallScreenMax > width;
  const isDarkModeEnable: boolean = theme === "dark";

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  if (barMenu) {
    return (
      <>
        <Head>
          <title>Tiago Pessoa</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="relative z-50 flex w-full justify-between px-4 pt-4">
          <Menu as="div" className="inline-block ">
            <Menu.Button className="inline-flex w-full justify-center rounded-md  text-sm font-medium text-white hover:bg-black/20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <HiOutlineMenu
                className="h-8 w-8 text-black dark:text-white"
                aria-hidden="true"
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-2 w-56 space-y-2 rounded-md bg-gray-100 p-2 shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-gray-800 dark:text-white">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      onClick={() => router.push("/")}
                      className={clsx(
                        "flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white",
                        active ? "bg-indigo-400 text-white" : "text-gray-900"
                      )}
                    >
                      <HiOutlineHome
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      Home
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      onClick={() => router.push("/projects")}
                      className={clsx(
                        "flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white",
                        active ? "bg-indigo-400 text-white" : "text-gray-900"
                      )}
                    >
                      <BiCodeAlt className="mr-2 h-5 w-5" aria-hidden="true" />
                      Projects
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="My_CV.pdf"
                      target="_blank"
                      className={clsx(
                        "flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white",
                        active ? "bg-indigo-400 text-white" : "text-gray-900"
                      )}
                    >
                      <BsPersonBadge
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      Resume
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <button onClick={toggleTheme}>
            <div className="flex w-6 items-center text-neutral-600 dark:text-neutral-100">
              {theme === "light" ? (
                <MdDarkMode className="h-full w-full" />
              ) : (
                <MdLightMode className="h-full w-full" />
              )}
            </div>
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Tiago Pessoa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed top-0 z-50 flex w-full justify-center backdrop-blur-sm">
        <div className="flex w-full max-w-7xl items-center justify-between px-14 py-4 text-xl ">
          <NavbarButton label={"Home"} link={"/"} />
          <div className="inline-flex justify-end space-x-8">
            <NavbarButton label={"Projects"} link={"/projects"} />
            <a href="My_CV.pdf" target="_blank">
              Resume
            </a>

            <div className="flex items-center bg-transparent">
              <button onClick={toggleTheme}>
                <div className="h-5 w-5 text-neutral-600 dark:text-neutral-100">
                  {theme === "light" ? (
                    <MdDarkMode className="h-full w-full outline-none" />
                  ) : (
                    <MdLightMode className="h-full w-full" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
