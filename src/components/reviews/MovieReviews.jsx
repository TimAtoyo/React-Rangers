import React, { useEffect, useState } from "react";
import GetMovieReviews from "../../utils/Api-reviews";
import formatDate from "../../utils/formatDate";

function MovieReviews({ movieId }) {

  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await GetMovieReviews(movieId);
        setResults(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    
    <div className="flex justify-center items-center mb-5">
      <div className="grid grid-cols-1">
      {results && results.length > 0 && <><p className="font-bold uppercase text-gray-100 py-3">Reviews</p></>}

      {results &&
        results.map((result) => (
          <>
          <div key={result.id} className="text-gray-100 bg-blue-900 my-3 py-3 px-5 max-w-5xl rounded shadow-lg">
            <p className="font-bold">Author: {result.author}</p>
            <p>{formatDate(result.created_at)}</p><hr></hr>
            <div dangerouslySetInnerHTML={{ __html: result.content }} />
            </div>          
           </>
        ))}
    </div>
    </div>
  );
}

export default MovieReviews;
