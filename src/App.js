import React from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";

import WeatherWrapper from "./components/WeatherWrapper/WeatherWrapper";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <WeatherWrapper />
    </div>
  );
}

export default App;
