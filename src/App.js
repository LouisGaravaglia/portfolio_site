import React from 'react';
import './App.css';
import PortfolioContainer from "./components/PortfolioContainer";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="App">
      <Navbar />
      <PortfolioContainer />
    </div>
  );
};

export default App;