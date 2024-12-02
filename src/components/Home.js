import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Home() {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  return (
    <div className="relative min-h-screen">
      {/* Slightly Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('${process.env.PUBLIC_URL}/images/background.jpg')",
          filter: 'blur(2px)', // Minimal blur effect
        }}
      ></div>

      {/* Content Overlay */}
      <div className="relative bg-black bg-opacity-50 min-h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Our Car Rental Service
        </h1>
        <p className="text-xl mb-8">
          Your next adventure starts here. Rent a car with ease!
        </p>
        <button
          className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          onClick={() => navigate('/cars')} // Navigate to Car Listing page
        >
          Explore Our Cars
        </button>
      </div>
    </div>
  );
}

export default Home;
