import React from "react";
import "./FilterItem.scss";

const FilterItem = (props) => {
  const { labelName, inputLabel } = props;
  return (
    <div>
      <label className="search__label" htmlFor={inputLabel}>
        {labelName}
      </label>
      <input type="checkbox" name={inputLabel} />
    </div>
  );
};

export default FilterItem;
