import React, { useState } from "react";
import "./Nav.scss";
import SearchBox from "../SearchBox/SearchBox";
import FilterItem from "../FilterItem/FilterItem";

const Nav = () => {
  // create useState for each search/filter
  // create useEffect to update each state by getting value from the input
  const [textSearch, setTextSearch] = useState("");

  const handleTextInput = (event) => {
    setTextSearch(event.target.value.toLowerCase());
  };

  console.log(textSearch);

  return (
    <div className="nav">
      <h3 className="nav__header">Filters</h3>

      <SearchBox labelName="Search By Name:" inputLabel="name-search" handleInput={handleTextInput} />

      <FilterItem labelName="Classic (Created before 2011)" />

      {/* <label className="nav__label" htmlFor={rangeSearchOne}>
        {rangeSearchOne}
        <span>0%</span>
      </label>

      <input className="nav__range-input input" type="range" name={rangeSearchOne} id={rangeSearchOne} />

      <label className="nav__label" htmlFor={rangeSearchTwo}>
        {rangeSearchTwo}
      </label>
      <input className="nav__range-input input" type="range" name={rangeSearchTwo} id={rangeSearchTwo} />

      <label className="nav__label" htmlFor={checkbox}>
        {checkbox}
      </label>
      <input className="nav__checkbox-input input" type="checkbox" name={checkbox} id={checkbox} /> */}
    </div>
  );
};

export default Nav;
