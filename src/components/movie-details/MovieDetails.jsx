import React, { useEffect, useState } from "react";
import GetMovieDetails from "../../utils/Api-details";
import formatDate from "../../utils/formatDate";
import formatRating from "../../utils/formatRating";
import unavPoster from "../../utils/unavailable-poster";

function MovieDetails({ movieId }) {

  const [results, setResults] = useState({});

  useEffect(() => {
    async function fetchDetails() {
      try {
        const data = await GetMovieDetails(movieId);
        setResults(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetails();
  }, [movieId]);

  return (
    <>  
    <div className="relative">
      <img className="absolute object-cover object-top w-full inset-0 h-[500px] xl:h-[600px] backdrop opacity-50" src={`https://image.tmdb.org/t/p/original/${results.backdrop_path}`}
          alt="backdrop"></img></div>
      <div className="relative z-10 mx-7">    
      <div className="max-w-xl mx-auto mt-96 xl:mt-[400px] my-8 bg-gray-200 rounded overflow-hidden shadow-lg sm:flex">
        <img
          className="w-full sm:w-1/2 sm:h-auto sm:object-cover"
          src={results.poster_path ? `https://image.tmdb.org/t/p/w500/${results.poster_path}` : unavPoster}
          alt="poster"
        ></img>
        <div className="w-full sm:w-1/2 px-6 py-4">
          <div className="font-bold text-xl mb-2">{results.title}</div>
          <p>Release date: {formatDate(results.release_date)}</p>
          <p>Rating: {formatRating(results.vote_average)}</p>
          {results.genres && (
            <div className="px-6 pt-4 pb-2">
              {results.genres.map((genre) => (
                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2" key={genre.id}>{genre.name}</span>
              ))}
            </div>
          )}
          <hr></hr>
          <div className="font-bold mb-1 mt-2">Overview</div>
          <p className="text-gray-700 text-base">{results.overview}</p>
        </div>
      </div>
      </div>
    </>
  );
}

export default MovieDetails;
