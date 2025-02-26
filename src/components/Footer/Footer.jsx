import React from 'react'
import './Footer.css'
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Rasheed Nadaf</a>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/rasheed-alla-baxi-nadaf/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/rasheed-nadaf" target='_blank'><FaGithubSquare /></a>
        <a href="https://leetcode.com/u/RasheedNadaf/" target='_blank'><SiLeetcode /></a>
        <a href="https://www.geeksforgeeks.org/user/rasheedmjq1/" target='_blank'><SiGeeksforgeeks /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Rasheed Nadaf. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer