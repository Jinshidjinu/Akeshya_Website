import React from 'react'
import Headings from '../../Shared/Headings'
import { LuMapPin } from "react-icons/lu";
import { RiMailSendLine } from "react-icons/ri";
import 'remixicon/fonts/remixicon.css'

const Contact = () => {
  return (
    <div>
      <Headings content='CONTACT US ' />
      <div className='w-full min-h-[500px] bg-white flex flex-col md:flex-row justify-center gap-6 text-[#888] p-6'>
        
        {/* Company Information Section */}
        <div className='w-full md:w-1/3 bg-white'>
          <h3 className='text-[28px] font-Raleway font-bold text-[#14279b]'>Akeshya</h3>
          <p>Designers, developers & marketeers capable of delivering solutions according to your needs</p>
        </div>
        
        {/* Contact Information Section */}
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

        {/* Contact Form Section */}
        <div className='w-full md:w-1/3 bg-white'>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-full h-16 md:h-26 lg:h-24 px-3 py-6 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            ></textarea>
            <div className='w-full bg-white flex justify-center items-center h-[80px]'>
              <button
                type="submit"
                className="rounded-full w-[170px] h-[55px] px-4 py-2 text-white bg-[#14279b] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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

export default Contact
