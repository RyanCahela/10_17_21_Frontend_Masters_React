import React from "react";
import ReactDOM from "react-dom";
import Pet from "./components/Pet";
import "./style.css";

const App = () => {
  return (
    <div className="stack stack--large">
      <h1>Hello World!!!</h1>
      <Pet name="Luna" animalType="Dog" breed="Havanese" />
      <Pet name="Chelsea" animalType="Dog" breed="Mix" />
      <Pet name="Timmy" animalType="Turtle" breed="Sea Turtle" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
