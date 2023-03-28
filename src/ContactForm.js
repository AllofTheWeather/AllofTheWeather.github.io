import React, { useRef } from 'react';
import { send, sendForm } from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    sendForm('service_portfolio', 'template_1', form.current, 'bJymsM6AW3Av6bIVr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className="form-control" type="text" name="user_name" />
      <label>Email</label>
      <input className="form-control" type="email" name="user_email" />
      <label>Message</label>
      <textarea className="form-control" name="message" />
      <input className='button center' type="submit" value="Send" />
    </form>
  );
};

export const ContactUsFooter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    sendForm('service_portfolio', 'template_1', form.current, 'bJymsM6AW3Av6bIVr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="content">
    <form ref={form} onSubmit={sendEmail}>
      <div className="horizontal">
          <label  hidden="hidden">Name</label>
          <input className="form-control-footer" type="text" name="user_name" placeholder="name"/>
          <label hidden="hidden">Email</label>
          <input className="form-control-footer" type="email" name="user_email" placeholder="email" />
      </div>
      <div className="horizontal">
        <label hidden="hidden">Message</label>
        <textarea className="form-control-footer" name="message" placeholder="message" />
      </div>
      <input className='button center' type="submit" value="Send" />
    </form>
    </div>
  );
};
