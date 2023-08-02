'use client';

import React, { useState } from 'react';
import mobile from './Public/images/illustration-sign-up-mobile.svg';
import desktop from './Public/images/illustration-sign-up-desktop.svg';
import Image from 'next/image';
import icon from './Public/images/icon-list.svg';
import Success from '../components/success';

const Home = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    if (email.trim() === '') {
      setEmailError('Please enter your email.');
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setShowSuccess(true);
      setSubmittedEmail(email);
      setEmailError(''); // Clear any previous error messages
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <title>Newsletter</title>
      <div className='flex flex-col flex-1'>
        <Image src={mobile}></Image>
        <h2>Stay Updated !</h2>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>
            <Image src={icon}></Image>Product discovery and building what matters
          </li>
          <li>
            <Image src={icon}></Image>Measuring to ensure updates are a success
          </li>
          <li>
            <Image src={icon}></Image>And much more!
          </li>
        </ul>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>
            <b>Email address</b>
          </label>
          <input
            type='text'
            placeholder='email@company.com'
            name='email'
            required
            pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
            onChange={() => setEmailError('')}
          />
          <span className='error-message'>{emailError}</span>
          <button type='submit' className='signupbtn'>
            Subscribe to the monthly newsletter
          </button>
        </form>
      </div>
      {/* Show the Success component as a popup */}
      {showSuccess && <Success email={submittedEmail} onClose={handleCloseSuccess} />}
    </>
  );
};

export default Home;
