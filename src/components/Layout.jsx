import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ScrollRestoration />
        </div>
    );
};

export default Layout;
