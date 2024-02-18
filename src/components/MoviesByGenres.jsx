import React, { useState, useEffect } from "react";
import GetMovies from "../utils/Api-movies-filters";
// import Genres from "./Genres";

function MoviesByGenres({ genresString, releaseYear }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("Genres String:", genresString);
        console.log("Release Year:", releaseYear);
        const data = await GetMovies({genresString, releaseYear});
        console.log(data);
        setResults(data.results); // Update the state with the fetched genres
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error
      }
    }

    fetchData();
  }, [genresString, releaseYear]);

  return (
    <>
      {/* <Genres /> */}
      <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {results &&
          results.map((result) => (
            <div key={result.id} className="max-w-xs rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                alt="poster"
              ></img>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{result.title}</div>
                <p className="text-gray-700 text-base">{result.release_date}</p>
              </div>
            </div>
          ))}
      </div>
      </div>
    </>
  );
}

export default MoviesByGenres;
