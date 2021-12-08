import React from "react";
import "./Nav.scss";
import SearchBox from "../SearchBox/SearchBox";

const Nav = (prop) => {
  const { searchTerm, rangeSearchOne, rangeSearchTwo, checkbox } = prop;

  // create useState for each search/filter
  // create useEffect to update each state by getting value from the input

  return (
    <div className="nav">
      <SearchBox labelName="Name:" />

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
