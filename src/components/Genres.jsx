import React, { useState } from 'react'
import { useEffect } from 'react'
import GetGenres from '../utils/Api-filters'

const Filters = () => {
    const [genres, setGenres] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await GetGenres(); // Call the api function
          console.log(data)
          setGenres(data.genres); // Update the state with the fetched genres
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle error
        }
      };
  
      fetchData();
    }, []);
  
    return (
      // return buttons with genre name  
      <div>
        <h2>Movie Genres</h2>       
        {genres.length==0 && <p>No genres</p>}
        {genres && genres.map(genre => <button key={genre.id} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{genre.name}</button>) }        
      </div>
    );
  };
  
  export default Filters;