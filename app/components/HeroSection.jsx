/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className=" text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hello! I'm Javier
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quas magni reprehenderit mollitia? Fuga officiis quasi tempora natus
            est culpa necessitatibus tempore. Iste, incidunt sequi ad autem
            porro harum veritatis.
          </p>
          <div className="mt-3">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black">Hire Me</button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full  bg-transparent hover:bg-slate-800 text-white border border-white mt-3 ">Download CV</button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="relative bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
            <Image
              src="/images/developerStockImage.jpg"
              alt="avatar of a developer"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
