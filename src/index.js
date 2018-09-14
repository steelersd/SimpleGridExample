import React from "react";
import ReactDOM from "react-dom";
import GridContainer from './GridContainer'

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Simple Grid Example</h1>
      <h2>Can update state to change columns and box counts</h2>
      <GridContainer >
        <div></div>
      </GridContainer>     
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
