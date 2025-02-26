import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/rasheed-alla-baxi-nadaf/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/rasheed-nadaf" target='_blank'><FaGithubSquare /></a>
        <a href="https://leetcode.com/u/RasheedNadaf/" target='_blank'><SiLeetcode /></a>
        <a href="https://www.geeksforgeeks.org/user/rasheedmjq1/" target='_blank'><SiGeeksforgeeks /></a>
    </div>
  )
}

export default Socials