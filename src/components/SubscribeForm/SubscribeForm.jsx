'use client';
import "./SubscribeForm.scss";
import React, { useState } from 'react';
import validator from 'validator';


const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validator.isEmail(email);

    if (isValid) {
      console.log('Success! Email:', email);
      setEmail('');
      setMessage('Thank you for subscribing!'); 
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <section className='subscribe-form'>
        <div className='subscribe-form-title'>Subscribe Form</div>
        
    <form  className='subscribe-form-form' onSubmit={handleSubmit}>
        <div className='subscribe-form-form__input-wrapper'>
      <label className='subscribe-form-form__input-wrapper__label'  htmlFor="email">Your email</label>
      <input
        className='subscribe-form-form__input-wrapper__input'
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      {message && <div className={`subscribe-form-message ${message === 'Thank you for subscribing!' ? 'success' : 'error'}`}>{message}</div>}

      <button className='subscribe-form-form__button' type="submit">Subscribe</button>
    </form>

    </section>
  );
};

export default SubscribeForm;
