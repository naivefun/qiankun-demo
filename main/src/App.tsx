import React from "react";
import "./App.css";
import { hello, x } from "./fun";

function App() {
  return (
    <div>
      <h1>
        {hello()}:{x}
      </h1>
      <div id="app"></div>
    </div>
  );
}

export default App;
