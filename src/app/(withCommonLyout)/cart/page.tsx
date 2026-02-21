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
      <div className="bg-[#E7E7E3] min-h-screen py-6 md:py-10 flex flex-col items-center justify-center font-rubik">
        <Container>
          <div className="flex flex-col items-center justify-center gap-6 text-center animate-fade-in">
            <h2 className="text-2xl md:text-4xl font-bold text-[#232321] uppercase tracking-tight">
              Your Bag is Empty
            </h2>
            <p className="text-gray-500 max-w-md">
              Looks like you haven't added anything to your bag yet. Start
              shopping to fill it up!
            </p>
            <Link href="/">
              <button className="bg-[#232321] cursor-pointer text-white px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-black transition-colors">
                Start Shopping
              </button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-[#E7E7E3] min-h-screen  py-2 md:py-8 font-rubik">
      <Container>
        {/* Header Promo Section */}
        <div className="mb-8 md:mb-12 px-4 md:px-0">
          <h1
            className="
      font-rubik font-semibold
      text-[24px] md:text-[32px]
      leading-[100%]
      tracking-[0%]
      text-[#232321]
      mb-3 uppercase
    "
          >
            Saving to celebrate
          </h1>
          <p
            className="
      font-open-sans font-semibold
      text-[12px] md:text-[14px]
      text-[#232321] opacity-80

    "
          >
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

        <div className="grid grid-cols-1 lg:grid-cols-12  md:gap-11  space-y-6 items-center px-4">
          {/* --- LEFT: YOUR BAG (8/12 cols) --- */}
          <div className="lg:col-span-8">
            <div className="bg-[#FAFAFA]  rounded-[16px] p-4 md:p-6  border border-gray-100">
              <h2 className="text-2xl md:text-[28px] font-bold text-[#232321] mb-2 ">
                Your Bag
              </h2>
              <p className="text-xs md:text-sm text-gray-400 mb-8  tracking-widest font-semibold">
                Items in your bag not reserved - check out now to make them
                yours.
              </p>

              {items.map((item) => (
                <div
                  key={item.variantId}
                  className="flex gap-4 md:gap-8 border-b border-gray-200 last:border-0 pb-6 mb-6"
                >
                  {/* Image */}
                  <div className="rounded-[20px] overflow-hidden w-[120px] h-[120px] md:w-[180px] md:h-[180px] bg-[#F4F4F4] flex items-center justify-center">
                    <Image
                      width={180}
                      height={180}
                      src={item.image || "/assets/placeholder.png"}
                      alt={item.name}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    {/* Top Section */}
                    <div>
                      <div className=" flex justify-between items-baseline">
                        <h3 className="text-sm md:text-xl font-bold text-[#232321] uppercase leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-lg md:text-2xl font-black text-[#437EF7] mt-2">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      <p className="text-xs md:text-sm text-[#232321] opacity-70 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center gap-2">
                        <span className="text-xs md:text-sm text-[#232321] opacity-70">
                          Qty
                        </span>

                        <select
                          value={item.quantity}
                          onChange={(e) =>
                            dispatch(
                              updateQuantity({
                                productId: item.productId,
                                variantId: item.variantId,
                                quantity: Number(e.target.value),
                              }),
                            )
                          }
                          className="bg-[#F4F4F4] text-sm rounded-lg px-3 py-1 focus:outline-none"
                        >
                          {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-4">
                        <button className="text-[#232321] hover:text-[#437EF7] transition">
                          <svg
                            className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
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
                          className="text-[#232321] hover:text-red-500 transition"
                        >
                          <svg
                            className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
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
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT: ORDER SUMMARY (4/12 cols) --- */}
          <div className="lg:col-span-4 ">
            <div className="bg-[#FAFAFA]  md:bg-transparent p-4 md:p-6 rounded-[16px] md:rounded-none animate-fade-in">
              <h2 className="text-xl md:text-[32x] font-bold text-[#232321] mb-4 md:mb-6 uppercase tracking-tight">
                Order Summary
              </h2>

              <div className="space-y-4">
                {/* Items */}
                <div className="flex justify-between text-base font-semibold uppercase text-[#232321]">
                  <span>
                    {items.reduce((acc, item) => acc + item.quantity, 0)} Items
                  </span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>

                {/* Delivery */}
                <div className="flex justify-between text-base font-semibold uppercase text-[#232321]">
                  <span>Delivery</span>
                  <span>${delivery.toFixed(2)}</span>
                </div>

                {/* Sales Tax */}
                <div className="flex justify-between text-base font-semibold uppercase text-[#232321]">
                  <span>Sales Tax</span>
                  <span>-</span>
                </div>

                {/* Total */}
                <div className="flex justify-between text-xl font-semibold uppercase text-[#232321]">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full max-w-[418px] h-[48px] flex items-center justify-center mt-4 md:mt-6 px-4 py-2 bg-[#232321] text-white rounded-[8px] font-black uppercase text-sm tracking-[0.2em] hover:bg-black hover:scale-[1.02] transition-all active:scale-95 shadow-xl">
                <span>Checkout</span>
              </button>

              <button className="w-full text-[#232321] py-4 text-base md:text-xl font-black  flex justify-start underline underline-offset-8  md:py-6 tracking-widest hover:text-[#437EF7] transition-colors">
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
