import React from 'react'

const CV_URL = `${process.env.PUBLIC_URL}/assets/CV.pdf`;

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV_URL} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA