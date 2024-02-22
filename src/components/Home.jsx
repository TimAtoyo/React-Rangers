import  { useState } from 'react'
import SingleCardResult from './SingleCardResult'
import SearchForm from './SearchForm'
import Api from '../utils/Api'
import Hero from './Hero'
import {  useGetGenre } from '../hooks/useGetGenre'
import MovieReccomendations from './MovieReccomendations'

function Home() {
  const [searchData, setSearchData] = useState({
    search: 'matrix',
    results: '', 
    apiState: undefined
  })

  const searchMovie = ( queryString ,isAdultContent) => {
 Api.search(queryString, isAdultContent)
    .then(res => {
      setSearchData({ 
      ...searchData, 
      results: (res.data.results[0]) ? res.data.results[0] : '' ,
      apiState: res.data.results[0]
    
    }
      )})
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchMovie(searchData.search);
  };

  const {genres} = useGetGenre();
  return (
        <div className='flex flex-col mx-auto home mb-96 px-10'>
          <Hero/>
          <SearchForm  
                search={searchData.search}
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
          />
          <div className='grid'>
            <h3 className='text-left text-white'>Results:</h3>
            <SingleCardResult
            results={searchData.results}
            apiState={searchData.apiState}
            genres={genres}
            />
          </div>
          <MovieReccomendations/>

        </div>

  )
}

export default Home
