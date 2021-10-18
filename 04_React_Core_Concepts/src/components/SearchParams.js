import { useState } from "react";

function SearchParams() {
  const [searchLocation, setSearchLocation] = useState("");
  return (
    <div className="search-params">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
        <button typw="submit">Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;
