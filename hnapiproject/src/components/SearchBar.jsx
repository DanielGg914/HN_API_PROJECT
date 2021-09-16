import React from "react";
import { useHeadingContext } from "../util/context.js";

const SearchBar = () => {
  const { query, handleSearch, nbPages, page, handlePage } = useHeadingContext();

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <div className="search">
      <h2>Search Hacker News</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
      </div>

      <div className="info">
        <button className="prev-page">Prev Page</button>


        <h3 className="page-num">
          {page} of {nbPages}
        </h3>


        <button disabled={loading} onClick={()=> handlePage('inc')} className="next-page">Next Page</button>
        <p></p>
      </div>
    </form>
  );
};

export default SearchBar;
