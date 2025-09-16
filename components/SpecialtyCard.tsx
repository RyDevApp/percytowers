
import React from 'react';

interface SpecialtyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <div className="flex justify-center items-center mb-6 h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-serif text-center mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default SpecialtyCard;
