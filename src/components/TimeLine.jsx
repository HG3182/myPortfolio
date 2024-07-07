import React from 'react'

export default function TimeLine() {
  return (
    <div>
      <h2 className="text-3xl font-bold leading-tight text-black dark:text-yellow-400 sm:text-4xl lg:text-5xl pb-10">Work Experience / Education</h2>
      <ol className="relative border-s border-yellow-200 dark:border-yellow-700 my-10">                  
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-yellow-400"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">January 8 2024 - June 28 2024</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-yellow-400">Yamazaki Mazak India Pvt Ltd</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
          Developed and launched a company website with responsive design and user-friendly UI/UX.
          Collaborated with backend developers to integrate APIs and server-side logic.
          Also worked on an Order Management Application using modern frameworks (e.g.Angular) to improve internal processes.
          Actively participate in team meetings and contribute to project planning and design</p>
    </li>
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-yellow-400"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">2020 - 2024</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-yellow-400">JSPM Rajarshi Shahu College of Engineering</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-300">
          Completed my Bachelor's degree in Electronics and Telecommunication Engineering (ENTC). During my time here, I gained a strong foundation in electronic systems, signal processing, and communication technologies. This diverse curriculum not only honed my technical skills but also fostered my passion for integrating hardware knowledge with software development, setting the stage for my career in frontend and UI/UX development.
        </p>
    </li>
    <li className="ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-yellow-400"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">2018 - 2019</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-yellow-400">Sant Tukaram Eng.Med School & Jr.College</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-300">
          Completed my Higher Secondary Education (12th grade) with a focus on Science. This foundational period ignited my passion for scientific inquiry and problem-solving. The rigorous curriculum in physics, chemistry, and mathematics laid a strong groundwork for my future engineering studies and sparked my interest in technology and its applications.
        </p>
    </li>
</ol>

    </div>

  )
}
