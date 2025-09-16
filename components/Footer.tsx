
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Percy Towers, LLC. All Rights Reserved.</p>
        <p className="text-xs text-gray-400 mt-1">percytowers.com</p>
      </div>
    </footer>
  );
};

export default Footer;
