import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import MovieReviews from "./MovieReviews";

function MovieDetailsResult() {
  const { id } = useParams();
  return (
    <>
        <MovieDetails movieId={id} />
        <MovieReviews movieId={id} />
    </>
  
  )
}

export default MovieDetailsResult;
