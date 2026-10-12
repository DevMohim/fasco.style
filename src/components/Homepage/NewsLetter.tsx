import NewsLetter1 from "@/assets/newsletter1.png";
import NewsLetter2 from "@/assets/newsletter2.png";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <section className="my-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between  gap-10 items-center px-4 ">
        <div>
          <Image
            src={NewsLetter1}
            alt="A Handsome guy pic"
            width={500}
            height={500}
            className="w-50 md:w-75 lg:w-150"
          ></Image>
        </div>
        <div className="space-y-5 flex flex-col items-center">
          <h1 className="font-semibold text-dark text-2xl md:text-3xl lg:text-[45px] font-volkhov">
            Subscribe To Our Newsletter
          </h1>
          <p className="text-[#808080] text-sm max-w-[85%] mx-auto">
            Stay in Style! Subscribe to our newsletter and be the first to
            discover the latest fashion trends, new arrivals, exclusive offers,
            and special discounts. Get style inspiration delivered straight to
            your inbox and never miss a chance to upgrade your wardrobe!
          </p>
          <form className=" flex justify-center items-center flex-col w-full">
            <input
              type="text"
              placeholder="you@gmail.com"
              className="input outline-none w-[60%] md:w-[40%] lg:w-[50%] pb-1 focus:border focus:border-dark shadow-lg shadow-gray-400 bg-white placeholder:text-[#808080] rounded-lg"
            />
            <button className="btn px-6 lg:px-12 py-6 bg-dark text-white text-sm font-medium font-volkhov mt-5 rounded-lg">
              Subscribe now
            </button>
          </form>
        </div>
        <div>
          <Image
            src={NewsLetter2}
            alt="A Handsome guy pic"
            width={470}
            height={500}
            className="w-50 md:w-75 lg:w-150"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
