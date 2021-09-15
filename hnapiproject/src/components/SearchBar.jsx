import React from "react";
import { useHeadingContext } from "../util/context.js";

const SearchBar = () => {
  const { search, setSearch } = useHeadingContext();

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <h2>Search Hacker News</h2>
      <input
        type="text"
        className="form-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
