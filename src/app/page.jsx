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
      <section className="absolute top-[-40px] left-0 w-full h-[763px] 2xl:top-[-40px] 2xl:w-[100%] 2xl:h-[763px] xl:top-0 xl:w-[1200px] xl:h-[700px] lg:top-0 lg:w-[768px] lg:h-[448px] xs:top-[-1px] xs:w-[375px] xs:h-[218.75px]">
          <Image  
            src="/hero_image.jpeg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute bottom-10 left-[80px] w-[630px] h-[306px] flex flex-col gap-5 p-6 bg-gradient-to-r from-interstellarBlue to-richBlue">
            <h1 className="text-white text-[48px] font-bold leading-none tracking-tighter">
              We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
            </h1>
            <Link
              href="/consultation"
              className="flex items-center justify-center bg-yuzuJam text-white font-bold text-xs uppercase py-3 px-5 rounded-md w-[214px] h-[38px]"
            >
              Get Free Consultation
            </Link>
          </div>
        </section>

        <section className="absolute top-[857px] left-[188px] w-[1064px] h-[414px] 2xl:gap-[108px] 2xl:flex-row 2xl:w-[1064px] 2xl:h-[414px] 2xl:left-[188px] 2xl:top-[857px] xl:w-[896px] xl:h-[346px] xl:left-[152px] xl:gap-[20px] lg:w-[688px] lg:h-[275px] lg:left-[40px] lg:top-[843px] xs:w-[335px] xs:h-[572.82px] xs:left-[20px] xs:top-[649px] flex items-center justify-between relative gap-[20px]">
  <div className="flex-shrink-0">
    <Image
      src="/c2149f00214af5481c570aeb1a76d7d3.png"
      alt="Web & Mobile App Development"
      width={414}
      height={414}
      className="object-cover 2xl:w-[414px] 2xl:h-[414px] xl:w-[346px] xl:h-[346px] lg:w-[275px] lg:h-[275px] xs:w-[275px] xs:h-[275.82px]"
    />
  </div>
  <div className="flex flex-col justify-center 2xl:w-[542px] 2xl:h-auto xl:w-[530px] lg:w-[393px] lg:h-[239px] xs:w-[335px] xs:h-[277px] gap-[20px]">
    <h2 className="text-bluishPurple text-lg font-bold 2xl:text-[27px] 2xl:leading-[33px] xl:text-[27px] lg:text-[27px] xs:text-[27px]">
      Web & Mobile App Development
    </h2>
    <p className="text-black 2xl:w-[542px] xl:w-[530px] lg:w-[393px] xs:w-[335px]">
      Your web and mobile apps are pieces of the puzzle to grow your business. We use frameworks that tailor content and engagement methods to respond to different interests shown by your potential customers who interact with your business online.
    </p>
    <Link
      href="/web-development"
      className="bg-yuzuJam text-white font-bold uppercase text-xs px-5 py-3 rounded-lg 2xl:w-[129px] 2xl:h-[38px] xl:w-[129px] xl:h-[38px] lg:w-[129px] lg:h-[38px] xs:w-[129px] xs:h-[38px] flex items-center justify-center gap-[8px]"
    >
      Learn More
    </Link>
  </div>
</section>


        <section className="flex justify-between items-center mx-auto top-[1000px] w-[1064px] h-[414px] relative">
          <div className="flex flex-col justify-center w-[542px] h-auto gap-[20px]">
            <h2 className="text-bluishPurple text-lg font-bold">
              Web & Mobile App Development
            </h2>
            <p className="text-black">
              Your web and mobile apps are pieces of the puzzle to grow your business. We use frameworks that tailor content and engagement methods to respond to different interests shown by your potential customers who interact with your business online.
            </p>
            <Link
              href="/web-development"
              className="inline-block bg-yuzuJam text-white font-bold uppercase text-xs px-5 py-3 rounded-lg w-[129px] h-[38px] flex items-center justify-center gap-[8px]"
            >
              Learn More
            </Link>
          </div>
          <div className="pc">
            <Image
              src="/be108bd31437b72eaae8e1dbd7abd910.png"
              alt="Web & Mobile App Development"
              width={414}
              height={416}
              className="object-cover"
            />
          </div>
        </section>

        <section className="mt-[1200px] mx-auto w-[80%] 1440px:w-[846px] 1440px:h-[392px] 1440px:mt-[1847px] 1440px:left-[297px] 1440px:gap-[28px]">
          <h2 className="text-center text-bluishPurple text-3xl font-bold mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-md">
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center p-4 text-lg ${
                    activeIndex === index ? 'text-bluishPurple' : 'text-black'
                  }`}
                >
                  <span>{faq.question}</span>
                  <span>{activeIndex === index ? '−' : '+'}</span>
                </button>
                {activeIndex === index && (
                  <div className="p-4 bg-white text-acierLight">
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
