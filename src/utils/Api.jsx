import axios from 'axios';
// index.mjs (ESM)


// Export an object with a "search" method that searches the Giphy API for the passed query
export default 
{
  search: function( query, include_adult ) {

    return axios.request({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {query:query, include_adult:include_adult, language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_SINGLE_SEARCH}`
      }
    })
  }
};