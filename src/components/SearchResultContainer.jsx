import React, { useState } from 'react'
import SingleCardResult from './SingleCardResult'
import SearchForm from './SearchForm'
import Api from './utils/Api'
function SearchResultContainer() {
  const [searchData, setSearchData] = useState({
    search: '',
    result: []
  })

  const searchMovie = (queryString) => {
 Api.search(queryString)
    .then(res => console.log(res))
  }
  return (
    <div>
      <SearchForm  />
      <SingleCardResult />
    </div>
  )
}

export default SearchResultContainer
