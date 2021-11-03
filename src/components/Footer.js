import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
      <footer>
        <div className="nav-links">
          <ul>
            <NavLink to="/">&copy; 2021 Kelly & Cianna</NavLink>
          </ul>
          <ul>
            <NavLink to="/catindex">Meet Your Matches</NavLink>
          </ul>
          <ul>
            <NavLink to="/catnew">Add a Cat</NavLink>
          </ul>
        </div>
    </footer>
    )
  }
}

export default Footer