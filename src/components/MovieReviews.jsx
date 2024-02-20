import React, { useEffect, useState } from "react";
import GetMovieReviews from "../utils/Api-reviews";
import formatDate from "../utils/formatDate";

function MovieReviews({ movieId }) {

  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await GetMovieReviews(movieId);
        console.log(data);
        setResults(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
    console.log(results);
  }, [movieId]);

  return (
    <>
      <h2>MovieReviews</h2>
      {results &&
        results.map((result) => (
          <div key={result.id}>
            <h2>Author: {result.author}</h2>
            <div dangerouslySetInnerHTML={{ __html: result.content }} />
            <p>{formatDate(result.created_at)}</p>
            <br></br>
            <hr></hr>
            <br></br>
          </div>
        ))}
    </>
  );
}

export default MovieReviews;
