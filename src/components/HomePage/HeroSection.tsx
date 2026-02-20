import Container from "@/components/Common/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full px-4 md:px-8 bg-[#E7E7E3] font-rubik">
      {/* Heading Section */}
      <Container className="py-2 pb-4 md:py-20 text-center md:text-left ">
        <h1 className="text-6xl md:text-[223.5px] font-bold leading-[0.9] tracking-tighter uppercase ">
          <span className="text-[#232321]">Do it</span>{" "}
          <span className="text-[#437EF7]">Right</span>
        </h1>
      </Container>

      {/* Main Feature Card */}
      <Container className="relative group">
        <div
          className=" relative 
  w-full 
  max-w-[358px] 
  md:max-w-none 
  h-[382px] 
  md:h-[800px] 
  rounded-[24px] 
  md:rounded-[64px] 
  overflow-hidden 
  bg-[#E7E7E3]"
        >
          {/* Tag */}
          <div className="absolute top-0 mt-20 left-0 bg-[#232321] text-white p-2 lg:p-6 [writing-mode:vertical-lr] rotate-180 text-xs font-medium tracking-widest uppercase rounded-l-lg lg:rounded-l-2xl">
            Nike product of the year
          </div>

          {/* Main Image (Replace src with your local path) */}
          <Image
            width={1000}
            height={700}
            src="/assets/nike-air-max-main.png"
            alt="Nike Air Max"
            className="w-full h-full object-cover"
          />

          {/* Text Content Overlay */}
          <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 ">
            <h2 className="text-2xl md:text-[74px] font-bold text-white uppercase  mb-1.5 md:mb-4">
              Nike Air Max
            </h2>
            <p className="text-white/90 text-sm md:text-2xl font-open-sans mb-2 md:mb-6 max-w-[200px] md:max-w-md">
              Nike introducing the new air max for everyone's comfort
            </p>
            <Link href="/" className="cursor-pointer">
              <button className="bg-[#437EF7] font-inter cursor-pointer text-white px-4 py-1.5 md:px-8 md:py-4 rounded-lg  font-semibold md:font-bold uppercase hover:bg-blue-700 transition-colors">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Nested Thumbnails (Right Side) */}
          <div className="absolute bottom-8 right-8 flex flex-col gap-4  md:flex">
            <div className="w-16 h-16 md:w-40 md:h-40  overflow-hidden ">
              <Image
                width={100}
                height={100}
                src="/assets/thumbnail-1.png"
                alt="detail 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 md:w-40 md:h-40  overflow-hidden ">
              <Image
                width={100}
                height={100}
                src="/assets/thumbnail-2.png"
                alt="detail 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
