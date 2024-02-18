import React, { useState } from "react";
import { useEffect } from "react";
import GetGenres from "../utils/Api-genres";

function GenresForm({checkedGenre, handleCheckboxChange}) {
  const [genres, setGenres] = useState([]);
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

  return (
    <>
        {genres &&
            genres.map((genres) => (
               
                    <label key={genres.id}>
                        <input
                            type='checkbox'
                            value={genres.id}
                            checked={checkedGenre.includes(`${genres.id}`)}
                            onChange={handleCheckboxChange}
                         />
                         {genres.name}
                    </label>
                
            ))

        }
    </>
  )

}

export default GenresForm;