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
      {/* Add your team content here */}
    </section>
  );
};

export default Team;
