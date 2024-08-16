import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = ({ onProceed }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const audio = new Audio('/audio/welcome.mp3');
    let isAudioPlaying = false;

    const playAudio = () => {
      if (!isAudioPlaying) {
        audio.play();
        isAudioPlaying = true;
      }
    };

    playAudio();

    // Transition to the next screen after the audio ends
    const handleAudioEnd = () => {
      onProceed();
    };

    audio.addEventListener('ended', handleAudioEnd);

    return () => {
      audio.removeEventListener('ended', handleAudioEnd);
      // Pause and reset the audio to avoid issues on component unmount
      audio.pause();
      audio.currentTime = 0;
    };
  }, [onProceed]);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl mb-4">Selamat Datang!</h1>
        <p className="text-lg">Silakan tunggu beberapa saat...</p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
