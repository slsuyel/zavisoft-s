import Container from "@/components/Common/Container";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full px-4 md:px-8 bg-[#F5F5F5] ">
      {/* Heading Section */}
      <Container className="py-10 md:py-20 text-center md:text-left">
        <h1 className="text-[64px] md:text-[223.5px] font-bold leading-[0.9] tracking-tighter uppercase flex flex-col md:flex-row md:justify-between items-center">
          <span className="text-[#232321]">Do it</span>
          <span className="text-[#437EF7]">Right</span>
        </h1>
      </Container>

      {/* Main Feature Card */}
      <Container className="relative group">
        <div className="relative rounded-[32px] md:rounded-[64px] overflow-hidden bg-[#E7E7E3] min-h-[500px] md:h-[800px]">
          {/* Tag */}
          <div className="absolute top-0 left-0 bg-[#232321] text-white py-6 px-4 [writing-mode:vertical-lr] rotate-180 text-xs font-medium tracking-widest uppercase rounded-br-2xl">
            Nike product of the year
          </div>

          {/* Main Image (Replace src with your local path) */}
          <img
            src="/assets/nike-air-max-main.png"
            alt="Nike Air Max"
            className="w-full h-full object-cover"
          />

          {/* Text Content Overlay */}
          <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 max-w-md">
            <h2 className="text-4xl md:text-7xl font-bold text-white uppercase mb-4">
              Nike Air Max
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Nike introducing the new air max for everyone's comfort
            </p>
            <button className="bg-[#437EF7] text-white px-8 py-4 rounded-lg font-bold uppercase hover:bg-blue-700 transition-colors">
              Shop Now
            </button>
          </div>

          {/* Nested Thumbnails (Right Side) */}
          <div className="absolute bottom-8 right-8 flex flex-col gap-4  md:flex">
            <div className="w-40 h-40  overflow-hidden ">
              <img
                src="/assets/thumbnail-1.png"
                alt="detail 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-40 h-40  overflow-hidden ">
              <img
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
