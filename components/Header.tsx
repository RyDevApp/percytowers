
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const TowerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.5 8.25L12 3L4.5 8.25M19.5 8.25V18.75C19.5 19.1642 19.1642 19.5 18.75 19.5H5.25C4.83579 19.5 4.5 19.1642 4.5 18.75V8.25M10.5 19.5V15.75C10.5 15.3358 10.8358 15 11.25 15H12.75C13.1642 15 13.5 15.3358 13.5 15.75V19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 11.25H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 14.25H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const NavItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium transition-colors duration-300 ${isActive
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`
            }
        >
            {children}
        </NavLink>
    );
};


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors">
              <TowerIcon className="w-8 h-8 text-blue-600" />
              <span className="font-serif text-xl font-bold">Percy Towers, LLC</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-baseline space-x-4">
              <NavItem to="/">The Tower</NavItem>
              <NavItem to="/legal">Legal</NavItem>
              <NavItem to="/healthcare">Healthcare</NavItem>
              <NavItem to="/accounting">Accounting</NavItem>
              <NavItem to="/about">About Us</NavItem>
            </nav>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <NavItem to="/">The Tower</NavItem>
            <NavItem to="/legal">Legal</NavItem>
            <NavItem to="/healthcare">Healthcare</NavItem>
            <NavItem to="/accounting">Accounting</NavItem>
            <NavItem to="/about">About Us</NavItem>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
