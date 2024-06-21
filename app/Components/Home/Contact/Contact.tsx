"use client"; // This marks the component as a Client Component

import React, { useState, FormEvent, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';
import Headings from '../../Shared/Headings';
import 'remixicon/fonts/remixicon.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    emailjs
      .sendForm(
        'service_x6sbeak', 
        'template_mzdo0sf', 
        e.currentTarget,
        'mua2_GzNagEn4xvd8'
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        },
      );

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      <Headings content='CONTACT US ' />
      <div className='w-full min-h-[500px] bg-white flex flex-col md:flex-row justify-center gap-6 text-[#888] p-6'>
        <div className='w-full md:w-1/3 bg-white'>
          <h3 className='text-[28px] font-Raleway font-bold text-[#14279b]'>Akeshya</h3>
          <p>Designers, developers & marketeers capable of delivering solutions according to your needs</p>
        </div>
        <div className='w-full md:w-1/4 bg-white flex flex-col gap-4'>
          <div className='flex gap-3 p-2'>
            <i className="ri-map-pin-line text-3xl text-[#14279b]"></i>
            <p>26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004</p>
          </div>
          <div className='flex gap-3 p-2'>
            <i className='ri-mail-send-line text-3xl text-[#14279b]'></i>
            <p>info@akeshya.com</p>
          </div>
          <div className='flex gap-3 p-2'>
            <i className="ri-phone-line text-3xl text-[#14279b]"></i>
            <p>+91 94942 40922</p>
          </div>
        </div>
        <div className='w-full md:w-1/3 bg-white'>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-3 py-2  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full h-16 md:h-26 lg:h-24 px-3 py-6 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 resize-y"
              required
            ></textarea>
            <div className='w-full bg-white flex justify-center items-center h-[80px]'>
              <button
                type="submit"
                className="rounded-full w-[170px] h-[55px] px-4 py-2 text-white bg-[#14279b] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;