import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userLoggedIn = localStorage.getItem('isLoggedIn');
        if (userLoggedIn === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', 'false');
        setIsLoggedIn(false);
        window.location.href = '/';
    };

    return (
        <nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
            <Link className="font-bold text-xl tracking-tight ml-5" to="/">Digital Farming</Link>
            <div className="flex items-center">
                <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/">Home</Link>
                {isLoggedIn ? (
                    <>
                        <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/preview">Preview</Link>
                        <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/graph">Graph</Link>
                        <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/chart">Chart</Link>
                        <button
                            onClick={handleLogout}
                            className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
                        >
                            Logout
                        </button>

                    </>
                ) : (
                    <>
                        <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/login">Login</Link>
                        <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/signup">Sign Up</Link>


                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
