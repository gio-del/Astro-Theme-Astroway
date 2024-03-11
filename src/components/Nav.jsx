import { useEffect, useState } from "react";
import ToggleDarkMode from "./ToggleDarkMode";
import { info } from "../data/info";

export default function NavBar() {
  // TODO: modify the navbar on large screens to be less marginally spaced (horizontal)
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
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
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
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            className="fill-current mr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z" />
            <path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" />
          </svg>
          <span>Download CV</span>
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
            <li className="p-4 hover:text-accent dark:hover:text-dk-accent">
              <a href="/#blog">Blog</a>
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
