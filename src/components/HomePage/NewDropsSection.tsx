"use client";
import Container from "@/components/Common/Container";
import React from "react";
import ProductCard from "../ProductPage/ProductCard";
import { useGetProductsQuery } from "../Redux/RTK/productApi";
import Link from "next/link";
import { TProduct } from "@/constants/product.type";

const NewDrops = () => {
  const { data: products, isLoading } = useGetProductsQuery({
    offset: 0,
    limit: 4,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <section
      className="w-full px-4  py-6 md:py-24 bg-[#E7E7E3]  font-rubik"
      id="new-drops"
    >
      <Container>
        {/* Header with Title and Button */}
        <div className="flex items-center md:items-end justify-between mb-6 md:mb-12 gap-x-2 md:gap-6">
          <h2 className="text-2xl md:text-7xl font-medium md:font-bold capitalize md:uppercase leading-[0.9] text-[#232321]">
            Don't miss out <br /> new drops
          </h2>
          <Link href={"/"}>
            <button className="bg-[#437EF7] text-white px-4 md:px-6 py-2 md:py-4 rounded-lg font-medium md:font-bold uppercase text-sm tracking-wider hover:bg-blue-700 transition-all self-start md:self-auto">
              Shop New Drops
            </button>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8">
          {products.map((product: TProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NewDrops;
