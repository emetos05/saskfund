"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUserPlus, FaSearch, FaHome, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-radial from-sky-300/70 to-sky-700/70 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="transform transition-transform duration-200 hover:scale-105">
            <Image src="/images/logo.png" alt="logo" height={70} width={70} />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className="flex items-center text-white font-semibold transform transition-transform duration-200 hover:scale-105"
            >
              <FaHome className="mr-2" />
              Home
            </Link>
            <Link 
              href="/register" 
              className="flex items-center text-white font-semibold transform transition-transform duration-200 hover:scale-105"
            >
              <FaUserPlus className="mr-2" />
              Create Account
            </Link>
            <Link 
              href="/search" 
              className="flex items-center text-white font-semibold transform transition-transform duration-200 hover:scale-105"
            >
              <FaSearch className="mr-2" />
              Search Clients
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-sky-700/90">
          <Link 
            href="/" 
            className="flex items-center text-white font-semibold px-3 py-2 rounded-md hover:bg-sky-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaHome className="mr-2" />
            Home
          </Link>
          <Link 
            href="/register" 
            className="flex items-center text-white font-semibold px-3 py-2 rounded-md hover:bg-sky-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaUserPlus className="mr-2" />
            Create Account
          </Link>
          <Link 
            href="/search" 
            className="flex items-center text-white font-semibold px-3 py-2 rounded-md hover:bg-sky-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaSearch className="mr-2" />
            Search Clients
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
