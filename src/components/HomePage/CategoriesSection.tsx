"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/Common/Container";
import { useGetCategoriesQuery } from "../Redux/RTK/productApi";
import Image from "next/image";

export interface TCategory {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

const CategoriesSection = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery(undefined);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="w-full py-16 md:py-24 bg-[#232321] text-white overflow-hidden">
      <Container>
        {/* Main Wrapper with Left Offset (Agano) */}
        <div className="md:ml-20 lg:ml-32">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-10 pr-4 md:pr-0">
            <h2 className="text-4xl md:text-[74px] font-bold uppercase leading-none tracking-tighter">
              Categories
            </h2>
            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 flex items-center justify-center bg-[#434341] rounded-md hover:bg-[#437EF7] transition-colors active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 flex items-center justify-center bg-[#FAFAFA] text-black rounded-md hover:bg-[#437EF7] hover:text-white transition-colors active:scale-95"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* CAROUSEL PARENT 
              We apply the rounded corner here so it stays fixed on the left 
          */}
          <div
            className="overflow-hidden rounded-tl-[48px] md:rounded-tl-[64px]"
            ref={emblaRef}
          >
            <div className="flex">
              {categories.map((cat: TCategory, index: number) => (
                <div
                  key={cat.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0"
                >
                  <div
                    style={{
                      backgroundColor: index % 2 === 0 ? "#ECEEF0" : "#F6F6F6",
                    }}
                    className="relative group h-[500px] md:h-[600px] flex flex-col justify-end p-8 md:p-12 cursor-pointer "
                  >
                    {/* Shoe Image */}
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                      <Image
                        width={500}
                        height={500}
                        src={cat.image || "placeholder.png"}
                        alt={cat.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Text and Icon */}
                    <div className="relative z-10 flex items-end justify-between">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#232321] uppercase whitespace-pre-line leading-tight">
                        {cat.name}
                      </h3>
                      <div className="bg-[#232321] text-white p-3 rounded-lg group-hover:bg-[#437EF7] transition-colors">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CategoriesSection;
