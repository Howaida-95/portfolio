import React from 'react';
import Form from './Form/Form';
const ContactText = () => {
  return (
    <>
      <span className = 'tags'>&nbsp;&nbsp;&nbsp;&lt;h1&gt;</span>
      <h1 className = 'heading animation'>Contact me</h1>
      <span className = 'tags'>&nbsp;&nbsp;&nbsp;&lt;/h1&gt;</span> 
      <div className = 'pd-2 form-container'>
        <p className = 'mb-5'>
        if you have other request or question, don’t hesitate to contact me using below form either.
        </p>
        <Form/>
      </div> 
    </>  
  );
}

export default ContactText;
