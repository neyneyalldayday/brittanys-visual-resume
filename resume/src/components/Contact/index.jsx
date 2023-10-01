import React , { useState } from 'react'
import './contact.css'
const Contact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you'll send the form data to your backend to handle the email sending
        console.log('Form submitted:', { name, phone, email, message });
        // TODO: Add logic to send the form data to the backend for email processing
      };

  return (
    <div className='contact-container'>
      <section className='contact-message'>
      <h2>Contact Me</h2>
      <p>send me a message and ill get back to you asap</p>
      </section>
      
      <form onSubmit={handleSubmit} className='contact-form'>
        <div className='input'>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className='input'>
          <label>Phone:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className='input'>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='input'>
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Contact


