import React from "react";
import "./Nav.scss";
import SearchBox from "../SearchBox/SearchBox";
import FilterItem from "../FilterItem/FilterItem";

const Nav = (props) => {
  const { handleTextInput } = props;
  // create useState for each search/filter
  // create useEffect to update each state by getting value from the input

  return (
    <div className="nav">
      <h3 className="nav__header">Filters</h3>

      <SearchBox labelName="Search By Name:" inputLabel="name-search" handleInput={handleTextInput} />

      <FilterItem labelName="Classic (Created before 2011)" />
    </div>
  );
};

export default Nav;
