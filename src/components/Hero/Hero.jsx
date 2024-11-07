// src/components/Hero/Hero.jsx
import React from 'react';
import { Link } from 'react-scroll';
import { HiHeart, HiArrowDown } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              Cuidamos tu 
              <span className="text-primary"> corazón</span>
              <HiHeart className="inline-block ml-2 text-primary animate-pulse" />
            </h1>
            <p className="text-lg text-gray-600">
              Expertos en rehabilitación cardiovascular, comprometidos con tu salud y bienestar. 
              Tecnología de vanguardia y atención personalizada para tu recuperación.
            </p>
            <div className="flex space-x-4">
              <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
                Agendar Cita
              </button>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition cursor-pointer"
              >
                Conoce más
                <HiArrowDown className="ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="glass-card p-8 rounded-2xl relative z-10">
              <img
                src="/api/placeholder/600/400"
                alt="Medical Team"
                className="rounded-xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;