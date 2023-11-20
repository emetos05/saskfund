"use client";

import React from "react";
import Link from "next/link";

import { FcMoneyTransfer } from "react-icons/fc";

const Navbar = () => {
  return (
    <nav className="flex space-x-6 px-5 h-14 items-center bg-gradient-radial from-sky-300 to-sky-700">
      <Link href="/">
        <FcMoneyTransfer />
      </Link>
    </nav>
  );
};

export default Navbar;
