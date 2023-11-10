// Filter.js
import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    onSearchChange(text); // Propagate the search text change to the parent component
  };

  return (
    <div className="Filter">
      <select name="filter" onChange={onCategoryChange}>
        {/* ... options ... */}
      </select>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Filter;
