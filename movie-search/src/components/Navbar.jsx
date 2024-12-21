import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-red-800 to-indigo-800 p-4 text-white">
      <div className="container mx-auto">
        <Link to="/" className="text-6xl font-bold font-serif">SilverScreen 🎥</Link>
      </div>
    </nav>
  );
};

export default Navbar;