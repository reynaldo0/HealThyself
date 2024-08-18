import React, { useRef, useState } from 'react';

const CustomVideo = ({ src, cloudOverlay }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="relative">
            <video
                ref={videoRef}
                className="w-full h-auto"
                src={src}
                onClick={togglePlay}
                controls={false} // Disable default controls
            />
            <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center text-white text-4xl"
            >
                {!isPlaying && (
                    <span className='text-4xl bg-white/15 rounded-full flex justify-center items-center p-4'>
                        <span className='ml-1'>&#9658;</span>
                    </span>
                )}
            </button>
        </div>
    );
};

export default CustomVideo;
