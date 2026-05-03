import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title, category, or description..."
        value={props.searchText}
        onChange={function (e) { props.onSearch(e.target.value); }}
      />
    </div>
  );
}

export default SearchBar;
