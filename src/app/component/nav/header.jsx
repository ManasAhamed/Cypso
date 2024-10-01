import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <nav className="bg-bluishPurple text-white flex justify-between items-center px-20 py-6"style={{
          width: '1440px'         
        }}
      >
      <div className="flex items-center">
        
        <Link href="/" passHref>
          <div className="flex items-center">
            <Image
              src="/at_digitals_logo.png"
              alt="at_digitals_logo"
              width={238.89}
              height={25}    
              className="mr-4"
              style={{ opacity: 1 }}
            />
          </div>
        </Link>
      </div>

      <div
        className="flex space-x-7 text-base uppercase"
        style={{
          width: 'auto',     
          height: '17px',     
          gap: '28px',        
          opacity: 1,         
        }}
      >
        <Link href="/services" >Services</Link>
        <Link href="/about" >About Us</Link>
        <Link href="/contact" >Contact Us</Link>
        <Link href="/careers" >Careers</Link>
      </div>
    </nav>
  );
};

export default Header;
