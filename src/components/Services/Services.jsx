import React from 'react'
import './Services.css'
import { GiCheckMark } from "react-icons/gi";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        {/* Frontend Development */}
        <article className='service'>
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Building dynamic and responsive web applications using React.js, HTML, and CSS.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Structuring efficient and flexible layouts using Flexbox and CSS Grid.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Enhancing interactivity with JavaScript and modern frameworks.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Optimizing performance and accessibility for better user experience.</p>
            </li>
          </ul>
        </article>

        {/* Backend Development & AI Integration */}
        <article className='service'>
          <div className="service__head">
            <h3>Backend Development & AI Integration</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Developing RESTful APIs using Express.js and Node.js for seamless frontend-backend communication.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Creating dynamic web applications with EJS for templating and server-side rendering.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Integrating AI models into web applications for enhanced functionality.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Creating conversational AI applications using Generative AI APIs.</p>
            </li>
          </ul>
        </article>

        {/* Database & Version Control */}
        <article className='service'>
          <div className="service__head">
            <h3>Database & Version Control</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Working with PostgreSQL and SQL for structured data storage and retrieval.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Performing basic CRUD operations to manage application data.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Implementing database connections in Express.js and Node.js.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Managing source code using Git and GitHub for version control and project collaboration.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services;
