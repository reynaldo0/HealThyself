import React, { useState } from 'react';
import Home from '../Pages/Home';
import Option3d from '../Pages/Option3D';
import { useStateContext } from '../context/stateContext';

const HomeLayout = () => {
  const { open, setOpen } = useStateContext();
  const [transition, setTransition] = useState('fade-in');
  const [showWelcome, setShowWelcome] = useState(false);

  const handleBackToHome = () => {
    setTransition('fade-out');
    setTimeout(() => {
      setOpen(false);
      setTransition('fade-in');
    }, 500); 
  };

  return (
    <>
      {open ? (
        <div className={`${transition} ${showWelcome ? 'blur' : ''}`}>
          <Option3d onBack={handleBackToHome} />
        </div>
      ) : (
        <div className={transition}>
          <Home />
        </div>
      )}

    </>
  );
};

export default HomeLayout;
