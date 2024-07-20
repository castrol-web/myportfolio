import React, { useRef, useState } from 'react';
import axios from 'axios';
import { URL } from "../../App";
import { HiPhoto } from "react-icons/hi2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TestimonialForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    Company:"",
    Feedback:"",
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      const selectedFile = e.target.files[0];
      const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (selectedFile && allowedImageTypes.includes(selectedFile.type)) {
        setFile(selectedFile)
      } else {
        setFile(null);
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", formData.name);
    formdata.append("Company", formData.Company);
    formdata.append("Feedback", formData.Feedback);
    if (file) {
      formdata.append("ImageUrl", file);
    }
    try {
      const response = await axios.post(`${URL}/api/users/upload-testimonial`, formdata, {
        method: "POST",
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 201) {
        return toast.success("Testimonial Uploaded succefully!")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6" encType='multipart/form-data' action='/upload-skill' method='post' ref={formRef}>
        <h2 className="text-2xl font-bold mb-4 text-center">Add Testimonial</h2>
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
          <label className="block text-gray-700">Company</label>
          <input
            type="text"
            name="Company"
            value={formData.Company}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your company name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Feedback</label>
          <textarea
            name="Feedback"
            value={formData.Feedback}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your feedback message here"
            required
          ></textarea>
        </div>
        
        
        <div>
          <label htmlFor="ImageUrl" className="grid text-sm font-medium leading-12 text-gray-700">Upload Image Url</label>
          <div className="mt-2 flex items-center justify-center flex-col border border-dashed border-gray-400 rounded-lg py-8 px-6">
            <label htmlFor="ImageUrl" className="flex items-center justify-center rounded-md font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <HiPhoto className="h-8 w-8 mr-2" />
              Click here to upload icon
              <input id="ImageUrl" name="ImageUrl" type="file" className="sr-only" onChange={handleChange} required />
            </label>
            <p className="mt-2 text-xs text-gray-600">upload PNG, JPG or JPEG only, up to 10MB</p>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
          + Send Feedback
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default TestimonialForm;
