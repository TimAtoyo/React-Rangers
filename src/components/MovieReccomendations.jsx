import React from 'react'
import { useGet } from '../hooks/useGet'
import MovieReccomendationsCard from './MovieReccomendationsCard';

function MovieReccomendations() {
    const {movies, isLoading} = useGet();
  return (
    <div>
<h3 className=' text-left font-medium text-xl mb-6 text-white'>Trending this Week:</h3>
    <div className='grid-cols-4 gap-10 grid'>
        
        {
        isLoading ? 'Loading movies' : 
        movies.results.map((movie)=>{
            return <MovieReccomendationsCard
                    key={movie.id}
                    movie={movie}
                    />
        })
    
        }
    </div>
    </div>
  )
}

export default MovieReccomendations

