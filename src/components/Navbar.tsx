import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Courses', id: 'courses' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'Enroll', id: 'enroll' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img
              src="/Logo 1.png"
              alt="Minhaj Institution"
              className="h-16 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden ml-3">
              <h1 className="text-2xl font-bold text-emerald-900">Minhaj Institution</h1>
              <p className="text-xs text-emerald-700">Learn Quran Online</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-emerald-700 font-medium transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('enroll')}
              className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-emerald-900 hover:text-emerald-700 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-gray-700 hover:text-emerald-700 font-medium py-2 transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('enroll')}
              className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-md"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
