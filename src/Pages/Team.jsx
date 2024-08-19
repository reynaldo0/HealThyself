import React, { useEffect } from "react";
import Navbar from "../Components/HomeNav";

const Team = () => {
  useEffect(() => {
    const container = document.querySelector('.page-container');
    container.classList.add('fade-in'); // Apply fade-in class on load
  }, []);

  return (
    <section className="page-container"> {/* Keep the class for targeting */}
      <Navbar teamText="Kembali ke Home" teamLink="/" direction="right" />

      <div className="px-10 md:px-40 py-12">
        <h1 className="text-center text-3xl font-poppins font-bold mb-8 ">TEAM KAMI</h1>
        {/* Scrollable row for all team members */}
        <div className="overflow-x-scroll">
          <div className="flex space-x-12 w-max ">
            {/* Team Member 1 */}
            <div className="bg-white p-8 rounded-full border text-center testing">
              <img
                className="w-45 h-45 mx-auto rounded-full object-cover border-4 border-gray-200"
                src="/team/salman.jpg"
                alt="Muhammad Salman Alfarisi"
              />
              <h3 className="text-xl font-semibold mt-4">Muhammad Salman Alfarisi</h3>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-8 bg-slate-300 rounded-full border text-center testing">
              <img
                className="w-45 h-45 mx-auto rounded-full object-cover border-4 border-gray-200"
                src="/team/akmal.jpg"
                alt="Profile"
              />
              <h3 className="text-xl font-semibold mt-4">John Doe</h3>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-8 bg-slate-300 rounded-full border text-center testing">
              <img
                className="w-45 h-45 mx-auto rounded-full object-cover border-4 border-gray-200"
                src="/team/rama.jpg"
                alt="Profile"
              />
              <h3 className="text-xl font-semibold mt-4">Jane Doe</h3>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white p-8  bg-slate-300 rounded-full border text-center testing">
              <img
                className="w-45 h-45 mx-auto rounded-full object-cover border-4 border-gray-200"
                src="/team/aldo.jpg"
                alt="Profile"
              />
              <h3 className="text-xl font-semibold mt-4">Sarah Connor</h3>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="bg-white p-8 bg-slate-300 rounded-full border text-center testing">
              <img
                className="w-45 h-45 mx-auto rounded-full object-cover border-4 border-gray-200"
                src="/team/nazla.jpg"
                alt="Profile"
              />
              <h3 className="text-xl font-semibold mt-4">Alex Johnson</h3>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;
