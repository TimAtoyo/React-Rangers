import React from 'react'
import { useGet } from '../../hooks/useGet'
import {  useGetGenre } from '../../hooks/useGetGenre'
import MovieReccomendationsCard from './MovieReccomendationsCard';

function MovieReccomendations() {
    const {movies, isLoading} = useGet();
    const {genres} = useGetGenre();

  return (
    <div>
<h3 className=' text-left font-medium text-xl mt-10 mb-6 text-white'>Trending this Week:</h3>
    <div className='lg:grid-cols-3 md:grid-cols-2 grid-cols  gap-10 grid'>
        
        {
        isLoading ? 'Loading movies' : 
        movies.results.map((movie)=>{
            return <MovieReccomendationsCard
                    key={movie.id}
                    movie={movie}
                    genres={genres}
                    />
        })
    
        }
    </div>
    </div>
  )
}

export default MovieReccomendations

