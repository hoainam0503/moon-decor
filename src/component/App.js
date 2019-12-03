import React from "react";
import "./App.css";
import "./css/bootstrap-responsive.css";
import "./css/bootstrap.css";
import "./css/style.css";

import Nav from "./Nav/Nav";
import DieuHuong from "./DieuHuong/DieuHuong";

function App() {
  return (
    <div className="App">
      <Nav />
      <DieuHuong />
    </div>
  );
}

export default App;
