import Fuse from "fuse.js";

import React, { useEffect, useState } from "react";

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
    <div className="flex flex-row self-center rounded-lg mr-4 lg:mr-0">
      <button className="h-[40px] w-[40px]">
        <i
          className={`fas fa-search h-4 w-4 hover:text-accent dark:hover:text-dk-accent ${
            search ? "mr-4" : ""
          }`}
          onClick={() => setSearch(!search)}
        ></i>
      </button>
      <div className="flex flex-col p-2 pl-8">
        <input
          type="text"
          className={`bg-inherit rounded-lg outline-none [transition:opacity_1s,width_1s] ${
            search
              ? "outline-secondary dark:outline-dk-secondary w-48 static opacity-100"
              : "w-0 outline-transparent opacity-0 absolute"
          }`}
          onChange={(e) => query(e.target.value)}
        />
        {searchResults.length > 0 &&
          searchResults.map((result: any, index: number) => (
            <div key={index}>
              <a href={result.item.url}>{result.item.frontmatter.title}</a>
            </div>
          ))}
      </div>
    </div>
  );
}
