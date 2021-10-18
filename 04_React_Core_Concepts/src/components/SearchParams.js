import { useState } from "react";

function SearchParams() {
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");

  const ANIMAL = ["bird", "cat", "dog", "rabbit", "reptile"];
  const BREED = ["test"];
  return (
    <div className="search-params">
      <form
        className="flex-col stack stack--small"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
        <label htmlFor="animal">Animal</label>
        <select
          value={selectedAnimal}
          onBlur={(e) => setSelectedAnimal(e.target.value)}
          onChange={(e) => setSelectedAnimal(e.target.value)}
        >
          {ANIMAL.map((animal) => {
            return (
              <option key={animal} value={animal}>
                {animal}
              </option>
            );
          })}
        </select>
        <label htmlFor="breed">Breed</label>
        <select
          value={selectedBreed}
          onBlur={(e) => setSelectedBreed(e.target.value)}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          {BREED.map((breed) => {
            return (
              <option key={breed} value={breed}>
                {breed}
              </option>
            );
          })}
        </select>
        <button typw="submit">Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;
