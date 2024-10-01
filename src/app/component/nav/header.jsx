import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
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
              alt="AT Digitals Logo"
              width={238.89}
              height={25}
              className="object-cover"
            />
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-7 text-base uppercase 
        2xl:gap-[28px] xl:gap-[20px] lg:gap-[15px] sm:gap-[8px]"
        style={{
          height: '17px',
          opacity: 1,
        }}>
        <Link href="/services">Services</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/careers">Careers</Link>
      </div>
    </nav>
  );
};

export default Header;
