import "./App.scss";
import beerData from "./data/beerData";

import NavContainer from "./containers/NavContainer/NavContainer";
import MainContainer from "./containers/MainContainer/MainContainer";
import Card from "./components/Card/Card";

import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="App">
      <NavContainer />
      <MainContainer beerArr={beerData} />
    </div>
  );
};

export default App;
