
// import React from 'react'
export default function AboutMe() {
    return (
      <div>
          <h2 className="text-3xl font-bold leading-tight text-black dark:text-yellow-400 sm:text-4xl lg:text-5xl pb-10">About Me</h2>
      <section className=" overflow-hidden  md:pt-0 sm:pt-16 2xl:pt-16 about">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
  
              <div>
                  <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Hey 👋 I
                      am
                      <br className="block sm:hidden" /> Hrushikesh Gawade
                  </h2>
                  <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-200 md:mt-8">
          I'm a passionate frontend developer and UI/UX designer, dedicated to crafting engaging and intuitive digital experiences. With a keen eye for design and a love for clean, efficient code, I transform ideas into responsive, user-friendly websites and applications. My goal is to bridge the gap between aesthetics and functionality, creating solutions that not only look great but also provide seamless user interactions.
                  </p>
              </div>
  
              <div >
                <img src="public\img\laptop.png" alt="Laptop" />
              </div>
  
          </div>
      </div>
      </section>
      </div>
    )
  }
  