"use client";
import React from "react";
import { Trash2, Heart, ChevronDown, Minus, Plus } from "lucide-react";
import Container from "@/components/Common/Container";
import RelatedProducts from "@/components/ProductPage/RelatedProducts";
import { useAppDispatch, useAppSelector } from "@/components/Redux/hooks";
import {
  removeFromCart,
  updateQuantity,
} from "@/components/Redux/Slice/cartSlice";
import Link from "next/link";
import Image from "next/image";

const CartPage = () => {
  const { items, totalAmount } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const delivery = 6.99;
  const total = totalAmount + delivery;

  if (items.length === 0) {
    return (
      <div className="bg-[#E7E7E3] min-h-screen py-6 md:py-10 flex flex-col items-center justify-center">
        <Container>
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-[#232321] uppercase tracking-tight">
              Your Bag is Empty
            </h2>
            <p className="text-gray-500 max-w-md">
              Looks like you haven't added anything to your bag yet. Start
              shopping to fill it up!
            </p>
            <Link href="/">
              <button className="bg-[#232321] text-white px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-black transition-colors">
                Start Shopping
              </button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-[#E7E7E3] min-h-screen py-6 md:py-10 ">
      <Container>
        {/* Header Promo Section */}
        <div className="mb-8 md:mb-12 px-4 md:px-0">
          <h1 className="text-2xl md:text-[32px] font-bold text-[#232321] mb-3 uppercase tracking-tight">
            Saving to celebrate
          </h1>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl leading-relaxed font-medium">
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while supplies last. No code needed.{" "}
            <br className="hidden md:block" />
            <span className="font-bold text-[#232321] underline cursor-pointer hover:text-[#437EF7]">
              Join us
            </span>{" "}
            or{" "}
            <span className="font-bold text-[#232321] underline cursor-pointer hover:text-[#437EF7]">
              Sign-in
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 px-4 md:px-0 items-start">
          {/* --- LEFT: YOUR BAG (8/12 cols) --- */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-sm border border-gray-100">
              <h2 className="text-2xl md:text-[28px] font-bold text-[#232321] mb-2 uppercase">
                Your Bag
              </h2>
              <p className="text-xs md:text-sm text-gray-400 mb-8 uppercase tracking-widest font-semibold">
                Items in your bag not reserved - check out now to make them
                yours.
              </p>

              {items.map((item) => (
                <div
                  key={item.variantId}
                  className="flex flex-col md:flex-row gap-6 lg:gap-8 py-8 border-b border-gray-100 last:border-0"
                >
                  {/* Item Image with Figma Padding */}
                  <div className="w-full md:w-56 aspect-square bg-[#ECEEF0] rounded-[24px] md:rounded-[32px] overflow-hidden shrink-0 flex items-center justify-center p-6">
                    <Image
                      width={200}
                      height={200}
                      src={item.image || "/assets/placeholder.png"}
                      alt={item.name}
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 flex flex-col justify-between pt-2">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="text-lg md:text-2xl font-black text-[#232321] mb-1 leading-tight uppercase tracking-tight">
                          {item.name}
                        </h3>
                        {/* <p className="text-sm md:text-base text-gray-400 font-bold uppercase tracking-wide">
                          {item.category.name}
                        </p> */}
                      </div>
                      <p className="text-lg md:text-2xl font-black text-[#437EF7]">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-8">
                      {/* Quantity Control */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-black text-[#232321] uppercase">
                          Quantity
                        </span>
                        <div className="flex items-center gap-2 text-sm font-bold border-2 border-gray-100 rounded-xl px-2 py-1">
                          <button
                            onClick={() => {
                              if (item.quantity > 1) {
                                dispatch(
                                  updateQuantity({
                                    productId: item.productId,
                                    variantId: item.variantId,
                                    quantity: item.quantity - 1,
                                  }),
                                );
                              }
                            }}
                            className="p-1 hover:text-[#437EF7] disabled:opacity-50"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => {
                              dispatch(
                                updateQuantity({
                                  productId: item.productId,
                                  variantId: item.variantId,
                                  quantity: item.quantity + 1,
                                }),
                              );
                            }}
                            className="p-1 hover:text-[#437EF7]"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex gap-6">
                      <button className="text-[#232321] hover:text-[#437EF7] transition-colors p-1">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.0581 5C18.0006 5 16.0006 9 16.0006 9C16.0006 9 14.0006 5 9.94314 5C6.64564 5 4.03439 7.75875 4.00064 11.0506C3.93189 17.8837 9.42126 22.7431 15.4381 26.8269C15.604 26.9397 15.8 27.0001 16.0006 27.0001C16.2013 27.0001 16.3973 26.9397 16.5631 26.8269C22.5794 22.7431 28.0688 17.8837 28.0006 11.0506C27.9669 7.75875 25.3556 5 22.0581 5V5Z"
                            stroke="#232321"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() =>
                          dispatch(
                            removeFromCart({
                              productId: item.productId,
                              variantId: item.variantId,
                            }),
                          )
                        }
                        className="text-[#232321] hover:text-red-500 transition-colors p-1"
                      >
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27 9L25.2081 26.2337C25.1509 26.7203 24.917 27.169 24.5509 27.4946C24.1847 27.8201 23.7118 28 23.2219 28H8.77875C8.2888 28 7.8159 27.8201 7.44977 27.4946C7.08365 27.169 6.84976 26.7203 6.7925 26.2337L5 9"
                            stroke="#232321"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M29 4H3C2.44772 4 2 4.44772 2 5V8C2 8.55228 2.44772 9 3 9H29C29.5523 9 30 8.55228 30 8V5C30 4.44772 29.5523 4 29 4Z"
                            stroke="#232321"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19.5 15L12.5 22M19.5 22L12.5 15"
                            stroke="#232321"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT: ORDER SUMMARY (4/12 cols) --- */}
          <div className="lg:col-span-4">
            <div className="bg-white md:bg-transparent p-6 md:p-0 rounded-[24px] md:rounded-none">
              <h2 className="text-2xl md:text-[28px] font-bold text-[#232321] mb-8 uppercase tracking-tight">
                Order Summary
              </h2>

              <div className="space-y-5">
                <div className="flex justify-between text-base font-bold uppercase tracking-wide">
                  <span className="text-[#232321]">
                    {items.reduce((acc, item) => acc + item.quantity, 0)} Items
                  </span>
                  <span className="text-[#232321] font-black">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold uppercase tracking-wide">
                  <span className="text-[#232321]">Delivery</span>
                  <span className="text-[#232321] font-black">
                    ${delivery.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold uppercase tracking-wide">
                  <span className="text-[#232321]">Sales Tax</span>
                  <span className="text-[#232321] font-black">-</span>
                </div>

                <div className="flex justify-between text-2xl font-black pt-6 border-t-2 border-gray-200 mt-6">
                  <span className="text-[#232321] uppercase">Total</span>
                  <span className="text-[#232321]">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full cursor-pointer bg-[#232321] text-white py-5 rounded-2xl font-black uppercase text-sm tracking-[0.2em] mt-10 hover:bg-black transition-all active:scale-95 shadow-xl">
                Checkout
              </button>

              <button className="w-full text-[#232321] py-4 text-xs font-black uppercase underline underline-offset-8 mt-6 tracking-widest hover:text-[#437EF7] transition-colors">
                Use a promo code
              </button>
            </div>
          </div>
        </div>
      </Container>

      <div className="">
        <RelatedProducts />
      </div>
    </div>
  );
};

export default CartPage;
