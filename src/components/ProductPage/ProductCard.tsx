import React from "react";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  tag?: string;
}

const ProductCard = ({ name, price, image, tag = "New" }: ProductCardProps) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[318px] ">
      {/* Image Container with 28px rounding */}
      <div className="relative aspect-318/350 bg-[#ECEEF0] rounded-[28px] p-2 border-8 border-white overflow-hidden group">
        {/* Status Tag - Top Left */}
        {tag && (
          <div className="absolute top-0 left-0 bg-[#437EF7] text-white px-4 py-3 rounded-br-2xl text-[12px] font-bold uppercase tracking-wider z-10">
            {tag}
          </div>
        )}

        <img
          src={"/assets/adidas.png"}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Product Information */}
      <div className="flex flex-col gap-4 px-2">
        <h3 className="text-base md:text-[24px] font-bold uppercase leading-tight text-[#232321] tracking-tight h-[60px] line-clamp-2">
          {name}
        </h3>

        {/* Action Button with 16px rounding */}
        <button className="w-full bg-[#232321] text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-1 transition-all hover:bg-black active:scale-[0.98]">
          View Product — <span className="text-[#FFA52F]">${price}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
