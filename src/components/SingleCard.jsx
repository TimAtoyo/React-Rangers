import React from 'react'

function SingleCard() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzNiN2EzYzRmYzVmMWI0MmY0NDNlOTM1NGNiNjdkZCIsInN1YiI6IjY1Y2JiOGJlZTE5NGIwMDE4NDRlOGQ0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n2yRhhbGIfvOH56Q53jLr3zqUb0wa7MA64zDzsLaPUc'
        }
      };
      
      fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  return (
    <div>
      
    </div>
  )
}

export default SingleCard
