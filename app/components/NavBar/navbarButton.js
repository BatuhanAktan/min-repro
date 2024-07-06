'use client'
import React, { useState } from 'react';

const NavbarButton = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const toggleSidebar = () => {
    console.log('triggered')
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.classList.toggle('md:left-[-100%]');
        navbar.classList.toggle('md:left-[-0px]');
        // document.body.classList.toggle('overflow-hidden')
    }
};

    return (
        <div className='hidden md:block text-2xl z-30'>
            <button className='nav-button' onClick={toggleSidebar}>☰</button>
        </div>
    );
};

export default NavbarButton;
