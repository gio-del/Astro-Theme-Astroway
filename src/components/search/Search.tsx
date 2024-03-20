import Fuse from "fuse.js";

import React, { useEffect, useState } from "react";
import Modal from "react-modal";

export default function Search({ posts }: any) {
  const [search, setSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

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

  return (
    <div className="self-center">
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
            placeholder="Search"
            required
            onChange={(e) => query(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-4 mt-4">
          {searchResults.map((result, index) => (
            <a
              href={result.item.url}
              key={index}
              className="text-2xl font-semibold text-text dark:text-dk-text"
            >
              {result.item.frontmatter.title}
            </a>
          ))}
        </div>
      </Modal>
      <i
        className="fa fa-search self-center cursor-pointer hover:text-accent dark:hover:text-dk-accent text-2xl"
        onClick={() => setSearch(true)}
      ></i>
    </div>
  );
}
