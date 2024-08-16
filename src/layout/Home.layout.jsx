import React, { useState, useEffect } from "react";
import Option3d from "../Pages/Option3D";
import Home from "../Pages/Home.jsx";
import { useStateContext } from "../context/stateContext";

const HomeLayout = () => {
  const { open, setOpen } = useStateContext();
  const [transition, setTransition] = useState("fade-in");

  const handleBackToHome = () => {
    setTransition("fade-out");
    setTimeout(() => {
      setOpen(false);
      setTransition("fade-in");
    }, 500); // Durasi sama dengan animasi fade-out
  };

  const handleOpenOption3d = () => {
    setTransition("fade-out");
    setTimeout(() => {
      setOpen(true);
      setTransition("fade-in");
    }, 500);
  };

  return (
    <>
      {open ? (
        <div className={transition}>
          <Option3d onBack={handleBackToHome} />
        </div>
      ) : (
        <div className={transition}>
          <Home onStart={handleOpenOption3d} />
        </div>
      )}
    </>
  );
};

export default HomeLayout;
