import React, { useState } from 'react'
import {LayoutGroup, motion} from 'framer-motion'

function MovieReccomendationsCard({movie}) {
const [open,setOpen]=useState(false)
const [isFullWidth, setIsFullWidth] = useState(false)


const handleWidth = () => {
    
}
  return (
    <motion.div  onClick={() => {
        setOpen(!open)
        handleWidth   
    }} className=" relative flex justify-start overflow-hidden items-stretch w-auto"> 
    <motion.div className="absolute inset-0 bg-center"></motion.div>
    <motion.div layout className=" m-0 flex h-72 w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
      <motion.div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
        <motion.img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
      </motion.div>
{open &&
      <motion.div layout className="bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
      <motion.h1 className=" text-start font-serif text-2xl font-bold text-white shadow-xl">{movie.original_title}</motion.h1>
      <motion.h1 className=" text-start text-sm font-light text-gray-200 shadow-xl"><span>Released:</span>{movie.release_date}</motion.h1>
      
    </motion.div>}
    </motion.div>
    </motion.div> 
  )
}

export default MovieReccomendationsCard
