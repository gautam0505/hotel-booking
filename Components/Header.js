import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full p-4 z-10 transition-all duration-500 ${scroll ? 'bg-white bg-opacity-90 text-black' : 'bg-transparent text-white'}`}>
      <div className="flex justify-between items-center">
        <div>
          <Link href="/" className=" font-bold text-lg">Home</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/sign-in" className=" hover:text-gray-300 p-2">Sign In</Link>
          <Link href="/sign-up" className=" hover:text-gray-300 bg-teal-600 p-2 rounded">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
