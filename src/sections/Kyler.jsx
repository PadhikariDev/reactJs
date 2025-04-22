import React from 'react'

function Kyler() {
  return (
    <section id='home'>
      <div className="z-20">
        <div className="container h-screen flex items-center justify-center text-center">
            <div className='max-w-[800px] mx-auto'>

              <div className='mb-6'>
                <img class=" size-[200px] mx-auto rounded-full bg-gradient-to-t from-gray-700 to-gray-950 object-cover" src="pp.png" alt="image description"></img>

              </div>
                 <div>
                      <h1 className='mb-2 text-2xl font-extrabold capitalize leading-[1.2] md:text-5xl'>Sleek.<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Fast.</span> Responsive. Functional.</h1>
                      <p className='mt-5 text-sm font-bold capitalize md:text-xl'>I’m passionate about designing and developing websites that put the user first. Every site I build is responsive, intuitive, and built for performance.
                      </p>
                      <a
                        className="mt-5 px-5 py-3 inline-block capitalize font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md transition duration-300 hover:from-blue-400  hover:to-purple-400 "
                        href="#projects">
                        View My Work
                      </a>

                </div>
              </div>    
          </div>
      </div>
    </section>
  )
}

export default Kyler