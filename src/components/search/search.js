import React from 'react';
import './search.css';

function Search() {
  return (
      <div className="search-box">
        <input type="text" placeholder="Search for a teacher..." />
        <button className="search-btn">Search</button>
      </div>
  );
}

export default Search;