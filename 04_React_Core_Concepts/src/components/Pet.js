const Pet = ({ name, animalType, breed }) => {
  return (
    <div className="pet stack stack--small">
      <h2>{name}</h2>
      <h3>{animalType}</h3>
      <h3>{breed}</h3>
    </div>
  );
};

export default Pet;
