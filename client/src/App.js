import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Map from "./components/Map";
import Nav from "./components/navBar";
//import data



function App() {
  //use state to center and set the map
  const [center, setCenter] = useState([44.4498, -73.1104]);

  return (
    <>
    {/* header */}
      <h1>Restaurant Finder</h1>
      {/* navigation bar */}
      <Nav />
      {/* BrowserRouter uses HTML5 history API to keep your UI in sync with the URL*/}
      <BrowserRouter>
        <Map center={center} />
        {/* Routes is the container for all of our potential routes */}
        <Routes>
          {/* Route is each individual route; we will utilize the path and element prop. 
 Path reflects the URL path, element is where we render our component */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
