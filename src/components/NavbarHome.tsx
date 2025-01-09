'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Squeeze } from 'hamburger-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#', label: 'Accueil' },
    { href: '#about', label: 'Moi' },
    { href: '#skills', label: 'Compétences' },
    { href: '#formations', label: 'Formations' },
    { href: '#experience', label: 'Experience' },
    { href: '#certificate', label: 'Certifications' },
    { href: '#gallery', label: 'Galerie' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://linkedin.com', Icon: FaLinkedin, hoverColor: 'hover:text-blue-600' },
    { href: 'https://twitter.com', Icon: FaXTwitter, hoverColor: 'hover:text-gray-700' },
    { href: 'https://github.com', Icon: FaGithub, hoverColor: 'hover:text-gray-800' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-white hover:text-[#9290C3] transition-colors"
          >
            MyApp
          </Link>

          {/* Menu button - Mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <Squeeze
              color="#73EC8B"
              size={24}
              toggled={isOpen}
              toggle={() => setIsOpen(!isOpen)}
              label="Toggle menu"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-lg font-semibold text-white hover:text-[#9290C3] 
                          transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}

            {/* Social Icons - Desktop */}
            <div className="ml-6 pl-6 border-l-2 border-[#9290C3] flex items-center space-x-4">
              {socialLinks.map(({ href, Icon, hoverColor }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white ${hoverColor} transform transition-all duration-200 hover:scale-110`}
                >
                  <Icon size={22} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          md:hidden 
          fixed left-0 right-0 
          transition-all duration-300 ease-in-out
          backdrop-blur-lg
          ${isOpen ? 'top-16 opacity-100' : '-top-full opacity-0'}
          ${scrolled ? 'bg-black/90' : 'bg-black/80'}
        `}>
          <div className="px-4 py-2 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-lg font-semibold text-white hover:text-[#9290C3] 
                          transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}