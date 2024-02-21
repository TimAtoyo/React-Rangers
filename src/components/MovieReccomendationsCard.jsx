import React, { useState } from 'react'
import { motion} from 'framer-motion'

function MovieReccomendationsCard({movie, genres}) {
const [open,setOpen]=useState(false)
const [isFullWidth, setIsFullWidth] = useState(false)


const handleWidth = () => {
    
}
  return (
    <motion.div  onClick={() => {
        setOpen(!open)
        handleWidth   
    }} className=" flex  justify-start overflow-hidden w-auto"> 
   
    <motion.div layout className="bg-white relative m-0 flex h-72 w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
      <motion.div className="z-10 h-full w-full hover:opacity-100 overflow-hidden rounded-xl hover  opacity-80 group-hover:opacity-100 dark:opacity-70">
        <motion.img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
      </motion.div>
{open &&
      <motion.div layout className="shadow-xl px-3 pt-4 relative bottom-0 z-20 m-0 pb-4 ps-4 ">
      <motion.h1 className=" text-start  text-2xl font-bold  ">{movie.original_title}</motion.h1>
      <motion.h1 className=" text-start text-sm font-light  "><span>Released:</span>{movie.release_date}</motion.h1>
      <motion.h1 className=" text-start text-sm font-light  px-2"><span>{movie.genre_ids}</span>
     
      
      
      
      
      
      </motion.h1>
      
    </motion.div>}
    </motion.div>
    </motion.div> 
  )
}

export default MovieReccomendationsCard
