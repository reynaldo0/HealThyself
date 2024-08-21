import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';

const CustomVideo = ({ src }) => {
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
                className="absolute inset-0 flex items-center justify-center text-white text-4xl pointer-events-none"
            >
                {!isPlaying && (
                    <span className='text-xl md:text-2xl bg-white/20 border  rounded-full flex justify-center items-center size-16 md:size-20 pointer-events-auto'>
                        <FontAwesomeIcon icon={faPlay} />
                    </span>
                )}
            </button>
        </div>
    );
};

export default CustomVideo;
