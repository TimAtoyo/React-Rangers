import React, { useState } from "react";
import GenresForm from "./GenresForm";
import MoviesByGenres from "./MoviesByGenres";

function FiltersForm() {
  const [genreId, setGenreId] = useState([]);
  const [genresString, setGenresString] = useState("");

  const handleCheckbox = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setGenreId([...genreId, value]);
    } else {
      setGenreId(genreId.filter((categ) => categ !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const genreIdStr = genreId.join(",");
    setGenresString(genreIdStr);
    console.log(genreIdStr);
  };

  return (
    <div>
      <h2>Filters</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <GenresForm
            checkedGenre={genreId}
            handleCheckboxChange={handleCheckbox}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {genresString && <MoviesByGenres genresString={genresString} />}
    </div>
  );
}

export default FiltersForm;
