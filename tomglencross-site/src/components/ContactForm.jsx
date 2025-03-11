'use client'

import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsFormDisabled(true);

    const formData = {
      name,
      email,
      message,
    };

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.success) {
      setStatus('Your message has been sent!');
      setName("")
      setEmail("")
      setMessage("")
    } else {
      setStatus('There was an error sending your message.');
    }
    setTimeout(() => {
        setIsFormDisabled(false);
        setStatus(null);
      }, 60000); 
      setIsSubmitting(false)
};

  

  return (
    <>
    <div className='pl-2 pt-2'>
        <div className='text-2xl pb-2'>Contact </div>
        <div>If you'd like to make an enquiry, get in touch using the form below</div>
    <form onSubmit={handleSubmit}>
    <div className='grid grid-cols-2'>
        <label htmlFor="name" className='text-sm col-start-1'>YOUR NAME</label>
      <input
        type="text"
        id="name"
        placeholder="your name..."
        value={name}
        autoComplete="on"
        onChange={(e) => setName(e.target.value)}
        required
        disabled={isFormDisabled} 
        className='p-1 dark:text-black dark:placeholder:text-pinkCustom'
      />
      </div>
      <div className='grid grid-cols-2 py-2'>
      <label htmlFor="email" className='text-sm col-start-1'>YOUR EMAIL</label>
      <input
        type="email"
        id="email"
        placeholder="your email..."
        value={email}
        autoComplete="on"
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={isFormDisabled} 
        className='p-1 dark:text-black dark:placeholder:text-pinkCustom'
      />
      </div>
      <div className='grid grid-cols-1 pb-2'>
      <textarea
      id="enquiry"
        placeholder="your enquiry..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows="5"
        cols="auto"
        disabled={isFormDisabled} 
        className='p-1 dark:text-black dark:placeholder:text-pinkCustom'
      ></textarea>
      </div>
      <button 
      type="submit" 
      className='cursor-pointer text-lg px-2 bg-gray-300 hover:bg-gray-200 hover:text-pinkCustom dark:text-black dark:hover:text-pinkCustom disabled:bg-black disabled:text-white'
      disabled={isSubmitting || isFormDisabled}
      >
      {isFormDisabled ? 'New enquiries disabled' : isSubmitting ? 'Sending...' : 'Send Enquiry' }
      </button>
      {status && <div className="text-pinkCustom animate-fade-out text-center">{status}</div>}
      
    </form>
    </div>
    </>
  );
};

export default ContactForm;
