import  { useState } from 'react'
import SingleCardResult from './SingleCardResult'
import SearchForm from './SearchForm'
import Api from '../utils/Api'

function Home() {
  const [searchData, setSearchData] = useState({
    search: '',
    results: []
  })

  const searchMovie = ( queryString ,isAdultContent) => {
 Api.search(queryString, isAdultContent)
    .then(res => {
      // console.log(res.data.results[0]);
      setSearchData({ 
      ...searchData, 
      results: (res.data.results[0]) ? res.data.results[0] : '' })})
  }

  // searchMovie('matrix', 'true')

  const handleInputChange = (event) => {
    const { name, value } = event.target;
 console.log(event.target);
 console.log([name]);

    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchMovie(searchData.search);
  };

  return (
    <div>
      <SearchForm  
            search={searchData.search}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
      />
      <SingleCardResult 
      results={searchData.results}
      />
    </div>
  )
}

export default Home
