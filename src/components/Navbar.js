import React, { useEffect, useRef, useState } from 'react';
import Richkid from "../images/Richkid.png";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [])

  return (
    <nav ref={navRef} className='w-full flex justify-between items-center py-4 px-6 lg:px-12 fixed bg-white bg-opacity-75 backdrop-blur-sm border-b border-gray-200 z-40'>
      <div className='flex items-center'>
        <img src={Richkid} alt='logo' className='w-10 h-10 lg:w-36 lg:h-10'></img>
      </div>
      
      <ul className='hidden lg:flex flex-1 justify-center items-center space-x-8 list-none text-center mx-auto'>
        {
          ['home', 'about', 'skills', 'work', 'contact'].map((item) => (
            <li key={`link-${item}`} className='relative group'>
              <a href={`#${item}`} className='text-gray-700 uppercase font-semibold duration-300 ease-in-out hover:text-blue-600'>
                {item}
              </a>
              <div className='absolute top-full left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-full w-1.5 h-1.5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'></div>
            </li>
          ))
        }
      </ul>

      <div className='lg:hidden'>
        {!menuOpen ? <IoMenu onClick={handleMenu} className='text-3xl cursor-pointer text-gray-700' /> : ""}
        {
          menuOpen && (
            <motion.div
              className='fixed top-0 right-0 h-screen w-1/2 bg-gray-800 bg-opacity-90 shadow-lg z-20 p-6 flex flex-col items-end'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <IoMdClose onClick={handleMenu} className='text-3xl cursor-pointer text-white mb-8' />
              <ul className='flex flex-col items-start space-y-6'>
                {
                  ['home', 'about', 'skills', 'work', 'contact'].map((item) => (
                    <li key={`link-${item}`} className='text-lg'>
                      <a href={`#${item}`} onClick={closeMenu} className='text-white font-semibold uppercase hover:text-blue-400'>
                        {item}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </motion.div>
          )
        }
      </div>
    </nav>
  );
}

export default Navbar;
