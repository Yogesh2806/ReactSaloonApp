import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className='contact'>
      <h1 className='c-name'>CONTACT</h1>
      <div className='conta'>
        <div className='contact-box'>
          <div className='left'></div>
          <div className='right'>
            <input
              type='text'
              className='field'
              placeholder='Your Name'
              id='name'
            />
            <input
              type='text'
              className='field'
              placeholder='Your Email'
              id='email'
            />
            <input
              type='text'
              className='field'
              placeholder='Phone'
              id='phone'
            />
            <textarea
              placeholder='Message'
              className='field'
              id='message'
            ></textarea>
            <button className='btn'>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
