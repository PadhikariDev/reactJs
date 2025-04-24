
import React from 'react'
import { skills } from '../constant'

function Skills() {
  return (
   <section id='skills'>
        <div className="container text-center mt-32">
            <h2 className='text-3xl mb-5 md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent '>Skills</h2>
            <p className='text-sm  mb-8 md:text-xl md:mb-20 md:mt-5'>
            The technologies I use to craft modern,responsive,and scalable web applications
            </p>
        </div>
        

     
        <div className='space-y-10 m-5 flex flex-wrap justify-between md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-6 '>
            {skills.map(skill => (
                <div key={skill.id} className='m-4 rounded-xl bg-white/10 backdrop-blur-md shadow-lg hover:bg-white/20  transition-transform duration-500 hover:-translate-y-3 filter grayscale hover:grayscale-0 md:flex md:items-center w-auto'>
                <img
                    className=' m-5 w-20 h-20 rounded-tr-xl rounded-2xl object-contain transition duration-500'
                    src={skill.image}
                /> <span className='ml-5 bg-gradient-to-r from-blue-600  md:m-0 to-purple-600 bg-clip-text text-transparent'>{skill.name}</span>
                </div>
            ))}
        </div>
     

   </section>
  )
}

export default Skills