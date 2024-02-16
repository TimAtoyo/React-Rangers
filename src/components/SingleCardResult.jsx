// import React from 'react'

function SingleCardResult({results}) {
  return (
    <div>
  <div className="flex m-4 mb-8 w-auto px-4 mx-auto sm:w-1/2 rounded-lg shadow-lg">
  <div className=" bg-white ">
    <div className="p-4">
      <h1 className="mb-2 text-lg font-semibold">{results?.original_title}</h1>
      <p className="mb-2 text-sm text-gray-700">Release Date: {results?.release_date}</p>
      <p className="mb-4 text-sm text-gray-700">Director: John Doe</p>
      <p className="mb-4 text-sm text-gray-700">{results?.overview}</p>
      <a href="#" className="block rounded-lg bg-blue-500 px-4 py-2 text-center font-semibold text-white hover:bg-blue-600">Watch Movie</a>
    </div>
  </div>
  <div className=" bg-white ">
    <div className="p-4">
    <img src={`https://image.tmdb.org/t/p/original/${results.poster_path}`} alt="movie poster" className="rounded-t-lg" />
    </div>
  </div>
</div>
    </div>
  )
}

export default SingleCardResult

