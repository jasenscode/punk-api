import "./App.scss";
import logo from "./assets/images/brewdog-logo.png";

import { useState, useEffect } from "react";

import MainContainer from "./containers/MainContainer/MainContainer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

const App = () => {
  const [beerArr, setBeerArr] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => {
        return response.json();
      })
      .then((beersList) => {
        setBeerArr(beersList);
      });
  }, []);

  const handleTextInput = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setTextSearch(inputValue);
  };

  const handleCheckInput = (event) => {
    setChecked(event.target.checked);
  };

  const filteredArr = beerArr.filter((beer) => {
    if (checked) {
      return parseInt(beer.first_brewed.slice(5, 7)) < 11;
    } else if (!checked) {
      return beer.name.toLowerCase().includes(textSearch);
    }
  });

  return (
    <div className="App">
      <header>
        <Header imgSRC={logo} imgText="Brewdog logo" titleText="brewlog" subtitleText="beer browser" />
      </header>

      <main>
        <Nav handleTextInput={handleTextInput} textSearch={textSearch} handleCheckInput={handleCheckInput} />
        <MainContainer beerArr={filteredArr} />
      </main>
    </div>
  );
};

export default App;
