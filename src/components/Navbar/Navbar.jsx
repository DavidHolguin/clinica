// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', to: 'hero' },
    { name: 'Servicios', to: 'services' },
    { name: 'Cirujanos', to: 'surgeons' },
    { name: 'Testimonios', to: 'testimonials' },
  ];

  return (
    <nav className="fixed w-full glass-card z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-primary">Clínica CardioVital</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-primary cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90">
              Contactar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="glass-card px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90">
              Contactar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;