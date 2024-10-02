"use client";

import Layout from './component/layout';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import FAQSection from './FAQSection';
import DigitalStrategy from './DigitalStrategy';
import DevelopmentSection from './DevelopmentSection'


export default function Home() {
  return (
    <Layout>
      <div className="relative">
        <section className="absolute top-[-40px] left-0 w-full h-[763px] 2xl:top-[-40px] 2xl:w-[100%] 2xl:h-[763px] xl:top-0 xl:w-[100%] xl:h-[700px] lg:top-0 lg:w-[100%] lg:h-[548px] md:top-[0] md:w-[100%] md:h-[448px] xs:top-[-1px] xs:w-[100%] xs:h-[218.75px]">
          <Image
            src="/hero_image.jpeg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute bottom-[40px] left-[80px] w-[630px] h-[306px] flex flex-col gap-5 p-6 bg-gradient-to-r from-interstellarBlue to-richBlue
            max-xl:bottom-[40px] max-xl:left-[60px] max-xl:w-[622px] max-xl:h-[306px]
            max-lg:top-[440px] max-lg:left-0 max-lg:w-[100%] max-lg:h-[258px]
            max-md:top-[215px] max-md:w-[100%] max-md:h-[294px] max-md:p-5"
          >
            {/* Heading */}
            <h1 className="text-white text-[48px] font-bold leading-none tracking-tighter 
              max-lg:w-[688px] max-lg:h-[144px] max-md:w-[335px] max-md:h-[180px] max-md:text-[36px]">
              We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
            </h1>

            {/* Button */}
            <Link href="/consultation" className="flex items-center justify-center bg-yuzuJam text-white font-bold text-xs uppercase py-3 px-5 rounded-md w-[214px] h-[38px]">
              Get Free Consultation
            </Link>
          </div>
        </section>
      </div>
      <DevelopmentSection/>
      <DigitalStrategy/>
      <FAQSection />
    </Layout>
  );
}
