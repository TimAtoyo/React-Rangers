import idGenre from "../utils/genre";
import formatDate from '../utils/formatDate'
import formatRating from '../utils/formatRating'
function SingleCardResult({results, apiState, genres}) {
  
  if (results === '' || apiState === undefined ) {
    return <div><h1 className="text-white my-40 text-2xl leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white">No Results</h1></div>;
  } else {
    return (

  <div className=" mt-5 bg-white rounded-xl shadow-md overflow-hidden md:w-full">
    <div className="md:flex">
      <div className="md:shrink-0">
        <img className="h-52 w-full object-cover md:h-full md:w-52" src={`https://image.tmdb.org/t/p/original/${results.poster_path}`}  alt="no preview" ></img>
      </div>
      <div className="p-8">
        <div className="uppercase text-left tracking-wide text-lg text-indigo-500 font-semibold">{results.original_title}</div>
        <div className="mt-5">
          <p className="block mt-1 text-lg text-left leading-tight font-thin text-black ">{results.overview}</p>
          <p className="block mt-1 text-lg text-left leading-tight font-medium text-black mt-5"><span className=" font-thin">Release Date</span>: {formatDate(results.release_date)}</p>
          <p className="block mt-1 text-lg text-left leading-tight font-medium text-black mt-5"><span className=" font-thin">Rating</span>: {formatRating(results.vote_average)}</p>
          <h4 className=" text-start my-4">
 {results.genre_ids.map( genre => ( 
    <span key={Math.random().toString()} className="break-keep justify-start  mx-2  mt-20  bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-full  text-sm text-left leading-tight font-medium ">{idGenre[genre]}</span>
 ))
 }</h4>

        </div>
      </div>
    </div>
  </div>

    )
  }
}

export default SingleCardResult

