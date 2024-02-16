// import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <nav className='nav'>
          <Link to="/">ReactRangers</Link>
      </nav>
      <Outlet />
    </header>
    
  )
}

export default Navbar