import { useEffect, useState } from "react";

export default function TopButton() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed right-4 bottom-4 lg:right-8 lg:bottom-8 z-50 p-2 rounded-full bg-transparent text-secondary dark:text-dk-secondary lg:hover:text-accent lg:dark:hover:text-dk-accent ${
        isTop ? "hidden" : ""
      }`}
      onClick={handleTop}
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up text-3xl lg:text-5xl"></i>
    </button>
  );
}
