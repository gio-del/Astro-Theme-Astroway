import { useEffect } from "react";

interface HamburgerProps {
  onClick: () => void;
  isNavOpen: boolean;
}

export default function Hamburger({ onClick, isNavOpen }: HamburgerProps) {
  useEffect(() => {
    console.log("Hamburger.tsx");
    console.log("onClick: ", onClick);
    console.log("isNavOpen: ", isNavOpen);
  }, []);

  return (
    <button
      className="flex items-center justify-center px-3 py-2 border-2 rounded border-secondary dark:border-dk-secondary appearance-none focus:outline-none"
      onClick={onClick}
    >
      <i
        className={
          isNavOpen
            ? "fas fa-times fill-current h-4 w-4"
            : "fas fa-bars fill-current h-4 w-4"
        }
      ></i>
    </button>
  );
}
