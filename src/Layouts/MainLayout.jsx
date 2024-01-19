// import React from 'react';

import { Outlet } from "react-router-dom";
import Banner from "./Banner";

const MainLayout = () => {
    return (
        <div>
            <Banner/>
            <Outlet/>

        </div>
    );
};

export default MainLayout;