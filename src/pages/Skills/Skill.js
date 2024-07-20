import React, { useEffect, useState } from 'react';
import axios from "axios";
import { URL } from "../../App";
import { motion } from "framer-motion";
import AppWrapper from '../../wrapper/AppWrapper';
import ToolTip from '../../components/ToolTip';


function Skill() {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  //getskills when component mounts
  useEffect(() => {
    async function getSkills() {
      try {
        const response = await axios.get(`${URL}/api/users/get-skills`);
        if (response.status === 201) {
          const skills = response.data.skillArray;
          setSkills(skills);
        }
      } catch (error) {
        console.error(error);
      }
    }
    async function getExperience() {
      try {
        const response = await axios.get(`${URL}/api/users/get-experience`);
        if (response.status === 201) {
          setExperience(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getSkills()
    getExperience()
  }, [])
  return (
    <>
      <h2 className='text-center text-4xl md:text-5xl font-bold mb-8'>My Skills & Experiences</h2>
      <div className='mt-2 lg:w-3/4 w-full flex lg:flex-row flex-col'>
        <motion.div className='flex flex-1 flex-wrap lg:justify-start lg:items-start lg:mr-20 justify-center items-center'>
          {skills.map((item, index) => {
            return <motion.div
              className='items-center flex-col m-4 transition-all ease-out duration-200'
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={index}>
              <div style={{ backgroundColor: item.skill.bgColor }} className="flex items-center justify-center text-center mx-auto lg:w-30 lg:h-30 w-20 h-20 rounded-full bg-slate-200 transition-transform duration-300 hover:shadow-md hover:shadow-stone-400 hover:scale-105">
                <img src={item.Icon} alt={item.skill.Name} className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center" />
              </div>
              <p className='text-center justify-center mt-3 lg:mt-3 text-slate-800'>{item.skill.Name}</p>
            </motion.div>
          })}
        </motion.div>
        {/* experiences */}
        <div className='flex-1 flex justify-start items-center flex-col md:mt-8'>
          {experience.map((item, index) => {
            return <motion.div key={index} className='w-full flex flex-row justify-start my-4'>
              <div className="lg:mr-4 mr-1">
                <p className="font-bold">{item.Year}</p>
              </div>
              <motion.div className="flex-1">
                <ToolTip text={item.Details}>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-start mb-4 cursor-pointer"
                    data-tip
                    data-for={item.workName}
                    key={item.workName}
                  >
                    <h4 className="font-bold text-slate-400 mt-1">{item.workName}</h4>
                    <p className="text-sm">{item.CompanyName}</p>
                  </motion.div>
                </ToolTip>
              </motion.div>
            </motion.div>
          })}
        </div>
      </div>
    </>
  )
}

export default AppWrapper(Skill, "skills");