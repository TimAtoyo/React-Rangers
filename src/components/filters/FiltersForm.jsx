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
    const yearInt = parseInt(year)
    setYearNumber(yearInt);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-8 py-3 form">
        <div className="my-3">
            <label className="text-gray-100 p-1" htmlFor='year'>Year: </label>
            <input
                type='text'
                id='year'
                value={year}
                onChange={handleYearChange}
                className="rounded p-1 bg-gray-100"
            />
        </div>
        <div>
          <GenresForm
            checkedGenre={genreId}
            handleCheckboxChange={handleCheckbox}
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-800 font-bold py-2 px-4 my-3 rounded text-gray-100">Submit</button>
        </div>
      </form>
      <MoviesByGenres genresString={genresString} releaseYear={yearNumber} />
    </div>
  );
}

export default FiltersForm;
