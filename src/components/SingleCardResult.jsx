// import React from 'react'

function SingleCardResult({results, apiState}) {

  console.log(results);
  console.log(apiState);
  if (results === '' || apiState === undefined ) {
    return <div><h1 className="text-white mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white">No Results</h1></div>;
  } else {
    return (
      <div>
  <div className="max-w-md mt-5 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div className="md:flex">
      <div className="md:shrink-0">
        <img className="h-48 w-full object-cover md:h-full md:w-48" src={`https://image.tmdb.org/t/p/original/${results.poster_path}`}  alt="no preview" ></img>
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">{results.original_title}</div>
        <div className="mt-5">
          <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Release Date: {results.release_date}</p>
          <p className="block mt-1 text-lg leading-tight font-thin text-black hover:underline">{results.overview}</p>
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
  
 
 
}

export default SingleCardResult

