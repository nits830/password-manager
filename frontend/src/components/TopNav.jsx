import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center">
     
      <div className="text-xl font-semibold">
        <Link to="/">Password Manager</Link>
      </div>

      {/* Right: Store Password & Retrieve Password Buttons */}
      <div className="space-x-4">
      <Link to="/signup">
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
            Signup
          </button>
        </Link>
        <Link to="/signin">
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
           SignIn
          </button>
        </Link>
        
      </div>
    </nav>
  );
};

export default TopNav;
