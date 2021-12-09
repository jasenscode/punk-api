import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const { labelName, inputLabel, handleInput } = props;
  return (
    <div className="search">
      <label className="search__label" htmlFor={inputLabel}>
        {labelName}
      </label>
      <input onInput={handleInput} className="search__input input" type="text" name={inputLabel} placeholder="Type here ..." />
    </div>
  );
};

export default SearchBox;
