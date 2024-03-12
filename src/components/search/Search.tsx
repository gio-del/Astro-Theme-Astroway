// TODO: implement fuzzy search with Fuse.js

import React, { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState(false);

  return (
    <div className="self-center rounded-lg mr-4 lg:mr-0">
      <button className="h-[40px] w-[40px]">
        <i
          className="fas fa-search h-4 w-4 hover:text-accent dark:hover:text-dk-accent"
          onClick={() => setSearch(!search)}
        ></i>
      </button>
      <input
        type="text"
        className={`p-2 pl-8 bg-inherit rounded-lg outline-none transition-all duration-500 ${
          search
            ? "outline-secondary dark:outline-dk-secondary w-48"
            : "w-0 outline-transparent"
        }`}
      />
    </div>
  );
}
