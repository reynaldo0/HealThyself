import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ teamText = "Team", teamLink = "/", direction = "left" }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    const container = document.querySelector('.page-container');
    if (direction === 'left') {
      container.classList.add('slide-out-left');
    } else {
      container.classList.add('slide-in-right');
    }
    setTimeout(() => {
      navigate(teamLink);
    }, 500);
  };

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/logo.png" className="h-auto w-40" alt="Logo" />
      </a>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          onClick={handleNavigation}
          className="text-white bg-secondary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
        >
          {teamText}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
