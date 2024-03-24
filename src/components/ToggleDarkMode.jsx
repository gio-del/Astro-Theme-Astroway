import { useEffect, useState } from "react";

export default function DarkModeUtility() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) setTheme(localTheme);
    else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      setTheme("dark");
    else setTheme("light");
  }, []);

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") element.classList.add("dark");
    else element.classList.remove("dark");
  }, [theme]);

  const handleThemeMode = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");

    if (
      window.localStorage.getItem("theme") === null ||
      window.localStorage.getItem("theme") === "dark"
    )
      window.localStorage.setItem("theme", "light", {
        sameSite: "strict",
        secure: true,
      });
    else
      window.localStorage.setItem("theme", "dark", {
        sameSite: "strict",
        secure: true,
      });
    window.dispatchEvent(new Event("storage"));
    setTheme(window.localStorage.getItem("theme"));
    window.dispatchEvent(new Event("themechange"));
  };

  return (
    <button
      className="self-center"
      onClick={handleThemeMode}
      alt={`Change theme to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-label="Toggle dark mode"
    >
      <span className="dark:hidden">
        <svg
          className="fill-secondary hover:fill-accent stroke-2"
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          width="40"
        >
          <path d="M20 24.875q2.042 0 3.479-1.417 1.438-1.416 1.438-3.458 0-2.042-1.438-3.479-1.437-1.438-3.479-1.438t-3.458 1.438Q15.125 17.958 15.125 20t1.417 3.458q1.416 1.417 3.458 1.417ZM20 27q-2.958 0-4.979-2.021T13 20q0-2.958 2.021-5T20 12.958q2.958 0 5 2.042t2.042 5q0 2.958-2.042 4.979T20 27ZM3.208 21.042q-.416 0-.729-.313-.312-.312-.312-.729t.312-.75q.313-.333.729-.333h4.417q.458 0 .771.333.312.333.312.75t-.312.729q-.313.313-.771.313Zm29.167 0q-.417 0-.729-.313-.313-.312-.313-.729t.313-.75q.312-.333.729-.333h4.417q.458 0 .77.333.313.333.313.75t-.313.729q-.312.313-.77.313ZM20 8.667q-.417 0-.729-.313-.313-.312-.313-.729V3.208q0-.458.313-.77.312-.313.729-.313t.75.313q.333.312.333.77v4.417q0 .417-.333.729-.333.313-.75.313Zm0 29.166q-.417 0-.729-.312-.313-.313-.313-.729v-4.417q0-.458.313-.771.312-.312.729-.312t.75.312q.333.313.333.771v4.417q0 .416-.333.729-.333.312-.75.312Zm-9.458-25.875-2.584-2.5q-.291-.333-.312-.75-.021-.416.312-.791.334-.292.73-.292.395 0 .812.333L12 10.5q.333.333.333.75t-.291.708q-.292.375-.73.375-.437 0-.77-.375Zm20 20.084L28 29.5q-.333-.333-.312-.729.02-.396.354-.771.25-.333.666-.312.417.02.792.312l2.542 2.5q.291.375.312.792.021.416-.312.75-.334.333-.73.333-.395 0-.77-.333ZM28 12q-.333-.292-.312-.708.02-.417.354-.792l2.5-2.542q.333-.291.75-.312.416-.021.791.312.292.334.292.73 0 .395-.333.77L29.5 12q-.333.333-.75.333T28 12ZM7.958 32.042q-.333-.334-.333-.73 0-.395.333-.812L10.5 28q.333-.333.729-.333.396 0 .771.333.292.292.271.708-.021.417-.271.75l-2.5 2.584q-.417.333-.812.354-.396.021-.73-.354ZM20 20Z" />
        </svg>
      </span>
      <span className="hidden dark:inline">
        <svg
          className="fill-dk-secondary hover:fill-dk-accent stroke-2"
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          width="40"
        >
          <path d="M20.083 33.667q-5.666 0-9.666-4t-4-9.667q0-3.583 1.562-6.729 1.563-3.146 4.979-5.438 2.042-.916 3.125-.125 1.084.792.834 3.125.166.292.271.542.104.25.104.458 0 4.542 3.229 7.75 3.229 3.209 7.812 3.209.542 0 .834.062.291.063.583.396 2.417-.125 2.938 1.062.52 1.188-.355 2.896-2.166 2.875-5.291 4.667-3.125 1.792-6.959 1.792Zm0-2.125q3.5 0 6.396-1.959 2.896-1.958 4.146-4.958-.5.125-1.125.208-.625.084-1.125.084-5.5 0-9.354-3.813-3.854-3.812-3.854-9.271 0-.625.083-1.208t.292-1.208q-3.167 1.375-5.084 4.25Q8.542 16.542 8.542 20q0 4.833 3.375 8.188 3.375 3.354 8.166 3.354Zm-.5-11.042Z" />
        </svg>
      </span>
    </button>
  );
}
