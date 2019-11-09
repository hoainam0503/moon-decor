import React from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import DieuHuong from "./DieuHuong/DieuHuong";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Home /> */}
      <DieuHuong />
    </div>
  );
}

export default App;
