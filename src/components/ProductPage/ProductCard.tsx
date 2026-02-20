import { TProduct } from "@/constants/product.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[318px]  font-rubik animate-fade-in-up">
      {/* Image Container with 28px rounding */}
      <div className="relative aspect-318/350  rounded-2xl md:rounded-[28px]  border-8 border-white overflow-hidden group">
        {/* Status Tag - Top Left */}

        <div
          className="absolute top-0 left-0 bg-[#437EF7] text-white 
  text-[12px] font-semibold font-['Rubik'] 
  flex items-center justify-center
  w-[42px] h-[22px] px-[8px] py-[4px]
  rounded-tl-[12px] rounded-br-[13px]
  md:w-[58px] md:h-[38px] 
  md:px-[16px] md:py-[12px]
  md:rounded-tl-[24px] md:rounded-br-[24px]"
        >
          New
        </div>

        <Image
          width={318}
          height={350}
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out rounded-tl-[12px] group-hover:scale-110"
        />
      </div>

      {/* Product Information */}
      <div className="flex flex-col gap-4 ">
        <h3 className="text-base md:text-[24px] font-bold uppercase leading-tight text-[#232321] tracking-tight ">
          {product.title}
        </h3>

        {/* Action Button with 16px rounding */}
        <Link href={`/products/${product.slug}`}>
          <button
            className="
            cursor-pointer
            w-full h-[40px]
            md:w-[318px] md:h-[48px]
            bg-[#232321] text-white
            font-semibold uppercase
            text-[12px]
            rounded-[8px] md:rounded-[16px]
            transition-all hover:bg-black hover:scale-[1.02] active:scale-[0.98]
            flex items-center justify-center
          "
          >
            View Product —
            <span className="text-[#FFA52F] ml-1">${product.price}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
