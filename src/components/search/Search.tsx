import Fuse from "fuse.js";

import React, { useEffect, useState } from "react";
import Modal from "react-modal";

export default function Search({ posts }: any) {
  const [search, setSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  const fuse = new Fuse(posts, {
    keys: ["frontmatter.title", "frontmatter.description"],
  });

  const query = (query: string) => {
    if (!query || query === "") {
      setSearchResults([]);
    }

    const res = fuse.search(query);
    setSearchResults(res);
  };

  // handle keyboard navigation
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (!search) return;

      if (e.key === "Escape") {
        e.preventDefault();
        setSearch(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (selected < searchResults.length - 1) {
          setSelected(selected + 1);
        } else {
          setSelected(0);
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (selected > 0) {
          setSelected(selected - 1);
        } else {
          setSelected(searchResults.length - 1);
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        window.location = searchResults[selected].item.url;
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  });

  return (
    <div className="self-center">
      <button onClick={() => setSearch(true)} aria-label="Search">
        <i
          className="fa fa-search self-center hover:text-accent dark:hover:text-dk-accent text-2xl"
          onClick={() => setSearch(true)}
        ></i>
      </button>

      <Modal
        isOpen={search}
        onRequestClose={() => setSearch(false)}
        contentLabel="Search"
        className="relative mx-auto my-auto top-1/2 transform -translate-y-1/2 w-5/6 h-1/2 lg:w-1/2 bg-primary dark:bg-dk-primary rounded-2xl p-4 flex flex-col border-2 border-secondary dark:border-dk-secondary"
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 backdrop-filter backdrop-blur-sm z-50"
      >
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <i className="fa fa-search text-gray-400 dark:text-gray-300"></i>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 rounded-lg text-text dark:text-dk-text bg-primary dark:bg-dk-primary focus:outline-none ring-2 focus:ring-accent dark:focus:ring-dk-accent focus:ring-opacity-50 ring-secondary dark:ring-dk-secondary"
            placeholder="Search ('&uarr;' and '&darr;' to navigate, 'Esc' to close, 'Enter' to select)"
            autoFocus
            aria-label="Input search query"
            onChange={(e) => query(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-4 mt-4">
          <ul className="flex flex-col space-y-2">
            {searchResults.map((result: any, index: number) => (
              <li
                key={result.item.frontmatter.title}
                className="p-2 rounded-lg cursor-pointer flex flex-row justify-between items-center"
                onMouseEnter={() => setSelected(index)}
              >
                <a
                  href={result.item.url}
                  className="block"
                  onClick={() => setSearch(false)}
                >
                  <h3 className="text-xl font-bold text-text dark:text-dk-text">
                    {result.item.frontmatter.title}
                  </h3>
                  <p className="text-text dark:text-dk-text">
                    {result.item.frontmatter.description}
                  </p>
                </a>
                {selected === index && (
                  <i className="fa fa-arrow-left text-accent dark:text-dk-accent text-2xl"></i>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
  );
}
