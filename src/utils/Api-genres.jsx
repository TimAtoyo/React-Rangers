import axios from 'axios';

const apiKey = 'abc3ed8a831072a48d6f1c34def28099';

const GetGenres = async () => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
            params: {
                language: 'en',
                api_key: apiKey
            },
            headers: {
                'Accept': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error if needed
    }
};

export default GetGenres