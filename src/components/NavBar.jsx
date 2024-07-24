import './styles.css'
import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Navbar = ({ isLogged }) => {
  return (
    <>
      <nav>
        <Link to={'/'} className="logo-nav">
          Home
        </Link>
        <div className="link-cont">
          <Link className="logo-nav" to={'/'}>
            Repos
          </Link>
          <Link className="logo-nav" to={'/users'}>
            Users
          </Link>
          <Link className="logo-nav" to={'/search'}>
            Search
          </Link>
          <Link className="logo-nav" to={'/about'}>
            About
          </Link>
          <Link className="logo-nav" to={'/authProfile'}>
            Profile
          </Link>
          {!isLogged && (
            <Link className="logo-nav" to={'/login'}>
              Login
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar
