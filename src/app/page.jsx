"use client";

import Layout from './component/layout';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index); 
  };

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc.",
    },
  ];

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

        <section className="flex justify-between items-center mx-auto top-[750px] w-[1064px] h-[414px] relative
  max-2xl:w-[1064px] max-2xl:h-[414px] max-2xl:top-[857px] max-2xl:left-[50px]
  max-xl:w-[800px] max-xl:h-[346px] max-xl:top-[550px] max-xl:left-[10px]
  max-lg:w-[688px] max-lg:h-[275px] max-lg:top-[843px] max-lg:left-[40px]
  max-md:w-[375px] max-md:h-auto max-md:top-[520px] max-md:left-[-1px] max-md:flex-col">

  {/* Image Section */}
  <div className="flex-shrink-0 max-md:order-1 max-md:mb-5">
    <Image
      src="/c2149f00214af5481c570aeb1a76d7d3.png"
      alt="Web & Mobile App Development"
      width={414}
      height={414}
      className="object-cover max-xl:w-[346px] max-xl:h-[346px] max-lg:w-[275px] max-lg:h-[275px] max-md:w-[275px] max-md:h-[275px] "
    />
  </div>

  {/* Content Section */}
  <div className="flex flex-col justify-center w-[542px] h-auto gap-[20px]
    max-xl:w-[530px] max-xl:h-[187px]
    max-lg:w-[393px] max-lg:h-[239px]
    max-md:w-[335px] max-md:h-auto max-md:text-center max-md:items-center max-md:order-2">

    {/* Heading */}
    <h2 className="text-bluishPurple text-lg font-bold max-xl:text-[27px] max-lg:text-[27px] max-md:text-[27px] max-md:w-full">
      Web & Mobile App Development
    </h2>

    {/* Text */}
    <p className="text-black max-xl:text-[16px] max-lg:text-[16px] max-md:text-[16px] max-md:w-full">
      Your web and mobile apps are pieces of the puzzle to grow your business. We use frameworks that tailor content and engagement methods to respond to different interests shown by your potential customers who interact with your business online.
    </p>

    {/* Button */}
    <Link href="/web-development"
      className="inline-block bg-yuzuJam text-white font-bold uppercase text-xs px-5 py-3 rounded-lg w-[129px] h-[38px] flex items-center justify-center gap-[8px]
      max-md:mx-auto max-md:w-[129px] max-md:h-[38px]">
      Learn More
    </Link>
  </div>
</section>


<section className="flex justify-between items-center mx-auto top-[750px] w-[1064px] h-[416px] relative
  max-2xl:w-[896px] max-2xl:h-[348px] max-2xl:top-[950px] max-2xl:left-[100px]
  max-xl:w-[800px] max-xl:h-[348px] max-xl:top-[650px] max-xl:left-[80px]
  max-lg:w-[688px] max-lg:h-[276px] max-lg:top-[1000px] max-lg:left-[40px]
  max-md:flex-col max-md:w-[375px] max-md:h-auto max-md:top-[550px] max-md:left-[-1px] max-md:gap-5">

  {/* Image Section */}
  <div className="flex-shrink-0 order-2 max-md:order-1 max-md:mb-5">
    <Image
      src="/be108bd31437b72eaae8e1dbd7abd910.png"
      alt="Web & Mobile App Development"
      width={414}
      height={416}
      className="object-cover max-xl:w-[346px] max-xl:h-[348px] max-lg:w-[275px] max-lg:h-[276px] max-md:w-[275px] max-md:h-[276px]"
    />
  </div>

  {/* Content Section */}
  <div className="flex flex-col justify-center w-[542px] h-auto gap-[20px]
  max-xl:w-[530px] max-xl:h-[206px]
  max-lg:w-[393px] max-lg:h-[225px]
  max-md:w-full max-md:h-auto max-md:text-center max-md:items-center max-md:order-2 max-md:text-center">

  {/* Heading */}
  <h2 className="text-bluishPurple text-lg font-bold max-xl:text-[27px] max-lg:text-[27px] max-md:text-[27px] max-md:w-full
    max-md:whitespace-normal max-md:leading-tight max-md:text-center"> 
    Digital Strategy Consulting
  </h2>

  {/* Text */}
  <p className="text-black max-xl:text-[16px] max-lg:text-[16px] max-md:text-[16px] max-md:w-full max-md:leading-snug">
    Your digital strategy should complement the overall marketing strategy of the company. In online marketing, 
    each component will never work in isolation and every business needs a different mix. We provide a clear concept 
    and strategic overview to find the most efficient model for your business.
  </p>

  {/* Button */}
  <Link href="/web-development"
    className="inline-block bg-yuzuJam text-white font-bold uppercase text-xs px-5 py-3 rounded-lg w-[129px] h-[38px] flex items-center justify-center gap-[8px]
    max-md:mx-auto max-md:w-[129px] max-md:h-[38px]">
    Learn More
  </Link>
</div>
</section>


<section className="mt-[1200px] mb-[120px] mx-auto w-[80%] max-2xl:w-[846px] 2xl:h-[392px] 2xl:mt-[850px] 2xl:gap-[28px] xl:mt-[1100px] xl:mb-[50px] xl:h-[392px] xl:gap-[28px] lg:mt-[800px] lg:mb-[130px] lg:h-[350px] lg:gap-[20px] md:mt-[1100px] max-w-[686px] max-md:max-w-[334px] max-md:mt-[650px] max-md:mb-[50px]">
  <h2 className="text-center text-bluishPurple text-3xl font-bold mb-10 max-md:text-3xl">
    Frequently Asked Questions
  </h2>
  <div className="space-y-4 max-md:space-y-3">
    {faqs.map((faq, index) => (
      <div key={index} className="rounded-md bg-[#FAF8FF] max-md:bg-[#FAF8FF]">
        <button
          onClick={() => toggleFAQ(index)}
          className={`w-full flex justify-between items-center p-4 text-lg max-md:text-sm ${
            activeIndex === index ? 'text-bluishPurple' : 'text-black'
          }`}
          style={{ backgroundColor: '#FAF8FF' }} // Added background color to the button
        >
          <span>{faq.question}</span>
          <span>{activeIndex === index ? '−' : '+'}</span>
        </button>
        {activeIndex === index && (
          <div className="p-4 bg-[#FAF8FF] text-acierLight max-md:text-neutral-600"> {/* Updated background color */}
            {faq.answer}
          </div>
        )}
      </div>
    ))}
  </div>
</section>







      </div>
    </Layout>
  );
}
