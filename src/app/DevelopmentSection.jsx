import Image from 'next/image';
import Link from 'next/link';

const DevelopmentSection = () => {
  return (
    <section className="flex justify-between items-center mx-auto top-[750px] w-[1064px] h-[414px] relative
      max-2xl:w-[1064px] max-2xl:h-[414px] max-2xl:top-[857px] max-2xl:left-[50px]
      max-xl:w-[800px] max-xl:h-[346px] max-xl:top-[550px] max-xl:left-[10px]
      max-lg:w-[688px] max-lg:h-[275px] max-lg:top-[843px] max-lg:left-[40px]
      max-md:w-[375px] max-md:h-auto max-md:top-[520px] max-md:left-[-1px] max-md:flex-col">

      <div className="flex-shrink-0 max-md:order-1 max-md:mb-5">
        <Image
          src="/c2149f00214af5481c570aeb1a76d7d3.png"
          alt="Web & Mobile App Development"
          width={414}
          height={414}
          className="object-cover max-xl:w-[346px] max-xl:h-[346px] max-lg:w-[275px] max-lg:h-[275px] max-md:w-[275px] max-md:h-[275px] "
        />
      </div>

      <div className="
        flex flex-col justify-center w-[542px] h-auto gap-[20px]
        max-xl:w-[530px] max-xl:h-[187px]
        max-lg:w-[393px] max-lg:h-[239px]
        max-md:w-[335px] max-md:h-auto max-md:text-center max-md:items-center max-md:order-2">

        <h2 className="text-bluishPurple text-lg font-bold max-xl:text-[27px] max-lg:text-[27px] max-md:text-[27px] max-md:w-full">
          Web & Mobile App Development
        </h2>

        <p className="text-black max-xl:text-[16px] max-lg:text-[16px] max-md:text-[16px] max-md:w-full">
          Your web and mobile apps are pieces of the puzzle to grow your business. We use frameworks that tailor content and engagement methods to respond to different interests shown by your potential customers who interact with your business online.
        </p>

        <Link href=""
          className="inline-block bg-yuzuJam text-white font-bold uppercase text-xs px-5 py-3 rounded-lg w-[129px] h-[38px] flex items-center justify-center gap-[8px]
          max-md:mx-auto max-md:w-[129px] max-md:h-[38px]">
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default DevelopmentSection;
