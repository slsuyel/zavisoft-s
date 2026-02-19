"use client";
import React, { useState } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/Common/Container";
import RelatedProducts from "@/components/ProductPage/RelatedProducts";

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState(38);
  const [selectedColor, setSelectedColor] = useState("navy");

  const images = [
    "/assets/adidas.png",
    "/assets/adidas.png",
    "/assets/adidas.png",
    "/assets/adidas.png",
  ];

  const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

  return (
    <div className="bg-[#F5F5F5] min-h-screen py-10 ">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 md:px-0">
          {/* --- LEFT: IMAGE GRID (Desktop: 7/12 cols) --- */}
          <div className="lg:col-span-7">
            {/* Desktop Grid Layout */}
            <div className="hidden md:grid grid-cols-2 gap-4">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-square bg-[#ECEEF0] rounded-[32px] overflow-hidden"
                >
                  <img
                    src={img}
                    alt="Product Detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Mobile Carousel View */}
            <div className="md:hidden relative aspect-square bg-[#ECEEF0] rounded-[32px] overflow-hidden">
              <img
                src={images[0]}
                alt="Product Main"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                <div className="w-2 h-2 bg-[#437EF7] rounded-full" />
                <div className="w-2 h-2 bg-gray-300 rounded-full" />
                <div className="w-2 h-2 bg-gray-300 rounded-full" />
                <div className="w-2 h-2 bg-gray-300 rounded-full" />
              </div>
              {/* Mobile Thumbnails below main image */}
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className="w-20 h-20 flex-shrink-0 bg-white rounded-xl overflow-hidden border-2 border-transparent hover:border-[#437EF7]"
                  >
                    <img
                      src={img}
                      alt="thumb"
                      className="w-full h-full object-cover"
                    />
                  </div>
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
                ADIDAS 4DFWD X PARLEY RUNNING SHOES
              </h1>
              <p className="text-[#437EF7] text-2xl font-bold">$125.00</p>
            </div>

            {/* Color Selection */}
            <div className="space-y-3">
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
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
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
            </div>

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
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                Shadow Navy / Army Green
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                This product is excluded from all promotional discounts and
                offers.
              </p>
              <ul className="text-gray-500 text-sm space-y-2 list-disc pl-4">
                <li>
                  Pay over time in interest-free installments with Affirm,
                  Klarna or Afterpay.
                </li>
                <li>
                  Join adiClub to get unlimited free standard shipping, returns,
                  & exchanges.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <RelatedProducts />
    </div>
  );
};

export default ProductPage;
