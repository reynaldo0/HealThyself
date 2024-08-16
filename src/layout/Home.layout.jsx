import { Outlet } from "react-router-dom";
import Navbar from "../Components/HomeNav.jsx";
import { useState } from "react";
import { useStateContext } from "../context/stateContext";
import Option3d from "../Pages/Option3D";
import Home from "../Pages/Home.jsx";

const HomeLayout = () => {
    const { open, setOpen } = useStateContext(); // Use setOpen from context
    
    const handleBackToHome = () => {
        setOpen(false); // This will switch back to Home
    };

    return (
        <>
            {open
                ? <Option3d onBack={handleBackToHome} /> // Pass the function as a prop
                : <Home />
            }
        </>
    );
}

export default HomeLayout;
