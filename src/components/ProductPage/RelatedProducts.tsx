"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/Common/Container";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "../Redux/RTK/productApi";
import { TProduct } from "@/constants/product.type";
import { Skeleton } from "../ui/skeleton";

const RelatedProducts = () => {
  const { data: products, isLoading } = useGetProductsQuery({
    offset: 0,
    limit: 14,
  });
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
  if (isLoading) {
    return (
      <section className="w-full py-12 md:py-20 bg-[#E7E7E3] overflow-hidden">
        <Container>
          <div className="flex items-center justify-between mb-6 md:mb-8 px-4 md:px-0">
            <Skeleton className="h-8 md:h-12 w-48 md:w-64 rounded-lg bg-gray-200" />
            <div className="flex gap-2">
              <Skeleton className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-200" />
              <Skeleton className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-200" />
            </div>
          </div>

          <div className="overflow-hidden px-4 md:px-0">
            <div className="flex -ml-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="flex-[0_0_85%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
                >
                  <div className="flex flex-col gap-4 w-full max-w-[318px]">
                    <Skeleton className="aspect-318/350 w-full rounded-[28px] bg-gray-200" />
                    <div className="flex flex-col gap-4 px-2">
                      <Skeleton className="h-8 w-3/4 rounded-lg bg-gray-200" />
                      <Skeleton className="h-12 w-full rounded-2xl bg-gray-200" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    );
  }
  return (
    <section className="w-full py-6 md:py-10 bg-[#E7E7E3] overflow-hidden">
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between mb-4 md:mb-8 px-4 md:px-0">
          <h2 className="text-[24px] md:text-[48px] font-bold text-[#232321]">
            You may also like
          </h2>

          {/* Desktop Controls Only */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className={`w-12 h-12 flex items-center justify-center rounded-lg transition-all ${
                canScrollPrev
                  ? "bg-[#232321] text-white hover:bg-black"
                  : "bg-gray-400  text-white cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={`w-12 h-12 flex items-center justify-center rounded-lg transition-all ${
                canScrollNext
                  ? "bg-[#232321] text-white hover:bg-black"
                  : "bg-gray-400  text-white cursor-not-allowed"
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="px-4 md:px-0">
          {/* ============ 📱 Mobile Grid (Figma Style) ============ */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {products.slice(0, 4).map((product: TProduct) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* ============ 💻 Desktop Carousel ============ */}
          <div className="hidden md:block overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {products.map((product: TProduct) => (
                <div key={product.id} className="flex-[0_0_25%] min-w-0 pl-4">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Pagination */}
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
