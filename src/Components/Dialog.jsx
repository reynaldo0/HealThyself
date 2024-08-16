import { useState } from 'react';

const Dialog = () => {
    const dialogs = [
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            text: "cukimaiiiiiiiiii",
        },
        {
            text: "hitammmmmmmmmmmmmm",
        }
    ];

    const [currentDialogIndex, setCurrentDialogIndex] = useState(0);
    const [isDialogVisible, setIsDialogVisible] = useState(true);

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
        <div className="absolute inset-0 bg-black/60 z-20 backdrop-blur-md flex items-center">
            <div className="flex items-center justify-center gap-10">
                <img src='/maskot.png' alt="maskot" />

                <div className="flex flex-col items-end gap-4">
                    <div className="bg-white w-[800px] h-[125px] rounded-md p-4 text-base font-semibold">
                        {dialogs[currentDialogIndex].text}
                    </div>
                    <div className="flex gap-4">
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
    );
}

export default Dialog;
