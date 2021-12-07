import React from "react";
import "./SearchBox.scss";

const SearchBox = (prop) => {
  const { labelName, inputLabel } = prop;
  return (
    <div className="search">
      <label className="search__label" htmlFor={inputLabel}>
        {labelName}
      </label>
      <input className="search__input input" type="text" name={inputLabel} id={inputLabel} />
    </div>
  );
};

export default SearchBox;
