import "./App.scss";
import logo from "./assets/images/brewdog-logo.png";

import { useState, useEffect } from "react";

import MainContainer from "./containers/MainContainer/MainContainer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

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
      <header>
        <Header imgSRC={logo} imgText="Brewdog logo" titleText="brewlog" subtitleText="beer browser" />
      </header>

      <main>
        <Nav />
        <MainContainer beerArr={beerArr} />
      </main>
    </div>
  );
};

export default App;
