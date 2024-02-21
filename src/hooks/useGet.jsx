import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

export const useGet = () => {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/movie/week',
        params: {language: 'en-US'},
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SINGLE_SEARCH}`
        }
      };

    const {data: movies, isLoading} = useQuery({
        queryFn: async () => {
            const {data} = await axios.request(options)
            console.log(data);
            return data
        },
        queryKey: ['reccomendations']
    })
    return {movies, isLoading}
}