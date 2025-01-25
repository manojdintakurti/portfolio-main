import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Testimonials', 'Blog', 'Contact'];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              SD
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Sai Manoj Dintakurti
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/manojdintakurti" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-purple-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/manojdintakurti/" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-purple-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/manojdintakurti" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-purple-600 transition-colors">
              <Twitter size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-600 hover:text-purple-600"
                >
                  {item}
                </button>
              ))}
              <div className="flex space-x-4 py-2">
                <a href="https://github.com/manojdintakurti" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/manojdintakurti/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
                <a href="https://x.com/manojdintakurti" target="_blank" rel="noopener noreferrer">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}