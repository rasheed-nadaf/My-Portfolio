import React from 'react'
import './Contact.css'
import { HiOutlineMail } from "react-icons/hi";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zyxk2qz', 'template_4chgmrs', form.current, 'Y2JHMGOdSpu-7PIaD')
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <HiOutlineMail className='conatct__option-icon'/>
          <h4>Email</h4>
          <h5>rasheednadaf4@gmail.com</h5>
          <a href="mailto:rasheednadaf4@gmail.com" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
          <CiLinkedin className='conatct__option-icon'/>
          <h4>LinkedIn</h4>
          <h5>Rasheed Nadaf</h5>
          <a href="https://www.linkedin.com/in/rasheed-alla-baxi-nadaf/" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
          <FaWhatsapp className='conatct__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+91 8549959872</h5>
          <a href="https://api.whatsapp.com/send?phone=918549959872" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact