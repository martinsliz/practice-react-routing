import './styles.css'
import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to={'/'} className="logo-nav">
          Home
        </Link>
        <div className="link-cont">
          <Link to={'/search'} className="logo-nav">
            Search
          </Link>
          <Link to={'/'}>Repos</Link>
          <Link to={'/users'}>Users</Link>
          <Link to={'/about'}>About</Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar
