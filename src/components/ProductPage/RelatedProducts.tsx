"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/Common/Container";
import ProductCard from "./ProductCard";

const RelatedProducts = () => {
  // 1. Initialize Embla with specific options
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 1024px)": { slidesToScroll: 4 },
    },
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const products = [
    {
      id: 1,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "125",
      image: "/assets/adidas-1.png",
      tag: "New",
    },
    {
      id: 2,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "125",
      image: "/assets/adidas-2.png",
      tag: "New",
    },
    {
      id: 3,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "125",
      image: "/assets/adidas-3.png",
      tag: "New",
    },
    {
      id: 4,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "125",
      image: "/assets/adidas-4.png",
      tag: "New",
    },
    {
      id: 5,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "125",
      image: "/assets/adidas-1.png",
      tag: "New",
    },
  ];

  // 2. Navigation Logic
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full py-12 md:py-20 bg-[#F5F5F5] font-['Rubik',_sans-serif] overflow-hidden">
      <Container>
        {/* Header with Title and Slider Controls */}
        <div className="flex items-center justify-between mb-8 px-4 md:px-0">
          <h2 className="text-[32px] md:text-[48px] font-bold text-[#232321] tracking-tight uppercase">
            You may also like
          </h2>

          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg transition-all ${
                canScrollPrev
                  ? "bg-[#232321] text-white hover:bg-black"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg transition-all ${
                canScrollNext
                  ? "bg-[#232321] text-white hover:bg-black"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* --- Functional Carousel Body --- */}
        <div className="overflow-hidden px-4 md:px-0" ref={emblaRef}>
          <div className="flex -ml-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_85%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
              >
                <ProductCard
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  tag={product.tag}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Functional Pagination Indicator */}
        <div className="hidden md:flex justify-center mt-12 gap-2">
          {emblaApi?.scrollSnapList().map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-12 bg-[#437EF7]"
                  : "w-12 bg-[#232321]/10"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RelatedProducts;
