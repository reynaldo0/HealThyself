import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="fixed left-0 top-0 z-[99999] w-full border-gray-200 bg-white shadow-lg bg-opacity-70">
        <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.png" className="h-auto w-40" alt="gambar logo" />
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
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
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-white p-4 font-medium md:mt-0 md:flex-row md:items-center md:space-x-8 md:border-0 md:bg-transparent md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
              <li>
                <a
                  id="homenav"
                  href="#home"
                  className="active relative block rounded px-3 py-2 text-gray-800 before:absolute before:-bottom-2 before:left-0 before:h-[2.5px] before:w-full before:scale-x-0 before:bg-current before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 md:p-0 md:before:opacity-100"
                  aria-current="page"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  id="nav-about"
                  href="#about"
                  className="relative block rounded px-3 py-2 text-gray-900 before:absolute before:-bottom-2 before:left-0 before:h-[2.5px] before:w-full before:scale-x-0 before:bg-current before:opacity-0 before:transition before:content-[''] hover:bg-gray-100 hover:before:scale-x-100 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:before:opacity-100 md:hover:bg-transparent md:hover:text-primary-100 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Tentang
                </a>
              </li>
              <li>
                <a
                  id="nav-kasus"
                  href="#kasus"
                  className="relative block rounded px-3 py-2 text-gray-900 before:absolute before:-bottom-2 before:left-0 before:h-[2.5px] before:w-full before:scale-x-0 before:bg-current before:opacity-0 before:transition before:content-[''] hover:bg-gray-100 hover:before:scale-x-100 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:before:opacity-100 md:hover:bg-transparent md:hover:text-primary-100 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Kasus
                </a>
              </li>
              <li>
                <a
                  id="nav-pengaruh"
                  href="#pengaruh"
                  className="relative block rounded px-3 py-2 text-gray-900 before:absolute before:-bottom-2 before:left-0 before:h-[2.5px] before:w-full before:scale-x-0 before:bg-current before:opacity-0 before:transition before:content-[''] hover:bg-gray-100 hover:before:scale-x-100 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:before:opacity-100 md:hover:bg-transparent md:hover:text-primary-100 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Pengaruh
                </a>
              </li>
              <li>
                <a
                  id="nav-data"
                  href="#data"
                  className="relative block rounded px-3 py-2 text-gray-900 before:absolute before:-bottom-2 before:left-0 before:h-[2.5px] before:w-full before:scale-x-0 before:bg-current before:opacity-0 before:transition before:content-[''] hover:bg-gray-100 hover:before:scale-x-100 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:before:opacity-100 md:hover:bg-transparent md:hover:text-primary-100 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Data
                </a>
              </li>
              <li>
                <Link
                  to="/"
                  className="block rounded rounded-l-full rounded-r-full bg-primary px-5 py-2 text-white transition-colors hover:bg-primary-200"
                >
                  Kembali
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
