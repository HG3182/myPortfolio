import React from 'react';
import HeroModel from "./HeroModel";

export default function Hero() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/HRUSHIKESH DEEPAK GAWADE _07_07_2024_12_23_08_PM.pdf';
        link.download = 'Hrushikesh Gawade_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16 hero">
            <div className="container px-6 py-16 mx-auto align-middle">
                <div className="items-center lg:flex">
                    <div className="flex items-center justify-center w-full h-full mt-6 lg:mt-0 lg:w-1/2">
                        <HeroModel />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-6xl">
                                <span className="block pb-2">Crafting Digital</span>
                                <span className="text-yellow-400">Experiences</span>
                            </h1>
            
                            <p className="mt-3 text-gray-600 dark:text-gray-100 text-lg">
                                From concept to code, I bring ideas to life with clean, efficient frontend development and intuitive UI/UX design. Let's create web solutions that not only look great but also deliver exceptional user experiences.
                            </p>
            
                            <button 
                                className="mt-6 px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-400 rounded-md hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                                onClick={handleDownload}
                            >
                                Download Resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}