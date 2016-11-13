import React from 'react'
import { Link, IndexLink } from 'react-router'

const Nav = () => {
  return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer App
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created with <a href="https://facebook.github.io/react/docs/forms.html" target="_blank">React</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
