"use client";
import React, { useState, useEffect } from "react";
import { Heart, AlertCircle } from "lucide-react";
import Container from "@/components/Common/Container";
import RelatedProducts from "@/components/ProductPage/RelatedProducts";
import { useParams } from "next/navigation";
import { useGetProductBySlugQuery } from "@/components/Redux/RTK/productApi";
import { TProduct } from "@/constants/product.type";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

const ProductPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGetProductBySlugQuery(slug);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const product: TProduct = data;
  const [selectedSize, setSelectedSize] = useState(38);
  const [selectedColor, setSelectedColor] = useState("navy");

  const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (isLoading) {
    return (
      <div className="bg-[#F5F5F5] min-h-screen py-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 md:px-0">
            {/* Left Column Skeleton */}
            <div className="lg:col-span-7">
              <div className="hidden md:grid grid-cols-2 gap-4 rounded-[48px] overflow-hidden">
                {[...Array(4)].map((_, i) => (
                  <Skeleton
                    key={i}
                    className="aspect-square w-full rounded-[32px] bg-gray-200"
                  />
                ))}
              </div>
              <div className="md:hidden relative aspect-square rounded-[32px] overflow-hidden">
                <Skeleton className="w-full h-full bg-gray-200" />
              </div>
            </div>

            {/* Right Column Skeleton */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <Skeleton className="h-6 w-24 rounded-lg bg-gray-200" />
                <Skeleton className="h-10 w-3/4 bg-gray-200" />
                <Skeleton className="h-8 w-1/4 bg-gray-200" />
              </div>

              <div className="flex gap-2 pt-4">
                <Skeleton className="flex-1 h-14 rounded-xl bg-gray-200" />
                <Skeleton className="h-14 w-14 rounded-xl bg-gray-200" />
              </div>
              <Skeleton className="w-full h-14 rounded-xl bg-gray-200" />

              <div className="pt-6 space-y-4">
                <Skeleton className="h-4 w-1/3 bg-gray-200" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full bg-gray-200" />
                  <Skeleton className="h-4 w-full bg-gray-200" />
                  <Skeleton className="h-4 w-2/3 bg-gray-200" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#F5F5F5] min-h-screen flex items-center justify-center">
        <Container>
          <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
            <div className="bg-red-50 p-6 rounded-full">
              <AlertCircle size={48} className="text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-[#232321]">
              Oops! Something went wrong.
            </h2>
            <p className="text-gray-500 max-w-md">
              We couldn't load the product details.
            </p>
            <Link href="/">
              <button className="mt-4 cursor-pointer bg-[#232321] text-white px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-black transition-colors">
                Go to Home
              </button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  const displayImages = product?.images?.slice(0, 4) || [];

  return (
    <div className="bg-[#F5F5F5] min-h-screen py-10 ">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 md:px-0">
          {/* --- LEFT: IMAGE GRID (Desktop: 7/12 cols) --- */}
          <div className="lg:col-span-7">
            {/* Desktop Grid Layout */}
            <div className="hidden md:grid grid-cols-2 gap-4  rounded-[48px] overflow-auto">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-square bg-[#ECEEF0]  overflow-hidden"
                >
                  <Image
                    width={400}
                    height={400}
                    src={img}
                    alt="Product Detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Mobile Carousel View */}
            <div className="md:hidden">
              <div className="relative aspect-square bg-[#ECEEF0] rounded-[32px] overflow-hidden">
                <Carousel setApi={setApi} className="w-full h-full">
                  <CarouselContent>
                    {displayImages.map((img, index) => (
                      <CarouselItem key={index}>
                        <div className="w-full h-full aspect-square">
                          <Image
                            width={400}
                            height={400}
                            src={img}
                            alt={`Product View ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {displayImages.map((_, index) => (
                    <div
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-colors",
                        current === index + 1 ? "bg-[#437EF7]" : "bg-gray-300",
                      )}
                    />
                  ))}
                </div>
              </div>

              {/* Mobile Thumbnails below main image */}
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {displayImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => api?.scrollTo(idx)}
                    className={cn(
                      "w-20 h-20 shrink-0 bg-white rounded-xl overflow-hidden border-2 transition-colors",
                      current === idx + 1
                        ? "border-[#437EF7]"
                        : "border-transparent hover:border-[#437EF7]",
                    )}
                  >
                    <Image
                      width={100}
                      height={100}
                      src={img}
                      alt="thumb"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT: PRODUCT INFO (Desktop: 5/12 cols) --- */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="inline-block bg-[#437EF7] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-lg">
                New Release
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-[#232321] uppercase leading-tight">
                {product.title}
              </h1>
              <p className="text-[#437EF7] text-2xl font-bold">
                ${product.price}
              </p>
            </div>

            {/* Color Selection */}
            {/* <div className="space-y-3">
              <h3 className="font-bold uppercase text-sm">Color</h3>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedColor("navy")}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === "navy" ? "border-[#232321] p-0.5" : "border-transparent"}`}
                >
                  <div className="w-full h-full bg-[#2B3444] rounded-full" />
                </button>
                <button
                  onClick={() => setSelectedColor("green")}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === "green" ? "border-[#232321] p-0.5" : "border-transparent"}`}
                >
                  <div className="w-full h-full bg-[#7C8B7A] rounded-full" />
                </button>
              </div>
            </div> */}

            {/* Size Selection */}
            {/* <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="font-bold uppercase text-sm">Size</h3>
                <button className="text-[10px] font-bold uppercase underline underline-offset-4">
                  Size Chart
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-lg font-bold text-sm transition-all ${
                      selectedSize === size
                        ? "bg-[#232321] text-white"
                        : "bg-white text-[#232321] hover:bg-gray-100"
                    } ${[39, 40].includes(size) ? "opacity-40 cursor-not-allowed" : ""}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Actions */}
            <div className="flex gap-2 pt-4">
              <button className="flex-1 bg-[#232321] text-white py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-black transition-colors">
                Add to Cart
              </button>
              <button className="bg-[#232321] text-white p-4 rounded-xl hover:bg-black transition-colors">
                <Heart size={20} />
              </button>
            </div>
            <button className="w-full bg-[#437EF7] text-white py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-blue-700 transition-colors">
              Buy It Now
            </button>

            {/* Description */}
            <div className="pt-6 space-y-4">
              <h3 className="font-bold uppercase text-sm">About the product</h3>
              <div
                className="text-gray-500 text-sm font-medium leading-relaxed"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
          </div>
        </div>
      </Container>
      <RelatedProducts />
    </div>
  );
};

export default ProductPage;
