import React from 'react'
import "./navbar.css"
import {  Link} from "react-router-dom";  
import PropTypes from 'prop-types'

const Header = (props) => {
  
  return (
    <>  <nav className="navbar">
      <div className="logo">{props.title}</div>
      <ul className="nav-links">
        <div className="menu">
          <li><Link className='a' to="/">Home</Link></li>
          <li><Link className='a' to="/Notes">Notes</Link></li>
          <li><Link className='a' to="/contact">Payment</Link></li>
          <li><Link className='a' to="/login">Login</Link></li>
          <li><Link className='a' to="/signup">Signup</Link></li>
        </div>
      </ul>
    </nav></>
  )
}
Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;