import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-bluishPurple text-white flex flex-col items-center py-10 px-8 w-full sm:w-[100%] mt-20">
      <div className="flex flex-col lg:flex-row justify-between w-full max-w-[1280px] gap-8">
        <div className="flex flex-col items-start gap-5 lg:w-1/3">
          <Image
            src="/cypso.png"
            alt="cypso logo"
            width={239}
            height={25}
          />
          <p className="text-sm max-w-sm leading-snug">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective - your
            business results.
          </p>
        </div>
        <div className="flex flex-col items-start lg:w-1/4">
          <h3 className="text-lg font-semibold">Our Technologies</h3>
          <ul className="space-y-2">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>
        <div className="flex flex-col items-start lg:w-1/4">
          <h3 className="text-lg font-semibold">Our Services</h3>
          <ul className="space-y-2">
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 w-full max-w-[1280px] sm:w-[100%]">
        <hr className="border-t border-white" />
        <div className="flex justify-center items-center space-x-4 mt-4">
          <Link href="/privacy-policy" className="text-sm">
            Privacy Policy
          </Link>
          <span className="border-l border-white h-4"></span>
          <Link href="/terms-conditions" className="text-sm">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
