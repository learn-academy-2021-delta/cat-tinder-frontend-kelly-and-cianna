import React, { Component } from 'react'
import homeCat from '../assets/bgimg.png'
 

class Home extends Component{
  render(){
    return(
      <>
      <div className="bgimg">
        <h1>Welcome to Tindpurrr!</h1>
        <h4>A place to make new furiends.</h4>
        <img src={homeCat} alt="Background Cat" className="bgimg" />
        </div>
      </>
    )
  }
}

export default Home

