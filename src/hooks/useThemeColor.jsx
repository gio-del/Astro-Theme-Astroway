import { useState, useEffect } from "react";

export function useThemeColor(colors) {
  const [themeColor, setThemeColor] = useState(colors[1]); // Default to light mode color

  useEffect(() => {
    const html = document.querySelector("html");

    const handleThemeChange = () => {
      if (html.classList.contains("dark")) {
        setThemeColor(colors[0]); // Dark mode color
      } else {
        setThemeColor(colors[1]); // Light mode color
      }
    };

    handleThemeChange();

    window.addEventListener("themechange", handleThemeChange);

    return () => {
      window.removeEventListener("themechange", handleThemeChange);
    };
  }, []);

  return themeColor;
}
