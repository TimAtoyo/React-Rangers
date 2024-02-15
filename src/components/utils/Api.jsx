// import axios from "axios";

// const BASEURL = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc";
// const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzNiN2EzYzRmYzVmMWI0MmY0NDNlOTM1NGNiNjdkZCIsInN1YiI6IjY1Y2JiOGJlZTE5NGIwMDE4NDRlOGQ0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n2yRhhbGIfvOH56Q53jLr3zqUb0wa7MA64zDzsLaPUc";
// const config = {
//     headers: {  accept: 'application/json',
//     Authorization: `Bearer ${token}` 
// }
// };
// axios.get(BASEURL, config);


import axios from 'axios';

const options = {
  
  params: {query: 'matrix', include_adult: 'false', language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzNiN2EzYzRmYzVmMWI0MmY0NDNlOTM1NGNiNjdkZCIsInN1YiI6IjY1Y2JiOGJlZTE5NGIwMDE4NDRlOGQ0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n2yRhhbGIfvOH56Q53jLr3zqUb0wa7MA64zDzsLaPUc'
  }
};


// Export an object with a "search" method that searches the Giphy API for the passed query
export default 
{
  search: function(queryString) {
    return axios.request({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {
        query: queryString, 
        include_adult: 'false',
        language: 'en-US', 
        page: '1'},

})
  }
};