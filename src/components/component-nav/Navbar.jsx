import React, { useState } from 'react';
import './nav.css';

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [ishandelDropdown, setHandelDropdown] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handelDropdown = () => {
        setHandelDropdown(!ishandelDropdown);
    };

    return (
        <>
            <div className='bg-green-500 w-full flex justify-center'>
                <nav className="bg-blue-500 w-8/12 h-8 flex justify-between items-center relative">
                    <h1>GP.</h1>
                    <ul className="flex ">
                        <li className="bg-red-500 mr-4 hidden md:block">Home</li>
                        <li className="bg-red-500 mr-4 hidden md:block">About</li>
                        <li className="bg-red-500 mr-4 hidden md:block">Services</li>
                        <li className="bg-red-500 mr-4 hidden md:block">Portfolio</li>
                        <li className="bg-red-500 mr-4 hidden md:block">Team</li>
                        <li className="bg-red-500 mr-4 hidden md:block" onClick={toggleDropdown}>Drop Down</li>
                        {isDropdownOpen && (
                            <div className="absolute bg-gray-200 mt-6 ml-72 p-2 w-32 sm:hidden md:block">
                                <ul>
                                    <li>Option 1</li>
                                    <li>Option 2</li>
                                    <li>Option 3</li>
                                </ul>
                            </div>
                        )}
                        <li className="bg-red-500 hidden md:block">Contact</li>
                    </ul>
                    <a>Get Started</a>

                </nav>
                <button className='md:hidden' onClick={handelDropdown}>menu</button>
            </div>
            {ishandelDropdown && (
                <div className='w-screen h-full'>
                    <ul className="">
                        <li className="">Home</li>
                        <li className="">About</li>
                        <li className="">Services</li>
                        <li className="">Portfolio</li>
                        <li className="">Team</li>
                        <li className="">Drop Down</li>
                        <li className="">Contact</li>
                    </ul>
                    
                </div>

            )}



        </>

    );
}
