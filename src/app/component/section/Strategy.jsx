import Image from "next/image";
import Link from "next/link";

const Strategy = () => {
  return (
    <section className="containers flex flex-col md:flex-row-reverse gap-4 ">
      <Image
        className=" object-cover object-center md:w-[245px]"
        src="/be108bd31437b72eaae8e1dbd7abd910.png"
        alt="Web & Mobile App Development"
        width={414}
        height={414}
        priority
      />

      <div className="flex items-center justify-between mr-auto">
        <div className="flex flex-col gap-3 max-w-[500px]">
          <h2 className="font-semibold text-purple-800 text-2xl">
            Digital Strategy Consulting
          </h2>

          <p className=" font-normal text-sm text-wrap text-gray-950">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>

          <Link
            href="/"
            className=" bg-orange-400 hover:bg-orange-500 text-sm text-white font-bold uppercase py-2 px-4 rounded-md w-fit"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
