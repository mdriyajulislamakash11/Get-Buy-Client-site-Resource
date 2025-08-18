import React from 'react';
import Navber from '../components/Navber';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div>
            <Navber />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Mainlayout;