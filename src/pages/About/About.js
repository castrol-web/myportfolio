import React from 'react';
import { motion } from "framer-motion";
import backendd from "../../images/backendd.jpeg";
import frontend from "../../images/frontend.jpeg";
import mongoose from "../../images/mongoose.jpeg";
import tailwind from "../../images/tailwind.jpeg";
import AppWrapper from '../../wrapper/AppWrapper';


const abouts = [
  { title: "Frontend Development", description: 'I am an expert in frontend, specifically dealing with React frameworks', imageUrl: frontend },
  { title: "Backend Development", description: 'I am an expert in backend, specifically dealing with Node.js and Express', imageUrl: backendd },
  { title: "MongoDB", description: 'I am an expert in Mongoose, a NoSQL database', imageUrl: mongoose },
  { title: "Tailwind CSS", description: 'I am an expert in Tailwind CSS, which enables good design and animations', imageUrl: tailwind }
];

function About() {
  return (
    <div className='lg:mt-28 mt-20'>
      <h2 className='mx-auto text-center justify-center items-center lg:text-5xl text-3xl font-semibold'>
        I know that <span className='text-blue-700'>Good Design</span> <br /> means <span className='text-blue-700'>Good Business</span>
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6 mt-8 px-4'>
        {abouts.map((about, index) => (
          <motion.div
            className='bg-white p-4 rounded-lg shadow-md flex flex-col items-start'
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <img src={about.imageUrl} alt={`${about.title}`} className='w-full object-cover rounded-md mb-4' />
            <h2 className='font-bold text-lg mb-2 mx-auto text-center justify-center items-center'>{about.title}</h2>
            <p className='text-gray-600'>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AppWrapper(About,'about');
