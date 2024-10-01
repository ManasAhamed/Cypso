import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="bg-bluishPurple text-white flex justify-between items-center relative z-50 
        2xl:py-6 2xl:px-20 2xl:max-w-[1440px] 2xl:h-[77px]
        xl:py-6 xl:px-16 xl:max-w-[1200px] xl:h-[77px]
        lg:py-6 lg:px-10 lg:max-w-[768px] lg:h-[77px]
        sm:py-6 sm:px-5 sm:max-w-[375px] sm:h-[77px]">
      
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" passHref>
          <div className="flex items-center">
            <Image
              src="/at_digitals_logo.png"
              alt="AT Digital Logo"
              width={238.89}
              height={25}
              className="object-cover"
            />
          </div>
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="sm:block lg:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          <Image
            src={isMenuOpen ? '/close-icon.png' : '/hamburger-icon.png'}
            alt={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex space-x-7 text-base uppercase 
        2xl:gap-[28px] xl:gap-[20px] lg:gap-[15px]"
        style={{
          height: '17px',
          opacity: 1,
        }}>
        <Link href="/services">Services</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/careers">Careers</Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white text-black flex flex-col items-start justify-center px-6 py-10">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-2xl"
            aria-label="Close menu"
          >
            &#x2715; {/* Close (X) Icon */}
          </button>
          <nav className="flex flex-col space-y-4 text-lg uppercase">
            <Link href="/" onClick={toggleMenu}>Home</Link>
            <Link href="/services" onClick={toggleMenu}>Services</Link>
            <Link href="/about" onClick={toggleMenu}>About Us</Link>
            <Link href="/contact" onClick={toggleMenu}>Contact Us</Link>
            <Link href="/careers" onClick={toggleMenu}>Careers</Link>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Header;
