// src/components/Card.jsx
import React from 'react';

const Card = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src="https://via.placeholder.com/300x200"
        alt="Placeholder"
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Card Title
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
          dolor vitae turpis dapibus condimentum vel a ante.
        </p>
      </div>
      <div className="bg-gray-100 py-2 px-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
