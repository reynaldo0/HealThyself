import { useState, useEffect } from 'react';

const Dialog = () => {
    const dialogs = [
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            audio: 'audio/welcome.mp3'
        },
        {
            text: "cukimaiiiiiiiiii",
            audio: 'audio/welcome.mp3'
        },
        {
            text: "hitammmmmmmmmmmmmm",
            audio: 'audio/welcome.mp3'
        }
    ];

    const [currentDialogIndex, setCurrentDialogIndex] = useState(0);
    const [isDialogVisible, setIsDialogVisible] = useState(true);

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

    const handleNext = () => {
        if (currentDialogIndex < dialogs.length - 1) {
            setCurrentDialogIndex(currentDialogIndex + 1);
        } else {
            setIsDialogVisible(false);
        }
    };

    const handleSkip = () => {
        setIsDialogVisible(false);
    };

    return isDialogVisible && (
        <div className="absolute inset-0 bg-black/60 z-20 backdrop-blur-md w-full flex items-center">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
                    <img src='/maskot.png' alt="maskot" className='w-[150px] md:w-[300px] h-auto' />

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
