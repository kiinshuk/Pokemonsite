import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Pokemon..."
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
    );
  };
export default SearchBar;
