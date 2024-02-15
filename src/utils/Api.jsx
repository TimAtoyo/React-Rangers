import axios from 'axios';
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
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzNiN2EzYzRmYzVmMWI0MmY0NDNlOTM1NGNiNjdkZCIsInN1YiI6IjY1Y2JiOGJlZTE5NGIwMDE4NDRlOGQ0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n2yRhhbGIfvOH56Q53jLr3zqUb0wa7MA64zDzsLaPUc'
      }
    })
  }
};