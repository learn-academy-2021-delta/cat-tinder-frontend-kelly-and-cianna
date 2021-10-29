import React, { Component } from 'react'
import notCat from '../assets/grumpycat.png'
import { NavLink } from 'react-router-dom'

class NotFound extends Component {
  render() {
    return (
      <div className="page-body">
        <h3>Ooops, no cats here!</h3>
        <ul>
        <NavLink to="/">Return to Home Page</NavLink>
      </ul>
        <img src={notCat} alt="Grumpy Cat" className="cat-friend" />
      </div>
    )
  }
}
export default NotFound