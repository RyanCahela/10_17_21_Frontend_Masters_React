import React from "react";

const Pet = ({ name, animalType, breed }) => {
  return React.createElement("div", { className: "pet stack stack--small" }, [
    React.createElement("h2", {}, name),
    React.createElement("h3", {}, animalType),
    React.createElement("h3", {}, breed),
  ]);
};

export default Pet;
