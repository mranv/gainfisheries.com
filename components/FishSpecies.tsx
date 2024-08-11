// components/FishSpecies.tsx
import React from "react";
import Image from "next/image";

const fishSpecies = [
  {
    name: "Tilapia",
    environment: "Freshwater",
    growthRate: "Fast",
    image: "/api/placeholder/400/300",
  },
  {
    name: "Salmon",
    environment: "Saltwater",
    growthRate: "Moderate",
    image: "/api/placeholder/400/300",
  },
  {
    name: "Catfish",
    environment: "Freshwater",
    growthRate: "Fast",
    image: "/api/placeholder/400/300",
  },
  {
    name: "Trout",
    environment: "Freshwater",
    growthRate: "Moderate",
    image: "/api/placeholder/400/300",
  },
];

const FishSpecies = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-sea-green text-center mb-8">
        Fish Species for Farming
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {fishSpecies.map((fish, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <div className="relative h-48">
              <Image
                src={fish.image}
                alt={fish.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-ocean-blue mb-2">
                {fish.name}
              </h3>
              <p className="text-gray-600">Environment: {fish.environment}</p>
              <p className="text-gray-600">Growth Rate: {fish.growthRate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FishSpecies;
