import React, { useState } from 'react';
import Home from '../Pages/Home';
import Option3d from '../Pages/Option3D';
import { useStateContext } from '../context/stateContext';
import WelcomeScreen from './WelcomeScreen';

const HomeLayout = () => {
  const { open, setOpen } = useStateContext();
  const [transition, setTransition] = useState('fade-in');
  const [showWelcome, setShowWelcome] = useState(false);

  const handleBackToHome = () => {
    setTransition('fade-out');
    setTimeout(() => {
      setOpen(false);
      setTransition('fade-in');
    }, 500); // Duration matches fade-out animation
  };

  const handleOpenOption3d = () => {
    setTransition('fade-out');
    setTimeout(() => {
      setShowWelcome(true); // Show the welcome screen
    }, 500);
  };

  const handleProceedToOption3d = () => {
    setShowWelcome(false);
    setOpen(true);
    setTransition('fade-in');
  };

  return (
    <>
      {showWelcome ? (
        <WelcomeScreen onProceed={handleProceedToOption3d} />
      ) : open ? (
        <div className={`${transition} ${showWelcome ? 'blur' : ''}`}>
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
