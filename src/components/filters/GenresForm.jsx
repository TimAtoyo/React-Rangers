import React, { useState } from "react";
import { useEffect } from "react";
import GetGenres from "../../utils/Api-genres";

function GenresForm({ checkedGenre, handleCheckboxChange }) {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await GetGenres();
        setGenres(data.genres); // Update the state with the fetched genres
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {genres &&
        genres.map((genres) => (
          <label key={genres.id}
            className="checkbox-btn m-1 display: inline-block ">
            <input
              type="checkbox"
              value={genres.id}
              checked={checkedGenre.includes(`${genres.id}`)}
              onChange={handleCheckboxChange}
            />
            <span className="btn-label px-7 py-1 bg-gray-100 rounded hover:bg-blue-300">{genres.name}</span>
          </label>
        ))}
    </>
  );
}

export default GenresForm;
