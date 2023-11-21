"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex space-x-6 px-5 h-20 items-center bg-gradient-radial from-sky-300 to-sky-700">
      <Link href="/">
        <Image src="/images/logo.png" alt="logo" height={70} width={70} />
      </Link>
    </nav>
  );
};

export default Navbar;
