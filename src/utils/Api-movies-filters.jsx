import axios from "axios";

const GetMovies = async ({genresString, releaseYear}) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/discover/movie",
      {
        params: {
          include_adult: false,
          include_video: false,
          language: "en",
          api_key: import.meta.env.VITE_SONA,
          page: 1,
          sort_by: "popularity.desc",
          with_genres: genresString,
          primary_release_year: releaseYear,
        },
          headers: {
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error if needed
  }
};

export default GetMovies;