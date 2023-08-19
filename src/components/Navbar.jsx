import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks, socials } from "../constants";
import { menu, close } from "../assets";
import Mail from "../assets/icons/mail";

const genericHamburgerLine = `block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`;

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.navPadding
      } w-full h-16 flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="/rishav_website_favicon.svg"
            alt="logo"
            className="w-9 h-9 object-contain"
          />
          <p className="text-black text-[18px] font-bold cursor-pointer flex ">
            Rishav &nbsp;
            <span className="sm:block hidden"> | Nandi</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-black" : "text-secondary"
              } hover:text-black text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden justify-end items-center">
          <button
            className="flex flex-col h-12 w-12 rounded justify-center items-center group"
            onClick={() => setToggle(!toggle)}
          >
            <div
              className={`${genericHamburgerLine} ${
                toggle ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${toggle ? "opacity-0" : ""}`}
            />
            <div
              className={`${genericHamburgerLine} ${
                toggle ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>

          <div
            className={`${
              !toggle ? "translate-x-[120%] " : ""
            } p-6 bg-white bg-opacity-95 backdrop-blur-sm transition-all duration-500  fixed top-0 left-0 z-30 w-full h-full flex flex-col shadow-2xl md:hidden `}
          >
            <div
              className="h-10 w-full  flex justify-end items-start px-5 hover:text-blue-500 cursor-pointer"
              onClick={() => setToggle((old) => !old)}
            >
              <img src={close} alt="close" srcSet={close} />
            </div>
            <div className="flex-grow flex gap-10 flex-col justify-center px-5">
              <ul className="list-none font-poppins flex flex-col gap-8 items-center w-full">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`text-2xl hover:text-blue-500 font-medium cursor-pointer `}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center gap-8">
                {socials.map((ele, i) => (
                  <a
                    key={i}
                    target="_blank"
                    href={ele.socialLink}
                    className="transition-all text-slate-800 hover:text-blue-400 "
                  >
                    {<ele.icon />}
                  </a>
                ))}
              </div>
              <div className="flex gap-y-4 gap-x-8 sm:flex-row justify-center flex-col border-t py-10">
                <a
                  target="_blank"
                  href="mailto:rishavnandi06@gmail.com"
                  className="inline-flex justify-center items-center gap-2 border border-blue-300 px-10 py-4 font-roboto rounded hover:shadow-lg hover:shadow-blue-200 transition-all hover:-translate-y-1"
                >
                  <Mail />
                  Say Hello
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
