'use client'
import Link from "next/link";
import React, { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

const navLinks = (
  <>
    <li className="font-bold text-sm text-dark cursor-pointer hover:text-red-900 transition ease-in duration-200">
      <Link href="/">Home</Link>
    </li>

    <li className="font-bold text-sm text-dark cursor-pointer hover:text-red-900 transition ease-in duration-200">
      <Link href="/deals">Deals</Link>
    </li>
    <li className="font-bold text-sm text-dark cursor-pointer hover:text-red-900 transition ease-in duration-200">
      <a>New Arrivals</a>
    </li>
    <li className="font-bold text-sm text-dark cursor-pointer hover:text-red-900 transition ease-in duration-200">
      <a>Packages</a>
    </li>
  </>
);
const dropNavLinks = (
  <>
    <li className="font-bold text-sm text-dark cursor-pointer  transition ease-in duration-200 border border-dark px-27 py-1.5 rounded-2xl hover:bg-black hover:text-white">
      <Link href="/">Home</Link>
    </li>

    <li className="font-bold text-sm text-dark cursor-pointer  transition ease-in duration-200 border border-dark px-27 py-1.5 rounded-2xl hover:bg-black hover:text-white">
      <Link href="/deals">Deals</Link>
    </li>
    <li className="font-bold text-sm text-dark cursor-pointer  transition ease-in duration-200 border border-dark px-21 py-1.5 rounded-2xl hover:bg-black hover:text-white">
      <a>New Arrivals</a>
    </li>
    <li className="font-bold text-sm text-dark cursor-pointer  transition ease-in duration-200 border border-dark px-24 py-1.5 rounded-2xl hover:bg-black hover:text-white">
      <a>Packages</a>
    </li>
  </>
);
const Navbar = () => {
   const [isMenuClick , setIsMenuClick] = useState<boolean>(false) 
  return (
    <nav className="relative w-full">
      <div className="py-2 flex justify-between items-center gap-4 max-w-7xl mx-auto px-4">
        {/* dropdown menu */}
        <div
          onClick={() => setIsMenuClick(!isMenuClick)}
          className="w-8 h-8 lg:hidden flex justify-center items-center cursor-pointer"
        >
          <button className="cursor-pointer">
            {isMenuClick ? (
              <RxCross2 className="text-4xl" />
            ) : (
              <CgMenuLeftAlt className="text-4xl" />
            )}
          </button>
        </div>
        <div>
          <Link
            href="/"
            className="text-3xl font-medium font-volkhov uppercase"
          >
            Fasco.
          </Link>
        </div>

        <div className="hidden lg:flex">
          <ul className="flex items-center gap-4">{navLinks}</ul>
        </div>

        <div className="flex items-center gap-4">
          <button className="btn border border-black font-semibold text-sm text-black">
            Sign In
          </button>
          <button className="btn bg-black font-semibold text-sm text-white">
            Sign Up
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      <div className={` ${isMenuClick ? 'flex' :'hidden'}  absolute top-14 left-2`}>
        <ul className="flex flex-col items-center gap-2 w-full p-3 rounded-2xl bg-gray-300">{dropNavLinks}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
