import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav'>
        <NavLink to="/">ReactRangers</NavLink>
    </nav>
  )
}

export default Navbar