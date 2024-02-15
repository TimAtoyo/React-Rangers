import React from 'react'

function SingleCardResult(props) {
  return (
    <div>
      <div className="m-4 mb-8 w-auto px-4 mx-auto sm:w-1/2 md:w-1/3 lg:w-1/4">
  <div className="rounded-lg bg-white shadow-lg">
    <img src="https://source.unsplash.com/400x500/?dark" alt="movie poster" className="rounded-t-lg" />
    <div className="p-4">
      <h2 className="mb-2 text-lg font-semibold">Movie Title</h2>
      <p className="mb-2 text-sm text-gray-700">Release Date: January 1, 2023</p>
      <p className="mb-4 text-sm text-gray-700">Director: John Doe</p>
      <a href="#" className="block rounded-lg bg-blue-500 px-4 py-2 text-center font-semibold text-white hover:bg-blue-600">Watch Movie</a>
    </div>
  </div>
</div>
    </div>
  )
}

export default SingleCardResult

