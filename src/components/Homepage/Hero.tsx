import Hero1 from "@/assets/Hero1.png";
import Hero2 from "@/assets/Hero2.png";
import Hero3 from "@/assets/Hero3.png";
import Hero4 from "@/assets/Hero4.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4 rounded-2xl">
        <div className="bg-ash flex justify-center items-end rounded-2xl">
          <Image
            src={Hero1}
            alt="men image"
            width={400}
            height={300}
            className="h-125 w-75 pt-20"
          ></Image>
        </div>

        <div className=" flex flex-col justify-between items-center rounded-2xl">
          <Image
            src={Hero2}
            alt="group of women pic"
            width={400}
            className="bg-ash rounded-2xl pt-2"
            height={200}
          ></Image>
          <h1 className="text-dark text-[90px] md:text-[45px] lg:text-[90px] font-semibold uppercase lg:-mt-8 -mt-4">
            ultimate
          </h1>
          <h2 className="text-white text-[187px] md:text-[100px] lg:text-[187px]  font-medium uppercase [-webkit-text-stroke:1.5px_black] lg:-my-24 -mt-12">
            sale
          </h2>
          <p className="font-semibold tracking-wide text-xl text-[#484848] lg:mt-14 md:-mt-8 uppercase">
            new collection
          </p>
          <button className="bg-black text-white px-12 py-3 text-sm rounded-lg my-2 uppercase cursor-pointer hover:scale-105 hover:transition-transform duration-200">
            shop now
          </button>
          <Image
            src={Hero3}
            alt="group of boys pic"
            width={400}
            height={200}
          ></Image>
        </div>

        <div className="bg-ash flex justify-center items-end rounded-2xl">
          <Image
            src={Hero4}
            alt="men image"
            width={400}
            height={300}
            className="h-125 w-60 pt-10"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
