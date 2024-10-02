import Image from "next/image";
import Link from "next/link";

const Web = () => {
  return (
    <section className="containers flex flex-col md:flex-row gap-4 ">
      <Image
        src="/c2149f00214af5481c570aeb1a76d7d3.png"
        alt="Web & Mobile App Development"
        width={414}
        height={414}
        priority
      />

      <div className="flex items-center justify-between ml-auto">
        <div className="flex flex-col gap-3 max-w-[500px]">
          <h2 className=" font-semibold text-purple-800 text-2xl">
            Web & Mobile App Development
          </h2>

          <p className=" font-normal text-sm text-wrap text-gray-950">
            Your web and mobile apps are pieces of the puzzle to grow your
            business. We use frameworks that tailor content and engagement
            methods to respond to different interests shown by your potential
            customers who interact with your business online.
          </p>

          <Link
            href="/"
            className="bg-orange-400 hover:bg-orange-500 text-sm text-white font-bold uppercase py-2 px-4 rounded-md w-fit"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Web;
