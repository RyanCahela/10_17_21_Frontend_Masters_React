import React from "react";
import ReactDOM from "react-dom";

const Pet = ({ name, animalType, breed }) => {
  return React.createElement("div", { className: "pet stack stack--small" }, [
    React.createElement("h2", {}, name),
    React.createElement("h3", {}, animalType),
    React.createElement("h3", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", { className: "stack stack--large" }, [
    React.createElement("h1", {}, "Hello World!!!"),

    React.createElement(Pet, {
      name: "Luna",
      animalType: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Chelsea",
      animalType: "Dog",
      breed: "Mix",
    }),
    React.createElement(Pet, {
      name: "Timmy",
      animalType: "Turtle",
      breed: "Sea Turtle",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
