// import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Capture  from '../assets/Capture.png'
function Navbar() {
  return (
    <header>
      <nav className='nav m-auto flex items-center justify-between flex-wrap '>
      <div className="relative max-w-sm transition-all duration-300 cursor-pointer ">
          <Link to="/" className='relative'>
          
<img src={Capture} className='object-contain h-fit  w-10' alt="" />
          </Link>
    
  </div>
      </nav>
      <Outlet />
    </header>
    
  )
}

export default Navbar