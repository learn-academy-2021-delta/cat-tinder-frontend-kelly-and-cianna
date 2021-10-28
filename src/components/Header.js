import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Tindpurrr2 from '../assets/Tindpurrr2.png'

class Header extends Component{
  render(){
    return(
      <header>
        <NavLink to="/">
         <img src={Tindpurrr2} alt="cat-logo"></img>
        </NavLink>
        <div className="nav-links">
          <ul>
            <NavLink to="/catindex">Meet your match</NavLink>
          </ul>
          <ul>
            <NavLink to="/catnew">Add a Cat</NavLink>
          </ul>
          <ul>
            <a target='blank'href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter" id="aspca">Adopt a Cat!</a>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header