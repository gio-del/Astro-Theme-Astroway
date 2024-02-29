import { useEffect, useState } from "react";
import ToggleDarkMode from "./ToggleDarkMode";
import { info } from "../data/info";

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
    <nav className="absolute w-full top-0 inset-x-0 dark:bg-dk-primary bg-primary z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a className="font-bold text-2xl lg:text-4xl" href="/#">
          <span className="text-secondary dark:text-dk-secondary">
            {"</" + extractInitials(info.name) + ">"}
          </span>
        </a>
        <div className="inline-flex lg:hidden">
          <button
            className="flex items-center justify-center px-3 py-2 border-2 rounded text-secondary dark:text-dk-secondary border-secondary dark:border-dk-secondary appearance-none focus:outline-none"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <svg
              strokeWidth={2}
              style={{ stroke: "currentColor" }}
              className={isNavOpen ? "hidden" : "" + " fill-current h-4 w-4"}
              viewBox="0 0 45 45"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
            </svg>
            <svg
              strokeWidth={2}
              style={{ stroke: "currentColor" }}
              className={!isNavOpen ? "hidden" : "" + " fill-current h-4 w-4"}
              viewBox="0 0 45 45"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Close</title>
              <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex text-secondary dark:text-dk-secondary text-2xl font-normal">
            <li className="p-4 hover:text-accent dark:hover:text-dk-accent">
              <a href="/#about">About</a>
            </li>
            <li className="p-4 hover:text-accent dark:hover:text-dk-accent">
              <a href="/#projects">Projects</a>
            </li>
            <li className="p-4 hover:text-accent dark:hover:text-dk-accent">
              <a href="/#contact">Contact</a>
            </li>
            <li className="px-4 flex">
              <ToggleDarkMode />
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
            <a href="/#about">About</a>
          </li>
          <li className="p-4">
            <a href="/#projects">Projects</a>
          </li>
          <li className="p-4">
            <a href="/#contact">Contact</a>
          </li>
          <li className="p-4">
            <ToggleDarkMode />
          </li>
        </ul>
      </div>
    </nav>
  );
}
