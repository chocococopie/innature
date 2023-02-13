import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 shadow-lg flex items-center justify-around py-3 px-32 fixed top-0 left-0 w-full'>
        <Link to="/">
        <span>logo</span>
        </Link>
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar