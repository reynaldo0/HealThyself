import React from "react";
const Typed = require("react-typed").default;

const AnimatedText = ({ text }) => {
    return (
        <div className="animated-text">
            <Typed
                strings={[text]}
                typeSpeed={50}
                backSpeed={25}
                backDelay={2000}
                startDelay={1000}
                loop
                showCursor
                cursorChar="|"
            />
        </div>
    );
};

export default AnimatedText;
