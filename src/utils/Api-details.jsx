import axios from "axios";


const GetMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
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
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error if needed
  }
};

export default GetMovieDetails;