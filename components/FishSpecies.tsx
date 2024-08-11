import React from 'react';

const fishSpecies = [
  { name: 'Tilapia', environment: 'Freshwater', growthRate: 'Fast' },
  { name: 'Salmon', environment: 'Saltwater', growthRate: 'Moderate' },
  { name: 'Catfish', environment: 'Freshwater', growthRate: 'Fast' },
  { name: 'Trout', environment: 'Freshwater', growthRate: 'Moderate' },
];

const FishSpecies = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Fish Species for Farming</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fishSpecies.map((fish, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{fish.name}</h3>
            <p>Environment: {fish.environment}</p>
            <p>Growth Rate: {fish.growthRate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FishSpecies;
