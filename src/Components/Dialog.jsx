import { useState, useEffect, useRef } from 'react';

const Dialog = () => {
    const dialogs = [
        {
            text: "Halo Selamat datang di website Healtyself",
            audio: '/audio/datang.mp3',
            mascot: '/maskot/datang.gif',
            fallbackMascot: '/maskot/diam.png',
            duration: 10000
        },
        {
            text: "Silahkan pilih kategori usia yang kamu butuhkan",
            audio: '/audio/pilih.mp3',
            mascot: '/maskot/pilih.gif',
            fallbackMascot: '/maskot/diam.png'
        },
    ];

    const [currentDialogIndex, setCurrentDialogIndex] = useState(0);
    const [isDialogVisible, setIsDialogVisible] = useState(true);
    const [isGIFLoaded, setIsGIFLoaded] = useState(true);
    const [isFallbackImage, setIsFallbackImage] = useState(false);
    const mediaRef = useRef(null);

    useEffect(() => {
        if (isDialogVisible) {
            const audio = new Audio(dialogs[currentDialogIndex].audio);
            audio.play();
            return () => {
                audio.pause();
                audio.currentTime = 0;
            };
        }
    }, [currentDialogIndex, isDialogVisible]);

    useEffect(() => {
        if (mediaRef.current) {
            mediaRef.current.addEventListener('load', handleImageLoad, { once: true });
        }
    }, [currentDialogIndex]);

    const handleNext = () => {
        if (currentDialogIndex < dialogs.length - 1) {
            setCurrentDialogIndex(currentDialogIndex + 1);
            setIsGIFLoaded(true);
            setIsFallbackImage(false);
        } else {
            setIsDialogVisible(false);
        }
    };

    const handleSkip = () => {
        setIsDialogVisible(false);
    };

    const handleImageLoad = () => {
        setTimeout(() => {
            setIsFallbackImage(true);
        }, 2800); // Delay before switching to fallback image
    };

    const currentMedia = dialogs[currentDialogIndex].mascot;
    const fallbackMedia = dialogs[currentDialogIndex].fallbackMascot;
    const isGif = currentMedia.endsWith('.gif');

    return isDialogVisible && (
        <div className="absolute inset-0 bg-black/60 z-20 backdrop-blur-md w-full flex items-center">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
                    <img 
                        src={isFallbackImage ? fallbackMedia : currentMedia} 
                        alt="maskot" 
                        className='w-[150px] md:w-[300px] h-auto' 
                        ref={mediaRef}
                    />
                    
                    <div className="flex flex-col w-full gap-4">
                        <div className="bg-white w-full md:w-[90%] max-w-[800px] min-h-[125px] rounded-md p-4 text-base font-semibold">
                            {dialogs[currentDialogIndex].text}
                        </div>
                        <div className="flex justify-end md:justify-start gap-4">
                            <button
                                onClick={handleSkip}
                                className="text-white bg-secondary/50 hover:bg-secondary/90 font-medium rounded-lg text-sm px-8 py-2 text-center"
                            >
                                skip
                            </button>
                            <button
                                onClick={handleNext}
                                className="text-white bg-secondary hover:bg-secondary/90 font-medium rounded-lg text-sm px-8 py-2 text-center"
                            >
                                next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialog;
