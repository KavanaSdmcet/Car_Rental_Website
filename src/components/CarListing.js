import React from 'react';

function CarListing() {
  const cars = [
    { id: 1, name: 'Toyota Corolla', price: '₹1000/day', image: '/images/car1.png' },
    { id: 2, name: 'Honda Civic', price: '₹1200/day', image: '/images/car2.png' },
    { id: 3, name: 'Ford Mustang', price: '₹2000/day', image: '/images/car3.png' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Available Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div key={car.id} className="bg-white rounded-lg shadow-lg p-6">
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
            <h2 className="text-2xl font-bold mt-4">{car.name}</h2>
            <p className="text-lg text-gray-600">{car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarListing;
