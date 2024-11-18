'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { TiThMenuOutline } from 'react-icons/ti';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuActive = () => {
    setIsOpen(!isOpen);
  };

  const menuClose = () => {
    setIsOpen(false);
  };

  return (
    <>
    {/* Nav */}
    <nav className="flex items-center justify-between p-4 bg-[#070F2B] text-white fixed top-0 left-0 w-full z-50 shadow-lg border-b-2 border-[#535C91]">
        {/* Logo */}
        <div className="text-2xl font-bold ml-5">
          <Link href="/">MyApp</Link>
        </div>

        {/* Bouton Hamburger pour mobile */}
        <button
          className="text-white text-2xl md:hidden focus:outline-none"
          onClick={menuActive}
          aria-label="Toggle Menu"
        >
          {isOpen ? <IoClose /> : <TiThMenuOutline />}
        </button>

        {/* Menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full  md:bg-opacity-0 bg-black bg-opacity-80 md:static md:flex md:items-center md:justify-end md:w-auto`}
        >
          <Link
            href="/"
            onClick={menuClose}
            className="block px-4 py-2 text-xl font-semibold hover:bg-[#9290C3] md:hover:bg-transparent md:hover:text-[#9290C3] transition duration-300"
          >
            Accueil
          </Link>
          <Link
            href="/about"
            onClick={menuClose}
            className="block px-4 py-2 text-xl font-semibold hover:bg-[#9290C3] md:hover:text-[#9290C3] md:hover:bg-transparent transition duration-300"
          >
            Moi
          </Link>
          <Link
            href="/experience"
            onClick={menuClose}
            className="block px-4 py-2 text-xl font-semibold hover:bg-[#9290C3] md:hover:text-[#9290C3] md:hover:bg-transparent transition duration-300"
          >
            Experience
          </Link>
          <Link
            href="/gallery"
            className="block px-4 py-2 text-xl font-semibold hover:bg-[#9290C3] md:hover:text-[#9290C3] md:hover:bg-transparent transition duration-300"
          >
            Galerie
          </Link>
          <Link
            href="/contact"
            onClick={menuClose}
            className="block px-4 py-2 text-xl font-semibold hover:bg-[#9290C3] md:hover:text-[#9290C3] md:hover:bg-transparent transition duration-300"
          >
            Contact
          </Link>

          {/* Séparateur et Icônes de Réseaux Sociaux */}
          <div className="border-t-2 mx-10 md:mx-0 border-[#9290C3] p-2 md:border-b-2 md:border-[#9290C3] md:flex md:items-center mt-4 md:mt-0 md:space-x-4 flex-col md:flex-row">
            <div className="flex justify-center items-center mt-5 md:mt-0 md:mb-0 mb-5 space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className="hover:text-blue-600 transition duration-300 hover:scale-90" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={30} className="hover:text-gray-700 transition duration-300 hover:scale-90" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="hover:text-gray-800 transition duration-300 hover:scale-90" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}