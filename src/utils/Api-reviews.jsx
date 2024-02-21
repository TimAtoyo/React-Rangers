import axios from "axios";

const GetMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
      {
        params: { 
          language: "en",
          api_key: import.meta.env.VITE_SONA,
        },
          headers: {
          Accept: "application/json",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error if needed
  }
};

export default GetMovieReviews;