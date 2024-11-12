import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-bluishPurple text-white py-5">
      <div className="containers flex flex-row justify-between items-center">
        <Link href="/" passHref>
          <Image
            className="object-cover object-center"
            src="/cypso.png"
            alt="Cypso logo"
            width={210}
            height={25}
            priority
          />
        </Link>

        <button
          className="sm:block lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Image
            src={isMenuOpen ? "/close-icon.png" : "/hamburger-icon.png"}
            alt={isMenuOpen ? "Close Menu" : "Open Menu"}
            width={24}
            height={24}
            priority
          />
        </button>

        <div className="hidden lg:flex flex-row gap-10">
          <Link
            href="#services"
            className="font-medium text-base uppercase text-white hover:text-purple-200"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="font-medium text-base uppercase text-white hover:text-purple-200"
          >
            About Us
          </Link>
          <Link
            href="#contact"
            className="font-medium text-base uppercase text-white hover:text-purple-200"
          >
            Contact Us
          </Link>
          <Link
            href="#careers"
            className="font-medium text-base uppercase text-white hover:text-purple-200"
          >
            Careers
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white text-black flex flex-col items-start justify-start px-6 py-10 top-0 sm:pt-[77px] sm:h-full">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-2xl"
            aria-label="Close menu"
          >
            &#x2715;
          </button>
          <nav className="flex flex-col space-y-4 uppercase mt-12 sm:mt-0">
            <Link
              href="/"
              className="font-medium text-base uppercase text-gray-950 hover:text-purple-800"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="font-medium text-base uppercase text-gray-950 hover:text-purple-800"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="font-medium text-base uppercase text-gray-950 hover:text-purple-800"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="font-medium text-base uppercase text-gray-950 hover:text-purple-800"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            <Link
              href="#careers"
              className="font-medium text-base uppercase text-gray-950 hover:text-purple-800"
              onClick={toggleMenu}
            >
              Careers
            </Link>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Header;
