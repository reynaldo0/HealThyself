// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ teamText = "Team", teamLink = "/team" }) => {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/logo.png" className="h-auto w-40" alt="Flowbite Logo" />
      </a>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <Link to={teamLink} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {teamText}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
