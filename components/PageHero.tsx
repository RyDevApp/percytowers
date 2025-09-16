
import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-24 md:py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-serif drop-shadow-lg">{title}</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHero;
