// import React from 'react';

import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Footer from "../utils/Footer";
import AuthorInfo from "../Pages/AuthorInfo/AuthorInfo";

const MainLayout = () => {
    return (
        <div>
            <Banner/>
            <AuthorInfo/>
            <Outlet/>
            <Footer/>

        </div>
    );
};

export default MainLayout;