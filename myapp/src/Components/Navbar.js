import React from 'react'
import PropTypes from 'prop-types'

export const Navbar = (props) => {
  return (
    <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} ms-auto`}>
    <div className="container-fluid">
      <a className="navbar-brand" href='/'>{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page"href='/'>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active "href='/'>{props.Abouttext}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href='/'>Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href='/' aria-disabled="true">Contact</a>
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light' }`}>
        <input onClick={props.togglemode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Dark mode</label>
      </div>
      </div>
    </div>
  </nav>
    </div>
  )
}
export default Navbar;
// types of prototyypes

Navbar.prototype= {
title:PropTypes.string.isRequired,
Abouttext:PropTypes.string,

}
// what the value to be passed when nothing is sent in the parent component
Navbar.defaultProps={
    title:"navbar title",
Abouttext:"About navbar title"
}