import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">Car Rental Website</h1>
        <div>
          <Link to="/" className="mx-4 hover:underline">Home</Link>
          <Link to="/cars" className="mx-4 hover:underline">Car Listings</Link>
          <Link to="/about" className="mx-4 hover:underline">About Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
