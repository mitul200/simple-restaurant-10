// import React from 'react';

import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Footer from "../utils/Footer";

const MainLayout = () => {
    return (
        <div>
            <Banner/>
            <Outlet/>
            <Footer/>

        </div>
    );
};

export default MainLayout;