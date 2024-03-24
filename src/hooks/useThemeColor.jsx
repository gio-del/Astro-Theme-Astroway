import { useState, useEffect } from "react";

// Custom hook to manage theme color
export function useThemeColor(colors) {
  const [themeColor, setThemeColor] = useState(colors[1]); // Default to light mode color

  useEffect(() => {
    const html = document.querySelector("html");

    // Function to handle theme change
    const handleThemeChange = () => {
      if (html.classList.contains("dark")) {
        setThemeColor(colors[0]); // Dark mode color
      } else {
        setThemeColor(colors[1]); // Light mode color
      }
    };

    // Initial call to set the initial theme color
    handleThemeChange();

    // Event listener for manual theme change
    window.addEventListener("themechange", handleThemeChange);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("themechange", handleThemeChange);
    };
  }, []);

  return themeColor;
}
