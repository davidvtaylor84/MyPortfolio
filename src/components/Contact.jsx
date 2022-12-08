import React from 'react'
import './Contact.css'


const Contact = () => {

  return (
    <div className='contactContainer'>
      <form target="_blank" action="https://formsubmit.co/davidvaldeztaylor@gmail.com" method="POST">
        <h3>Get in touch via form or contact me at davidvaldeztaylor@gmail.com</h3>
        <input type="text" name="name" placeholder='Your Name' required/>
        <input type="email" name="email" placeholder='Email Address' required/>
        <textarea name='message' rows='4' placeholder='How can I help?'></textarea>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Contact

