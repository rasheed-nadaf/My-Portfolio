import React from 'react'
import './About.css'

const ME = `${process.env.PUBLIC_URL}/assets/me.png`;

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <p>
            I am an aspiring <strong>Software Engineer</strong> with expertise in <strong>full-stack web development</strong>. Proficient in <strong>HTML, CSS, React.js, JavaScript, Express.js, PostgreSQL, REST APIs, and C++</strong>, I specialize in building scalable and efficient applications with a focus on clean architecture and performance optimization.
          </p>
          <p>
            Passionate about <strong>problem-solving</strong> and crafting seamless digital experiences, I have worked on various <strong>web applications</strong>, ensuring intuitive design and smooth functionality. I am eager to take on new challenges, contribute to innovative projects, and continuously grow as a developer.
          </p>


          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About