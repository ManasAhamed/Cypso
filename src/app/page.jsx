import Layout from './component/layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="relative">
        <section className="absolute top-[-40px] left-0 w-[100%] h-[700px]">
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
            <Link href="/consultation" className="flex items-center justify-center bg-yuzuJam text-white font-bold text-xs uppercase py-3 px-5 rounded-md w-[214px] h-[38px]">
              Get Free Consultation
            </Link>
          </div>
        </section>
        <section className="flex justify-between items-center left-[188px] top-[857px] w-[1064px] h-[414px] absolute">
          <div className="flex-shrink-0">
            <Image
              src="/c2149f00214af5481c570aeb1a76d7d3.png"
              alt="Web & Mobile App Development"
              width={414}
              height={414}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center w-[542px] h-auto gap-[20px]">
            <h2 className="text-[#6B3CC9] text-lg font-bold">
              Web & Mobile App Development
            </h2>
            <p>
              Your web and mobile apps are pieces of the puzzle to grow your business. We use frameworks that tailor content and engagement methods to respond to different interests shown by your potential customers who interact with your business online.
            </p>
            <Link href="/web-development" className="inline-block bg-[#F28D35] text-white font-bold uppercase text-xs px-5 py-3 rounded-tl-lg rounded-br-none rounded-tr-none rounded-bl-none w-[129px] h-[38px] flex items-center justify-center gap-[8px]">
              Learn More
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
