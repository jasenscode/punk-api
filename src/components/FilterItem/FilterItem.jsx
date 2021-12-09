import React from "react";
import "./FilterItem.scss";

const FilterItem = (props) => {
  const { labelName, inputLabel } = props;
  return (
    <div className="check-filter">
      <label className="check-filter__label" htmlFor={inputLabel}>
        {labelName}
      </label>
      <input className="check-filter__box" type="checkbox" name={inputLabel} />
    </div>
  );
};

export default FilterItem;
