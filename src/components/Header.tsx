import React from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#profiles" className="text-gray-600 hover:text-purple-600 transition-colors">Profiles</a>
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</a>
            <button className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 animate-pulse-shadow flex items-center space-x-2">
              <span>Try Free</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#profiles" className="text-gray-600 hover:text-purple-600 transition-colors">Profiles</a>
              <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</a>
              <button className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Try Free</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}