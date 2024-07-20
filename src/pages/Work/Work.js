import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import AppWrapper from '../../wrapper/AppWrapper';
import axios from "axios";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { URL } from "../../App";

function Work() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filterWork, setFilterWork] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [Works, setWorks] = useState([]);

  function handleWorkFilter(item) {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === 'All') {
        setFilterWork(Works);
      } else {
        //change item to lowerCase
        const lowerCaseItem = item.toLowerCase();
        const filtered = Works.filter((work) => {
          //change each tag to lowercase
          const lowerCaseTag = work.project.tags.map(tag => tag.toLowerCase());
          return lowerCaseTag.includes(lowerCaseItem);
        });
        setFilterWork(filtered);
      }
    }, 500);
  }

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axios.get(`${URL}/api/users/project-works`);
        if (response.status === 201) {
          const projects = response.data.ProjectArray;
          setWorks(projects);
          setFilterWork(projects);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getProjects();
  }, []);

  return (
    <div className='container mx-auto px-4 py-12'>
      <h2 className='text-center text-4xl md:text-5xl font-bold mb-8'>
        My Creative <span className='text-blue-700'>Portfolio</span> Section
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
        {['UI/UX', 'Web App', 'Mobile App', 'React Js', 'All'].map((item, index) => (
          <div
            key={index}
            className={`py-2 px-4 font-semibold cursor-pointer transition-all ease-out duration-200  
            hover:text-white hover:bg-blue-900 hover:rounded-md ${activeFilter === item ? 'bg-blue-900 text-white rounded-md' : 'bg-white rounded-md'}`}
            onClick={() => handleWorkFilter(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='flex flex-wrap justify-center gap-8'
      >
        {filterWork.map((work, index) => (
          <div key={work + index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 hover:shadow-md rounded-lg'>
            <div className='relative rounded-lg overflow-hidden shadow-lg'>
              <img src={work.photoUrl} alt={work.project.title} className='w-full h-48 object-cover' />
              <motion.div
                className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-0'
                whileHover={{ opacity: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
              >
                <a href={work.project.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='text-white text-3xl mx-4'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.project.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='text-white text-3xl mx-4'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className='mt-4 text-center relative'>
              <h4 className='text-xl font-semibold'>{work.project.title}</h4>
              <p className='text-gray-500'>{work.project.description}</p>
              <div className='mt-2 absolute -top-12 -inset-0 lg:px-24 sm:px-24 md:px-24 px-24 text-center items-center justify-center'>
                {work.project.tags.map((tag, i) => (
                  <p key={i} className='text-gray-800 bg-white  rounded-t-md py-2'>{tag}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrapper(Work, 'work');
