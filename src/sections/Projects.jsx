import { Section } from 'lucide-react'
import React from 'react'

function Projects() {
  return (
      <section id='project'>
          <div className="container text-center">
            <h2 className='text-3xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent '>Projects</h2>
            <p className='text-sm mt-2 md:text-xl md:mb-20 md:mt-5'>Have a look to  my work!</p>
          </div>

          <div className='space-y-10 mid:space-y-0 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3'>
            {projects.map(project=>(
                <div key={project.id}>
                <img className='rounded-tr-2xl rounded-tl-2xl' src={project.image} alt="project.title" />
                <div className='bg-gray-900 rounded-br-2xl rounded-bl-2l px-4 py-6'>
                      <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                      <p className='line-clamp-3 mb-6'>{project.description}</p>

                      <div className="mb-8 felx flex-wrap gap-2">
                          {project.stack.map(tech =>(
                            <span key={tech.id} className='px-2 py-1 ml-1 bg-gray-800 text-white rounded-full mb-2'>
                              {tech}
                            </span>
                          ))}
                      </div>
                </div>
                
                </div>

            ))}  
          
          </div>


   
      </section>
  )
}
import { projects } from '../constant'

export default Projects

