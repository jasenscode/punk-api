import "./App.scss";
import logo from "./assets/images/brewdog-logo.png";

import { useState, useEffect } from "react";

import MainContainer from "./containers/MainContainer/MainContainer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

const App = () => {
  const [beerArr, setBeerArr] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [checkedClassic, setCheckedClassic] = useState(false);
  const [checkedAbv, setCheckedAbv] = useState(false);
  // const [checkedPh, setCheckedPh] = useState(false);

  useEffect(() => {
    const classic = checkedClassic ? "&brewed_before=01-2011" : "";
    const highAbv = checkedAbv ? "&abv_gt=6" : "";

    const URL = `https://api.punkapi.com/v2/beers?per_page=80${classic}${highAbv}`;
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((beersList) => {
        setBeerArr(beersList);
      });
  }, [checkedClassic, checkedAbv]);

  const handleTextInput = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setTextSearch(inputValue);
  };

  const handleCheckClassic = (event) => {
    setCheckedClassic(event.target.checked);
  };

  const handleCheckAbv = (event) => {
    setCheckedAbv(event.target.checked);
  };

  // const handleCheckPh = (event) => {
  //   setCheckedPh(event.target.checked);
  // };

  const filteredArr = beerArr.filter((beer) => {
    if (textSearch) {
      return beer.name.toLowerCase().includes(textSearch);
    } else return beerArr;
  });

  return (
    <div className="App">
      <header>
        <Header imgSRC={logo} imgText="Brewdog logo" titleText="brewlog" subtitleText="beer browser" />
      </header>

      <main>
        {/* add handleCheckPh={handleCheckedPh once filter works} */}
        <Nav handleTextInput={handleTextInput} handleCheckClassic={handleCheckClassic} handleCheckAbv={handleCheckAbv} />
        <MainContainer beerArr={filteredArr} />
      </main>
    </div>
  );
};

export default App;
