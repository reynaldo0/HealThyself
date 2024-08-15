import { Outlet } from "react-router-dom";
import Navbar from "../Components/HomeNav.jsx";
import { useState } from "react";
import { useStateContext } from "../context/stateContext.jsx";
import Option3d from "../Pages/Option3D.jsx";
import Home from "../Pages/Home.jsx";

const HomeLayout = () => {
    const { open } = useStateContext()
    return (
        <>
            {open
                ? <Option3d />
                : <Home />
            }
        </>
    );
}

export default HomeLayout;