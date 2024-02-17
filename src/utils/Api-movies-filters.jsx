import axios from "axios";

const apiKey = "abc3ed8a831072a48d6f1c34def28099";

const GetMovies = async (genresString) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/discover/movie",
      {
        params: {
          include_adult: false,
          include_video: false,
          language: "en",
          api_key: apiKey,
          page: 1,
          sort_by: "popularity.desc",
          with_genres: genresString,
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

export default GetMovies;