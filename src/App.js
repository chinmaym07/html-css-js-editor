import React from "react";

import "./App.css";
import SplitEditor from "./Components/SplitPaneEditor";


const App = () => {
  return (
    <div className="App">
      <div className="main-head">
        <h1>CodePen using React-Ace</h1>
      </div>
      <SplitEditor />
    </div>
  );
};

export default App;
