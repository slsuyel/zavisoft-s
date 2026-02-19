import Container from "@/components/Common/Container";
import React from "react";

const NewDrops = () => {
  const products = [
    {
      id: 1,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "125",
      tag: "New",
      image: "/shoes/adidas-1.png",
      color: "bg-[#437EF7]",
    },
    {
      id: 2,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "125",
      tag: "New",
      image: "/shoes/adidas-2.png",
      color: "bg-[#437EF7]",
    },
    {
      id: 3,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "125",
      tag: "New",
      image: "/shoes/adidas-3.png",
      color: "bg-[#437EF7]",
    },
    {
      id: 4,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "125",
      tag: "New",
      image: "/shoes/adidas-4.png",
      color: "bg-[#437EF7]",
    },
  ];

  return (
    <section className="w-full px-4 md:px-8 py-12 md:py-24 bg-[#F5F5F5] ">
      <Container>
        {/* Header with Title and Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <h2 className="text-4xl md:text-7xl font-bold uppercase leading-[0.9] text-[#232321]">
            Don't miss out <br /> new drops
          </h2>
          <button className="bg-[#437EF7] text-white px-6 py-4 rounded-lg font-bold uppercase text-sm tracking-wider hover:bg-blue-700 transition-all self-start md:self-auto">
            Shop New Drops
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col gap-4">
              {/* Image Card */}
              <div className="relative aspect-square bg-white rounded-[24px] md:rounded-[32px] p-4 border-[6px] border-white overflow-hidden group">
                {/* Status Tag */}
                <div
                  className={`absolute top-0 left-0 ${product.color} text-white px-4 py-2 rounded-br-2xl text-xs font-bold uppercase`}
                >
                  {product.tag}
                </div>

                <img
                  src={`/assets/adidas.png`}
                  alt={product.name}
                  className="w-full h-full object-contain  transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-sm md:text-xl uppercase leading-tight text-[#232321]">
                  {product.name}
                </h3>
                <button className="w-full bg-[#232321] text-[#FFA52F] py-3 md:py-4 rounded-xl font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-black transition-colors">
                  View Product —{" "}
                  <span className="text-white">${product.price}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NewDrops;
