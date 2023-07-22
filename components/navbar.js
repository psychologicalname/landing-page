'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <nav className={`fixed top-0 z-30 w-screen ${scrolling ? "bg-black" : "bg-transparent"}`}>
      <div className="mx-auto px-6 lg:px-28">
        <div className="flex items-center justify-between h-20">
            <div>
                <Image src="/logo.png" className="inline mr-1" width="25" height="25" alt="logo"/>
                <Link href="/" className="inline font-semibold text-white text-2xl tracking-tight align-middle">Travellian</Link>  
            </div>
            <div className="hidden lg:block">
              <div className="flex items-baseline space-x-4">
                <Link href="/" className="lg:px-3 p-2 rounded-md text-slate-300 hover:text-white">
                  Home
                </Link>
                <Link href="/" className="lg:px-3 p-2 rounded-md text-slate-300 hover:text-white">
                  Explore
                </Link>
                <Link href="/" className="lg:px-3 p-2 rounded-md text-slate-300 hover:text-white">
                  Travel
                </Link>
                <Link href="/" className="lg:px-3 p-2 rounded-md text-slate-300 hover:text-white">
                  Blog
                </Link>
                <Link href="/" className="lg:px-3 p-2 rounded-md text-slate-300 hover:text-white">
                  Pricing
                </Link>
              </div>
            </div>
            <div className="hidden lg:inline">
               <Link href="login" class="inline-block leading-none rounded-lg hover:text-white text-slate-300 mt-4 mr-6 md:mt-0">Login</Link>
               <Link href="signup" class="inline-block bg-[#FF7757] px-6 py-4 leading-none rounded-lg hover:bg-[#fc5d38] text-white mt-4 md:mt-0">Sign up</Link>
            </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 rounded-md text-slate-300 hover:text-white">
            Home
          </Link>
          <Link href="/" className="block px-3 py-2 rounded-md text-slate-300 hover:text-white">
            Explore
          </Link>
          <Link href="/" className="block px-3 py-2 rounded-md text-slate-300 hover:text-white">
            Travel
          </Link>
          <Link href="/" className="block px-3 py-2 rounded-md text-slate-300 hover:text-white">
            Blog
          </Link>
          <Link href="/" className="block px-3 py-2 rounded-md text-slate-300 hover:text-white">
            Pricing
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

