"use client";
import React from "react";
import { Trash2, Heart, ChevronDown } from "lucide-react";
import Container from "@/components/Common/Container";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "DROPSET TRAINER SHOES",
      category: "Men's Road Running Shoes",
      color: "Enamel Blue/ University White",
      size: 10,
      quantity: 1,
      price: 130.0,
      image: "/assets/adidas.png", // Use the shoe asset you have
    },
  ];

  const subtotal = 130.0;
  const delivery = 6.99;
  const total = subtotal + delivery;

  return (
    <div className="bg-[#F5F5F5] min-h-screen py-10 ">
      <Container>
        {/* Header Promo Section */}
        <div className="mb-10 px-4 md:px-0">
          <h1 className="text-2xl md:text-3xl font-bold text-[#232321] mb-2">
            Saving to celebrate
          </h1>
          <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while supplies last. No code needed. <br />
            <span className="font-bold underline cursor-pointer">
              Join us
            </span>{" "}
            or{" "}
            <span className="font-bold underline cursor-pointer">Sign-in</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 md:px-0">
          {/* --- LEFT: YOUR BAG (8/12 cols) --- */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#232321] mb-2">
                Your Bag
              </h2>
              <p className="text-xs text-gray-400 mb-8 uppercase tracking-wider font-medium">
                Items in your bag not reserved - check out now to make them
                yours.
              </p>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row gap-6 py-6 border-b border-gray-100 last:border-0"
                >
                  {/* Item Image */}
                  <div className="w-full md:w-48 aspect-square bg-[#ECEEF0] rounded-[24px] overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-[#232321] mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium">
                          {item.category}
                        </p>
                        <p className="text-sm text-gray-500">{item.color}</p>
                      </div>
                      <p className="text-xl font-bold text-[#437EF7]">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-6">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#232321]">
                          Size
                        </span>
                        <button className="flex items-center gap-1 text-sm font-medium border border-gray-200 rounded-lg px-2 py-1">
                          {item.size} <ChevronDown size={14} />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#232321]">
                          Quantity
                        </span>
                        <button className="flex items-center gap-1 text-sm font-medium border border-gray-200 rounded-lg px-2 py-1">
                          {item.quantity} <ChevronDown size={14} />
                        </button>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-4">
                      <button className="hover:text-[#437EF7] transition-colors">
                        <Heart size={20} />
                      </button>
                      <button className="hover:text-red-500 transition-colors">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT: ORDER SUMMARY (4/12 cols) --- */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-transparent p-2">
              <h2 className="text-2xl font-bold text-[#232321] mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 font-medium">
                <div className="flex justify-between text-sm">
                  <span className="text-[#232321] uppercase tracking-wider">
                    1 Item
                  </span>
                  <span className="text-[#232321]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#232321] uppercase tracking-wider">
                    Delivery
                  </span>
                  <span className="text-[#232321]">${delivery.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#232321] uppercase tracking-wider">
                    Sales Tax
                  </span>
                  <span className="text-[#232321]">-</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-4 border-t border-gray-200">
                  <span className="text-[#232321]">Total</span>
                  <span className="text-[#232321]">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-[#232321] text-white py-5 rounded-xl font-bold uppercase text-xs tracking-[0.2em] mt-8 hover:bg-black transition-all active:scale-95 shadow-lg">
                Checkout
              </button>

              <button className="w-full text-[#232321] py-4 text-xs font-bold uppercase underline underline-offset-4 mt-4 tracking-wider">
                Use a promo code
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
