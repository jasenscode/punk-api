import React from "react";
import "./FilterItem.scss";

const FilterItem = (props) => {
  const { labelName, inputLabel, inputId, handleChecked } = props;
  return (
    <div className="check-filter">
      <label className="check-filter__label" htmlFor={inputLabel}>
        {labelName}
      </label>
      <input onClick={handleChecked} className="check-filter__box" type="checkbox" name={inputLabel} id={inputId} />
    </div>
  );
};

export default FilterItem;
