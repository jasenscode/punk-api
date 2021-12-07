import "./App.scss";
import beerData from "./data/beerData";
import logo from "./assets/images/brewdog-logo.png";

import NavContainer from "./containers/NavContainer/NavContainer";
import MainContainer from "./containers/MainContainer/MainContainer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="App">
      <Header imgSRC={logo} imgText="Brewdog logo" titleText="brewlog" subtitleText="beer browser" />
      <NavContainer />
      <MainContainer beerArr={beerData} />
    </div>
  );
};

export default App;
