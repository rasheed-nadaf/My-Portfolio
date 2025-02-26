import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import Experience from './components/Experience/Experience'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'

const App = () => {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Experience></Experience>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App