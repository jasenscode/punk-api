import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const { labelName, inputLabel, searchTerm } = props;
  return (
    <div className="search">
      <label className="search__label" htmlFor={inputLabel}>
        {labelName}
      </label>
      <input className="search__input input" type="text" name={inputLabel} value={searchTerm} />
    </div>
  );
};

export default SearchBox;
