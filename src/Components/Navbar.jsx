import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({children}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <nav className="fixed left-0 top-0 z-[99999] w-full border-gray-200 bg-white backdrop-blur-md shadow-sm bg-opacity-70">
        <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.png" className="h-auto w-40" alt="gambar logo" />
          </a>
          <button
            onClick={handleMenuToggle}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-dropdown"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${isMenuOpen ? "block" : "hidden"}`}
            id="navbar-dropdown"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-white p-4 font-medium md:mt-0 md:flex-row md:items-center md:space-x-8 md:border-0 md:bg-transparent md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
              {children}
              <li className="relative">
                <button
                  onClick={handleDropdownToggle}
                  className="block rounded bg-baby-normal px-5 py-2 text-white transition-colors hover:bg-primary-200"
                >
                  Golongan
                </button>
                {isDropdownOpen && (
                  <div className="static md:absolute w-full right-0 mt-2 bg-white border p-2 border-gray-200 rounded-lg shadow-lg md:w-max">
                    <ul className="py-1 text-sm text-gray-700">
                      <li>
                        <Link to="/baby" className="block px-4 py-2 hover:bg-baby-normal/20 hover:text-baby-dark rounded-md">Bayi</Link>
                      </li>
                      <li>
                        <Link to="/child" className="block px-4 py-2 hover:bg-baby-normal/20 hover:text-baby-dark rounded-md">Anak-Anak</Link>
                      </li>
                      <li>
                        <Link to="/teen" className="block px-4 py-2 hover:bg-baby-normal/20 hover:text-baby-dark rounded-md">Remaja</Link>
                      </li>
                      <li>
                        <Link to="/adult" className="block px-4 py-2 hover:bg-baby-normal/20 hover:text-baby-dark rounded-md">Dewasa</Link>
                      </li>
                      <li>
                        <Link to="/elderly" className="block px-4 py-2 hover:bg-baby-normal/20 hover:text-baby-dark rounded-md">Lansia</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

Navbar.Item = ({ to, title }) => {
  return (
    <li>
      <a
        href={to}
        className="active relative block rounded px-3 py-2 text-gray-800 before:absolute before:-bottom-2 before:left-0 before:h-[2.5px] before:w-full before:scale-x-0 before:bg-current before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 md:p-0 md:before:opacity-100"
        aria-current="page"
      >
        {title}
      </a>
    </li>
  )
}

export default Navbar;
