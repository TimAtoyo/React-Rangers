import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

export const useGetGenre = () => {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/genre/movie/list',
        params: {language: 'en-US'},
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SINGLE_SEARCH}`
        }
      };

    const {data: genres, isLoading} = useQuery({
        queryFn: async () => {
            const {data} = await axios.request(options)
            console.log(data.genres);
            return data.genres
        },
        queryKey: ['genre']
    })
    return {genres, isLoading}
}