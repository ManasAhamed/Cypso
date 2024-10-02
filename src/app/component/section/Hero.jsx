import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="relative h-[400px] 2xl:h-[763px]">
        <Image
          className="object-cover object-center"
          src="/hero_image.jpeg"
          alt="Hero Background"
          fill
          priority
        />

        <div className="hidden 2xl:block containers relative h-full w-full">
          <div className="containers relative 2xl:absolute 2xl:bottom-[40px] 2xl:left-0 2xl:w-[630px] flex flex-col gap-5 p-6 bg-gradient-to-r from-interstellarBlue to-richBlue max-w-[650px] ">
            <h1 className="text-white text-5xl font-bold">
              We Crush Your Competitors, Goals, And Sales Records - Without The
              B.S.
            </h1>
            <Link
              href="/"
              className="bg-orange-400 hover:bg-orange-500 text-sm text-white font-bold uppercase py-2 px-4 rounded-md w-fit"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>

      <div className=" 2xl:hidden p-6 bg-gradient-to-r from-interstellarBlue to-richBlue ">
        <div className=" containers flex flex-col gap-5">
          <h1 className="text-white text-3xl font-bold">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </h1>
          <Link
            href="/"
            className="bg-orange-400 hover:bg-orange-500 text-sm text-white font-bold uppercase py-2 px-4 rounded-md w-fit"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
