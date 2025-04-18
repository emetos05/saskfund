"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUserPlus, FaSearch, FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-5 h-20 bg-gradient-radial from-sky-300/70 to-sky-700/70 shadow-lg">
      <Link href="/" className="transform transition-transform duration-200 hover:scale-105">
        <Image src="/images/logo.png" alt="logo" height={70} width={70} />
      </Link>
      
      <div className="flex items-center space-x-6">
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
    </nav>
  );
};

export default Navbar;
