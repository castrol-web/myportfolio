import React from 'react';
import { motion } from "framer-motion";
import castrol from "../images/castrol.png";
import circle from "../images/circle.png";
import react from "../images/react.png";
import node from "../images/node.png";
import mongodb from "../images/mongodb.png";
import AppWrapper from "../wrapper/AppWrapper"

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

function Header() {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center w-full h-full pt-24 lg:pt-0'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='flex flex-col justify-start items-center lg:items-start h-full lg:w-1/2 w-full mb-8 lg:mb-0 px-4 lg:px-0'
      >
        <div className='w-full flex flex-col items-center lg:items-start lg:mt-4'>
          <div className='py-4 px-8 rounded-2xl shadow-lg bg-white flex items-center mb-4 w-full max-w-md'>
            <span className='text-3xl lg:text-8xl mr-4'>👋</span>
            <div className='text-left'>
              <p className='text-xl lg:text-2xl'>Hello, I am</p>
              <h1 className='text-3xl lg:text-5xl font-bold'>Castrol</h1>
            </div>
          </div>
          <div className='py-4 px-6 rounded-2xl shadow-lg bg-white mt-3 uppercase text-center w-full max-w-md'>
            <p className='text-gray-500 font-semibold text-xl lg:text-2xl'>Full Stack MERN Developer</p>
            <p className='text-gray-500 font-semibold text-xl lg:text-2xl'>Freelancer</p>
          </div>
        </div>
      </motion.div>
      {/* motion for the img */}
      <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.8, delayChildren: 0.8 }} className='flex-1 h-full flex justify-center lg:justify-end items-end relative lg:mx-0 mx-3'>
        <img src={castrol} alt='profile_bg' className='w-full object-contain z-10 max-w-xs lg:max-w-none'></img>
        <motion.img whileInView={{ scale: [0, 1] }} transition={{ duration: 1, ease: "easeInOut" }} alt='profile_circle'
          src={circle} className='absolute lg:right-12 bottom-0 lg:top-20 top-12 z-0 w-full max-w-xs lg:max-w-none'>
        </motion.img>
      </motion.div>
      <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className='mt-12 flex lg:flex-col justify-evenly items-center lg:items-start h-full lg:ml-4 flex-wrap w-full ml-0 flex-row px-4 lg:px-0' style={{ flex: "0.75" }}>
        {
          [react, node, mongodb].map((item, index) => {
            return <div key={`${item}-${index}`} className='rounded-full shadow-black bg-white w-16 h-16 lg:w-24 lg:h-24 m-2 flex items-center justify-center'>
              <img src={item} alt='circles' className='w-10 h-10 lg:w-12 lg:h-12'></img>
            </div>
          })
        }
      </motion.div>
    </div>
  )
}

export default AppWrapper(Header, 'home');
