import Layout from './component/layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="relative">
        <section className="absolute top-[-40px] left-0 w-[1440px] h-[700px] ">
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
            <Link href="/consultation" className="flex items-center justify-center bg-yuzuJam text-white font-bold text-sm uppercase py-3 px-5 rounded-md w-[214px] h-[38px]">
              Get Free Consultation
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
