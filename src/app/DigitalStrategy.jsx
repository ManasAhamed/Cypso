import Image from 'next/image';
import Link from 'next/link';

const DigitalStrategy = () => {
  return (
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
  );
};

export default DigitalStrategy;
