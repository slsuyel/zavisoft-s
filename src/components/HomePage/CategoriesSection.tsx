import React from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/Common/Container";

const CategoriesSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#232321] text-white ">
      <Container>
        <div className="flex items-center justify-between mb-10 px-4 md:px-0">
          <h2 className="text-4xl md:text-[74px] font-bold uppercase leading-none">
            Categories
          </h2>
          <div className="flex gap-4">
            <button className="w-12 h-12 flex items-center justify-center bg-[#434341] rounded-lg hover:bg-[#437EF7] transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-[#FAFAFA] text-black rounded-lg hover:bg-[#437EF7] hover:text-white transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Lifestyle Card */}
          <div className="relative group h-[500px] md:h-[600px] bg-[#ECEEF0] flex flex-col justify-end p-8 md:p-12 cursor-pointer border-b md:border-b-0 md:border-r border-[#232321]">
            {/* The Inward Notch Effect */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-[#232321] flex items-end justify-end">
              <div className="w-full h-full bg-[#ECEEF0] rounded-tl-[64px]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <img
                src="/assets/lifestyle-shoes.png"
                alt="Lifestyle"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative z-10 flex items-end justify-between">
              <h3 className="text-3xl font-bold text-[#232321] uppercase">
                Lifestyle
                <br />
                Shoes
              </h3>
              <div className="bg-[#232321] text-white p-3 rounded-lg group-hover:bg-[#437EF7] transition-colors">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>

          {/* Basketball Card */}
          <div className="relative group h-[500px] md:h-[600px] bg-[#F6F6F6] flex flex-col justify-end p-8 md:p-12 cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <img
                src="/assets/basketball-shoes.png"
                alt="Basketball"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative z-10 flex items-end justify-between">
              <h3 className="text-3xl font-bold text-[#232321] uppercase">
                Basketball
                <br />
                Shoes
              </h3>
              <div className="bg-[#232321] text-white p-3 rounded-lg group-hover:bg-[#437EF7] transition-colors">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CategoriesSection;
