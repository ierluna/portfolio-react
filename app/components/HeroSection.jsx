/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className=" text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello! I'm Javier
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quas magni reprehenderit mollitia? Fuga officiis quasi tempora natus
            est culpa necessitatibus tempore. Iste, incidunt sequi ad autem
            porro harum veritatis.
          </p>
        </div>
        <div className="col-span-5 place-self-center  mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
            <Image
              src="/images/developerStockImage.jpg"
              alt="a person staring at two computer screens developing software"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 "
              width={300}
              height={300}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
