import React, { useRef, useState } from 'react'
import AppWrapper from '../wrapper/AppWrapper';
import { FaEnvelope, FaPhone } from "react-icons/fa";
import axios from 'axios';
import { URL } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Footer() {
  const [loading, setloading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  //handlechange function 
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }
  //submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", formData.name);
    formdata.append("email", formData.email);
    formdata.append("message", formData.message);

    try {
      setloading(true)
      const response = await axios.post(`${URL}/api/users/contact-me`, formdata, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 201) {
        setFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        })
        return toast.success(response.data.message);
      } else {
        toast.error('Message sending failed. Please try again.');
      }
    } catch (error) {
      if (error.response) {
        // Server-side error
        toast.error(error.response.data.message || 'Server error occurred. Please try again.');
      } else if (error.request) {
        // Network error
        toast.error('Network error. Please check your internet connection and try again.');
      } else {
        // Other errors
        toast.error('An error occurred. Please try again.');
      }
    }
    finally {
      setloading(false);
    }
  };
  return (
    <>
      <h2 className="text-4xl justify-center text-center mx-auto font-semibold">Contact or leave me a message below</h2>

      <div className="lg:flex justify-between items-center lg:w-2/4 mx-auto">
        <div className="flex flex-row gap-3 my-4">
          <a href="mailto:castrolmkude@gmail.com" className="gap-2 flex items-center"><FaEnvelope />castrolmkude@gmail.com</a>
        </div>
        <div className="flex flex-row gap-3 my-4">
          <a href="tel:+254 (790) 792-533" className="gap-2 flex items-center"><FaPhone />+254 (790) 792-533</a>
        </div>
      </div>
      {!formSubmitted ? <form onSubmit={handleSubmit} className="bg-white mx-auto p-8 rounded-lg shadow-md w-full max-w-md space-y-6" encType='multipart/form-data' action='/contact-me' method='post' ref={formRef}>
        <h2 className="text-2xl font-bold mb-4 text-center">Get in Touch With Me</h2>
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message here"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form> :
        <div className='mx-auto items-center justify-center'>
          <h3 className='text-4xl text-green-600 text-center'>Thank you <span className='text-gray-700'>{formData.name}</span> for your feedback,I will respond to you soon!</h3>
        </div>
      }
      <ToastContainer />
    </>
  )
}

export default AppWrapper(Footer, "contact");