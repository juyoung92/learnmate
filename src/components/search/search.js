import React from 'react';
import './search.css';

function Search() {
  return (
      <div className="search-box">
        <input type="text" placeholder="과외 선생님 및 과외 받고 싶은 분야를 검색해 주세요." />
        <button className="search-btn">Search</button>
      </div>
  );
}

export default Search;