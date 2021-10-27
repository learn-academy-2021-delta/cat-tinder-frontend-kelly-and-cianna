import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import mockCats from './mockCats.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      mockCats: mockCats
    }
  }

  render () {
    console.log(this.state.mockCats)
    return (
      <Router>
      <Header />
        <Switch>
        <Home />
        <CatIndex />
        <CatShow />
        <CatNew />
        <CatEdit />
        <NotFound />
        </Switch>
      <Footer />
      
      </Router>
    )
  }
}

export default App