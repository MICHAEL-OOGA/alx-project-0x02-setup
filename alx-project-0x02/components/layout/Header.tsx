import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-8 flex items-center justify-between">
      <h1 className="text-xl font-bold">My App</h1>

      <nav className="space-x-4">
        <Link href="/home" className="text-gray-700 hover:text-blue-500">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-500">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
