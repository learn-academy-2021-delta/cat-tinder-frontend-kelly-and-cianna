import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component{
  render(){
    return(
      <>
        <h1>Meet Your Purrfect Match</h1>
        {this.props.cats && this.props.cats.map(cat => {
          return (
            <p key={cat.id}>
              <NavLink to={`/catShow/${cat.id}`}>
                {cat.name}
              </NavLink>
            </p>
          )
        })}
      </>
    )
  }
}

export default CatIndex