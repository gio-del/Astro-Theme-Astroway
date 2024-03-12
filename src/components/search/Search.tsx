// TODO: implement fuzzy search with Fuse.js
// TODO: fix invisible width of search input

import React, { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState(false);

  return (
    <div className="self-center rounded-lg mr-4 lg:mr-0">
      <button className="h-[40px] w-[40px]">
        <i
          className={`fas fa-search h-4 w-4 hover:text-accent dark:hover:text-dk-accent ${
            search ? "mr-4" : ""
          }`}
          onClick={() => setSearch(!search)}
        ></i>
      </button>
      <input
        type="text"
        className={`p-2 pl-8 bg-inherit rounded-lg outline-none [transition:opacity_1s,width_1s] ${
          search
            ? "outline-secondary dark:outline-dk-secondary w-48 static opacity-100"
            : "w-0 outline-transparent opacity-0 absolute"
        }`}
      />
    </div>
  );
}
