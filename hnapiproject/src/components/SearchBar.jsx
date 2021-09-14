import React from "react";
import { useHeadingContext } from "../util/context.js";

const SearchBar = () => {
  const { query, setQuery, } = useHeadingContext();

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <h2>Search Hacker News</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* {error.show &&  */}
      {/* <div className="error">
          {error.msg}

      </div>} */}
    </form>
  );
};

export default SearchBar;
