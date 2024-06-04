import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'; 


const Layout = () => {
  return (

  <div className="layout-container">
      {/* <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/cart" className="nav-link" activeClassName="active">Cart</NavLink>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </div>
  )
}

export default Layout
