import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetMovieDetails from "../utils/Api-details";
import formatDate from "../utils/formatDate";
import formatRating from "../utils/formatRating";

function MovieDetails({ movieId }) {
  // const {id} = useParams();
  // console.log(id);

  const [results, setResults] = useState({});

  useEffect(() => {
    async function fetchDetails() {
      try {
        const data = await GetMovieDetails(movieId);
        console.log(data);
        setResults(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetails();
    console.log(results);
  }, [movieId]);

  return (
    <>
    
    <div className="relative">
      <img className="absolute inset-0 backdrop opacity-50" src={`https://image.tmdb.org/t/p/original/${results.backdrop_path}`}
          alt="poster"></img></div>
      <div className="relative z-10">    
      <div className="max-w-xl mx-auto mt-64 my-8 bg-gray-200 rounded overflow-hidden shadow-lg sm:flex">
        <img
          className="w-full sm:w-1/2 sm:h-auto sm:object-cover"
          src={`https://image.tmdb.org/t/p/w342/${results.poster_path}`}
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
          <p class="text-gray-700 text-base">{results.overview}</p>
        </div>
      </div>
      </div>
    </>
  );
}

export default MovieDetails;
