import React from 'react'
import './Header.css'
import CTA from './CTA'
import Socials from './Socials'

const ME = `${process.env.PUBLIC_URL}/assets/me.png`;

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rasheed Nadaf</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>

        <Socials></Socials>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header