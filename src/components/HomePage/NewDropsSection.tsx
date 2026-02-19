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
  console.log(products);
  return (
    <section className="w-full px-4 md:px-8 py-12 md:py-24 bg-[#F5F5F5] ">
      <Container>
        {/* Header with Title and Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <h2 className="text-4xl md:text-7xl font-bold uppercase leading-[0.9] text-[#232321]">
            Don't miss out <br /> new drops
          </h2>
          <Link href={"/products"}>
            <button className="bg-[#437EF7] text-white px-6 py-4 rounded-lg font-bold uppercase text-sm tracking-wider hover:bg-blue-700 transition-all self-start md:self-auto">
              Shop New Drops
            </button>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((product: TProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NewDrops;
