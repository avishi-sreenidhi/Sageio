import React, { useRef, useState } from 'react';

const Contact = () => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const message = messageInputRef.current.value;
    console.log('Form submitted:', { name, email, message });

    // Reset the form fields
    nameInputRef.current.value = '';
    emailInputRef.current.value = '';
    messageInputRef.current.value = '';

    // Focus on the first input field after resetting
    nameInputRef.current.focus();

    // Set the submit message
    setSubmitMessage(`Thank you, ${name}! We will be in touch with you soon.`);
  };

  return (
    <div id="contact" className="container pt-5 p-20 items-center mb-5">
      <h1 className="text-center text-4xl italic font-semibold mb-6 bg-green-200 rounded-lg p-1">CONTACT</h1>
      <div className="flex items-center">
        <form className="w-1/2 pr-4 ml-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md py-2 px-4" ref={nameInputRef} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-4" ref={emailInputRef} />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium mb-1">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md py-2 px-4" ref={messageInputRef}></textarea>
          </div>
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Submit</button>
          <p id="submit-message" className='text-green-500 mt-5'>{submitMessage}</p>
        </form>
        <div className="w-96 relative flex justify-end items-end">
          <div className="absolute h-32 w-32 bg-green-500 rounded-xl hover:opacity-70" style={{ zIndex: 3 }}></div>
          <div className="absolute h-32 w-32 bg-green-200 rounded-xl hover:opacity-70" style={{ zIndex: 2, transform: 'translate(-50%, 50%)' }}></div>
          <div className="absolute h-32 w-32 bg-gray-500 rounded-xl hover:opacity-70" style={{ zIndex: 1, transform: 'translate(-100%, 100%)' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
