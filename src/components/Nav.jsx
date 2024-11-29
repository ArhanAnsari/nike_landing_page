"use client";

import { headerLogo } from "../assets/images";
import { hamburger, close, cart } from "../assets/icons";
import { navLinks } from "../constants";
import React, { useState } from "react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

import { IoMoon, IoSunny } from "react-icons/io5";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.600", "gray.300");

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  React.useEffect(() => {
    console.log("Color mode changed:", colorMode);
  }, [colorMode]);

  const handleToggle = () => {
    console.log("Toggle button clicked");
    toggleColorMode();
  };

  return (
    <header className={`padding-x py-8 absolute z-10 w-full bg-${bg}`}>
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:font-bold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="justify-center items-center px-6">
          <div
            className="justify-center items-center w-[10px] h-[30px] cursor-pointer rounded-xl sm:px-1 md:px-2"
            onClick={handleToggle}
          >
            {colorMode === "light" ? (
              <IoMoon className="text-2xl" />
            ) : (
              <IoSunny className="text-2xl" />
            )}
          </div>
        </div>

        <div className="flex px-6 gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>

        <div className="hidden max-lg:block">
          <img
            src={toggle ? close : hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className="inline-block object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-20 rounded-xl`}
          >
            <ul className="list-none bg-white flex justify-end items-start flex-col gap-5 rounded-lg shadow-md padding-x">
              {navLinks.map((link) => (
                <li
                  href={link.href}
                  key={link.id}
                  className={`${
                    active === link.label ? "text-black" : "text-gray-500"
                  } regular - 16 text-gray-50
                    flexCenter cursor-pointer pb-1.5 transition - all hover:font-bold`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.label);
                  }}
                >
                  <a
                    href={link.href}
                    className="font-montserrat leading-normal text-lg
                    text-slate-gray"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
