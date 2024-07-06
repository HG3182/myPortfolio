import { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the mobile menu after clicking
  };

  return (
    <nav className="relative px-4 py-4 flex justify-between items-center navb">
      <a href="#home" onClick={() => scrollToSection('home')} className="text-2xl font-bold text-gray-200">
        HG
      </a>

      {/* Hamburger menu for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-gray-200 focus:outline-none"
      >
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          {isOpen ? (
            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
          ) : (
            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          )}
        </svg>
      </button>

      {/* Navigation items */}
      <ul className={`${
        isOpen ? 'block' : 'hidden'
      } lg:flex absolute lg:relative top-full left-0 right-0 bg-gray-800 lg:bg-transparent flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 py-4 lg:py-0 mt-2 lg:mt-0 w-full lg:w-auto`}>
        <li><a className="text-lg font-semibold text-gray-400 hover:text-yellow-500 cursor-pointer" onClick={() => scrollToSection('home')}>Home</a></li>
        <li><a className="text-lg font-semibold text-gray-400 hover:text-yellow-500 cursor-pointer" onClick={() => scrollToSection('about')}>About Me</a></li>
        <li><a className="text-lg font-semibold text-gray-400 hover:text-yellow-500 cursor-pointer" onClick={() => scrollToSection('experience')}>Work Experience</a></li>
        <li><a className="text-lg font-semibold text-gray-400 hover:text-yellow-500 cursor-pointer" onClick={() => scrollToSection('projects')}>Projects</a></li>
        <li><a className="text-lg font-semibold text-gray-400 hover:text-yellow-500 cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}