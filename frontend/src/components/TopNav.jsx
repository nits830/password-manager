import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <nav className="bg-black text-white py-4 px-6 flex justify-between items-center">
            {/* Left: Password Manager */}
            <div className="text-xl font-semibold">
                Password Manager
            </div>

            {/* Right: Store Password & Retrieve Password Buttons */}
            <div className="space-x-4">
                <Link to="/add">
                    <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
                        Store Password
                    </button>
                </Link>
                <Link to="/retrieve">
                    <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
                        Retrieve Password
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default TopNav;
