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
      <h2>MovieDetails</h2>
      <p>{results.title}</p>
      <h3>Overview</h3>
      <p>{results.overview}</p>
      {results.genres && (
        <ul>
          Genres:
          {results.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      )}
      <p>Release date: {formatDate(results.release_date)}</p>
      <p>Rating: {formatRating(results.vote_average)}</p>
      <img
        src={`https://image.tmdb.org/t/p/w342/${results.poster_path}`}
        alt="poster"
      ></img>
    </>
  );
}

export default MovieDetails;
