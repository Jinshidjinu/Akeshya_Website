import React, { useState, FormEvent, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser'; // Importing emailjs library for sending emails
import Headings from '../../Shared/Headings'; // Assuming Headings component path
import 'remixicon/fonts/remixicon.css'; // Importing Remixicon CSS for icons

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

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Sending email using emailjs
    emailjs.sendForm(
      'service_x6sbeak', // Service ID from emailjs dashboard
      'template_mzdo0sf', // Template ID from emailjs dashboard
      e.currentTarget, // Form element
      'mua2_GzNagEn4xvd8' // User ID from emailjs dashboard
    )
    .then(
      (result) => {
        alert('Message sent successfully!'); 
      },
      (error) => {
        alert('Failed to send message. Please try again.'); 
      }
    );

    // Resetting form data after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Section heading */}
      <Headings content='CONTACT US' />

      {/* Contact information and form */}
      <div className='w-full min-h-[500px] bg-white flex flex-col md:flex-row justify-center gap-6 text-[#888] p-6'>
        {/* Contact information */}
        <div className='w-full md:w-1/3 bg-white' data-aos="fade-up" data-aos-duration="800">
          <h3 className='text-[28px] font-Raleway font-bold text-[#14279b]'>Akeshya</h3>
          <p>Designers, developers & marketeers capable of delivering solutions according to your needs</p>
        </div>
        
        {/* Contact details */}
        <div className='w-full md:w-1/4 bg-white flex flex-col gap-4' data-aos="fade-up" data-aos-duration="900">
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

        {/* Contact form */}
        <div className='w-full md:w-1/3 bg-white' data-aos="fade-up" data-aos-duration="1000">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name input */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
            {/* Email input */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
            {/* Subject input */}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
            {/* Message textarea */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full h-16 md:h-26 lg:h-24 px-3 py-6 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 resize-y"
              required
            ></textarea>
            {/* Submit button */}
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
  );
}

export default Contact;
