import React, { useState } from "react";
import { useEffect } from "react";
import GetGenres from "../utils/Api-genres";

function Genres() {
  const [genres, setGenres] = useState([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await GetGenres();
        console.log(data);
        setGenres(data.genres); // Update the state with the fetched genres
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error
      }
    }

    fetchData();
  }, []);

  function addGenre(categories) {
    setValue([...value, categories]);
    setGenres(genres.filter((g) => g.id !== categories.id));
  }

  function removeGenre(categories) {
    setValue(value.filter((g) => g.id !== categories.id));
    setGenres([...genres, categories]);
  }

  return (
    // return buttons with genre name
    <div>
      <h2>Movie Genres</h2>
      {value &&
        value.map((val) => (
          <button
            key={val.id}
            onClick={() => removeGenre(val)}
            className="text-white bg-purple-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 m-2"
          >
            {val.name}
          </button>
        ))}
      {genres.length == 0 && <p>No genres</p>}
      {genres &&
        genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => addGenre(genre)}
            className="text-white bg-blue-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 m-2"
          >
            {genre.name}
          </button>
        ))}
    </div>
  );
}

export default Genres;
