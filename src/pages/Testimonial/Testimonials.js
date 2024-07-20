import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL } from "../../App.js";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import AppWrapper from '../../wrapper/AppWrapper.js';

function Testimonials() {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonial] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    async function getBrand() {
      try {
        const response = await axios.get(`${URL}/api/users/get-brands`);
        if (response.status === 201) {
          const brand = response.data.brandsArray;
          setBrands(brand);
        }
      } catch (error) {
        console.error(error);
      }
    }
    async function getTestimonial() {
      try {
        const response = await axios.get(`${URL}/api/users/get-testimonial`);
        if (response.status === 201) {
          setTestimonial(response.data.testimonialArray);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getBrand();
    getTestimonial();
  }, []);

  return (
    <>
      {testimonials.length > 0 && (
        <div className="max-w-4xl mx-auto p-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 mb-6 flex flex-col lg:flex-row items-center">
            <img src={testimonials[currentIndex].ImageUrl} alt={testimonials[currentIndex].testimonial.name} className='rounded-full lg:w-28 lg:h-28 w-36 h-36 object-cover shadow-md' />
            <div className="flex-1 lg:ml-8 mt-4 lg:mt-0 text-center lg:text-left">
              <p className="text-gray-600 text-lg">{testimonials[currentIndex].testimonial.Feedback}</p>
              <div className="mt-4">
                <h4 className="text-2xl font-semibold text-gray-800">{testimonials[currentIndex].testimonial.name}</h4>
                <h5 className="text-gray-500">{testimonials[currentIndex].testimonial.Company}</h5>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 hover:bg-blue-500 mx-2 transition-colors"
              onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
            >
              <HiChevronLeft className='text-blue-900 hover:text-white' />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 hover:bg-blue-500 mx-2 transition-colors"
              onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}
            >
              <HiChevronRight className='text-blue-900 hover:text-white' />
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-wrap justify-center mt-8">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand.brand._id}
            className='m-4 w-32 h-32 flex items-center justify-center'
          >
            <img src={brand.ImageUrl} alt={brand.name} className='w-full h-full object-contain grayscale hover:grayscale-0' />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrapper(Testimonials,"testimonials") ;
