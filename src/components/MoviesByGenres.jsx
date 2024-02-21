import React, { useState, useEffect } from "react";
import GetMovies from "../utils/Api-movies-filters";
import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";

function MoviesByGenres({ genresString, releaseYear }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("Genres String:", genresString);
        console.log("Release Year:", releaseYear);
        const data = await GetMovies({ genresString, releaseYear });
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
      <div className="flex justify-center mx-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {results &&
            results.map((result) => (
              <Link to={`/details/${result.id}`} key={result.id}>
                <div className="max-w-xs rounded overflow-hidden shadow-lg">
                  <img
                    className="w-full"
                    src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                    alt="poster"
                  ></img>
                  </div>
                  <div className="px-6 py-2">
                  <p className="text-gray-100 text-base">
                      {formatDate(result.release_date)}
                    </p>
                    <div className="text-gray-100 font-bold text-lg mb-2">{result.title}</div> 
                  </div>
                
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}

export default MoviesByGenres;
