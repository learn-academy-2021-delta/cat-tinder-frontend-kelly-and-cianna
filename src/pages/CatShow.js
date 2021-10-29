import React, { Component } from 'react'

class CatShow extends Component{
  render(){
    return(
      <>
        <h1>Hello, Furrend!</h1>
        { this.props.cat &&
          <>
            <p>{this.props.cat.name}</p>
            <p>{this.props.cat.age}</p>
            <p>{this.props.cat.enjoys}</p>
          </>
        }
      </>
    )
  }
}

export default CatShow