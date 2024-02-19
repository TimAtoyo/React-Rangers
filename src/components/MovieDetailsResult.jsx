import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";

function MovieDetailsResult() {
  const { id } = useParams();
  return <MovieDetails movieId={id} />;
}

export default MovieDetailsResult;
