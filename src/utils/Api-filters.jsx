import axios from 'axios';

const apiKey = 'abc3ed8a831072a48d6f1c34def28099';

const GetGenres = async () => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
            params: {
                language: 'en',
                api_key: apiKey // Pass the API key as a query parameter
            },
            headers: {
                'Accept': 'application/json'
            }
        });
        console.log(response.data);
        console.log(response.data.genres[0].name);
        return response.data; // Return the data
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error
        throw error; // Re-throw the error if needed
    }
};

export default GetGenres