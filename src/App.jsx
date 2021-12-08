import "./App.scss";
import logo from "./assets/images/brewdog-logo.png";

import { useState, useEffect } from "react";

import NavContainer from "./containers/NavContainer/NavContainer";
import MainContainer from "./containers/MainContainer/MainContainer";
import Header from "./components/Header/Header";

const App = () => {
  const [beerArr, setBeerArr] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => {
        return response.json();
      })
      .then((beersList) => {
        setBeerArr(beersList);
      });
  }, []);

  return (
    <div className="App">
      <Header imgSRC={logo} imgText="Brewdog logo" titleText="brewlog" subtitleText="beer browser" />
      <NavContainer />
      <MainContainer beerArr={beerArr} />
    </div>
  );
};

export default App;
