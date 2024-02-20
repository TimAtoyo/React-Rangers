import React, { useState } from "react";
import GenresForm from "./GenresForm";
import MoviesByGenres from "./MoviesByGenres";

function FiltersForm() {
  const [year, setYear] = useState('');
  const [yearNumber, setYearNumber] = useState();
  const [genreId, setGenreId] = useState([]);
  const [genresString, setGenresString] = useState("");

  const handleYearChange = (event) => {
    setYear(event.target.value);
  }

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
    const yearInt = parseInt(year)
    setYearNumber(yearInt);
    console.log(yearInt);
  };

  return (
    <div>
      <h2>Filters</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='year'>Year:</label>
            <input
                type='text'
                id='year'
                value={year}
                onChange={handleYearChange}
            />
        </div>
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
      <MoviesByGenres genresString={genresString} releaseYear={yearNumber} />
 
    </div>
  );
}

export default FiltersForm;
