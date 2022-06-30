import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>iNotebook</h4>
            <h3 className="list-unstyled">
              <li>Delhi , India</li>
              <li>Gurgaon</li>
              
            </h3>
          </div>
          <div className="col">
            <h4>Help Centre</h4>
            <ui className="list-unstyled">
              <li>About</li>
              <li>FAQs</li>
            </ui>
          </div>
          <div className="col">
            <h4>Contact Us</h4>
            <ui className="list-unstyled">
              <li>Email :- xyz@gmail.com</li>
              <li>Phone:- 0123456789</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} iNotebook | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>

  )
}

export default Footer