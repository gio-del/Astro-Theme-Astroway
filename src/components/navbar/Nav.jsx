import { useEffect, useState } from "react";
import ToggleDarkMode from "../ToggleDarkMode";
import Search from "../search/Search";
import Hamburger from "./Hamburger";
import { info } from "../../data/info";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const extractInitials = (name) => {
    const names = name.split(" ");
    let initials = "";
    names.forEach((name) => {
      initials += name.charAt(0);
    });
    return initials;
  };

  // Handle click outside of the navigation to close the nav if it's open
  useEffect(() => {
    const handleClick = (e) => {
      if (isNavOpen) {
        if (!e.target.closest("nav")) {
          setIsNavOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isNavOpen]);

  return (
    <nav className="w-full top-0 inset-x-0 dark:bg-dk-primary bg-primary z-50">
      <div className="w-full px-6 py-2 flex justify-between items-center">
        <a className="font-bold text-2xl lg:text-4xl" href="/#">
          <span className="text-secondary dark:text-dk-secondary">
            {"</" + extractInitials(info.name) + ">"}
          </span>
        </a>

        {/* Button for CV download */}
        <a
          href={info.cv}
          download
          className="inline-flex items-center px-4 py-2 border-2 rounded text-secondary dark:text-dk-secondary border-secondary dark:border-dk-secondary appearance-none focus:outline-none hover:bg-secondary dark:hover:bg-dk-secondary hover:text-primary dark:hover:text-primary transition duration-300 ease-in-out cursor-pointer"
        >
          <i className="fas fa-download mr-2"></i>
          <span>Download CV</span>
        </a>

        <div className="inline-flex lg:hidden text-secondary dark:text-dk-secondary">
          <Search />
          <Hamburger
            onClick={() => setIsNavOpen(!isNavOpen)}
            isNavOpen={isNavOpen}
          />
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex text-secondary dark:text-dk-secondary text-2xl font-normal">
            <li className="p-4 hover:text-accent dark:hover:text-dk-accent">
              {" "}
              {/* TODO: refactor this to use a map */}
              <a href="/#about">About</a>
            </li>
            <li className="p-4 hover:text-accent dark:hover:text-dk-accent">
              <a href="/#projects">Projects</a>
            </li>
            <li className="p-4 hover:text-accent dark:hover:text-dk-accent">
              <a href="/#contact">Contact</a>
            </li>
            <li className="p-4 hover:text-accent dark:hover:text-dk-accent">
              <a href="/#blog">Blog</a>
            </li>
            <li className="px-4 flex">
              <ToggleDarkMode />
            </li>
            <li className="px-4 flex">
              <Search />
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          !isNavOpen
            ? "hidden"
            : "" +
              "h-full flex flex-col items-center text-center lg:hidden dark:text-tertiary"
        }
      >
        <ul
          className="w-full text-secondary dark:text-dk-secondary text-xl font-semibold"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <li className="p-4">
            {" "}
            {/* TODO: refactor this to use a map */}
            <a href="/#about">About</a>
          </li>
          <li className="p-4">
            <a href="/#projects">Projects</a>
          </li>
          <li className="p-4">
            <a href="/#contact">Contact</a>
          </li>
          <li className="p-4">
            <a href="/#blog">Blog</a>
          </li>
          <li className="p-4">
            <ToggleDarkMode />
          </li>
        </ul>
      </div>
    </nav>
  );
}
