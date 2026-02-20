"use client";

import React, { useState } from "react";
import { Menu, X, Search, User, ChevronDown, Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "../Redux/hooks";
import Container from "./Container";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useAppSelector((state) => state.cart);
  return (
    <>
      <header className="w-full px-4 py-4 md:py-8 bg-[#E7E7E3]">
        <Container>
          <div className="bg-white rounded-2xl md:rounded-[24px] px-6 py-4 md:px-8 md:py-8 flex items-center justify-between shadow-sm transition-all">
            {/* --- MOBILE: Menu Toggle --- */}
            <div className="flex md:hidden flex-1">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                aria-label="Open Menu"
              >
                <Menu size={24} strokeWidth={2.5} />
              </button>
            </div>

            {/* --- DESKTOP: Navigation --- */}
            <nav className="hidden md:flex items-center gap-8 flex-1">
              <Link
                href="/"
                className="font-bold text-sm lg:text-base flex items-center gap-1 hover:text-blue-600 transition-colors"
              >
                New Drops <Flame size={16} className="text-orange-500" />
              </Link>
              <div className="group cursor-pointer font-bold text-sm lg:text-base flex items-center gap-1 hover:text-blue-600 transition-colors">
                Men{" "}
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.563477 0.0234375H7.11621C7.57661 0.0234375 7.82492 0.563357 7.52539 0.913086L4.24902 4.73633C4.19847 4.79525 4.13596 4.84254 4.06543 4.875C3.99479 4.90748 3.91759 4.9248 3.83984 4.9248C3.76224 4.92475 3.68574 4.90741 3.61523 4.875C3.5446 4.84252 3.48127 4.79535 3.43066 4.73633L0.155273 0.913086L0.104492 0.845703C-0.113992 0.498212 0.131881 0.0234375 0.563477 0.0234375Z"
                    fill="#232321"
                    stroke="#232321"
                    strokeWidth="0.046875"
                  />
                </svg>
              </div>
              <div className="group cursor-pointer font-bold text-sm lg:text-base flex items-center gap-1 hover:text-blue-600 transition-colors">
                Women{" "}
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.563477 0.0234375H7.11621C7.57661 0.0234375 7.82492 0.563357 7.52539 0.913086L4.24902 4.73633C4.19847 4.79525 4.13596 4.84254 4.06543 4.875C3.99479 4.90748 3.91759 4.9248 3.83984 4.9248C3.76224 4.92475 3.68574 4.90741 3.61523 4.875C3.5446 4.84252 3.48127 4.79535 3.43066 4.73633L0.155273 0.913086L0.104492 0.845703C-0.113992 0.498212 0.131881 0.0234375 0.563477 0.0234375Z"
                    fill="#232321"
                    stroke="#232321"
                    strokeWidth="0.046875"
                  />
                </svg>
              </div>
            </nav>

            {/* --- LOGO --- */}
            <div className="shrink-0">
              <Link
                href="/"
                className="text-2xl md:text-3xl font-black tracking-tighter"
              >
                <Image src="/logo.svg" alt="Logo" width={100} height={100} />
              </Link>
            </div>

            {/* --- ACTIONS --- */}
            <div className="flex items-center justify-end gap-4 md:gap-6 flex-1">
              <button className="hidden md:block hover:text-blue-600 transition-colors">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1797 2.64844C17.4352 2.64844 21.7117 6.92418 21.7119 12.1797C21.7142 14.2372 21.0463 16.2397 19.8105 17.8848L19.7988 17.9014L24.959 23.0615C25.187 23.3173 25.3083 23.6506 25.2988 23.9932C25.2892 24.3364 25.1491 24.6634 24.9062 24.9062C24.6634 25.1491 24.3364 25.2892 23.9932 25.2988C23.6929 25.3072 23.4002 25.2146 23.1602 25.0381L23.0605 24.958L17.9014 19.7988L17.8848 19.8105C16.2397 21.0463 14.2372 21.7142 12.1797 21.7119C6.92418 21.7117 2.64844 17.4352 2.64844 12.1797C2.64861 6.92429 6.92429 2.64861 12.1797 2.64844ZM13.5156 5.46289C12.1875 5.1988 10.8107 5.3344 9.55957 5.85254C8.30818 6.37088 7.23787 7.24878 6.48535 8.375C5.73291 9.50113 5.33209 10.8253 5.33203 12.1797C5.33421 13.9953 6.05599 15.7367 7.33984 17.0205C8.62361 18.3042 10.3642 19.0261 12.1797 19.0283C13.5341 19.0283 14.8582 18.6265 15.9844 17.874C17.1106 17.1215 17.9885 16.0521 18.5068 14.8008C19.0252 13.5494 19.1607 12.1722 18.8965 10.8438C18.6322 9.51546 17.9801 8.29558 17.0225 7.33789C16.0647 6.38012 14.8441 5.72714 13.5156 5.46289Z"
                    fill="#232321"
                    stroke="#232321"
                    strokeWidth="0.046875"
                  />
                </svg>
              </button>

              <button className="hover:text-blue-600 transition-colors">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.75 12.0234C11.9878 12.0234 14.1678 12.6551 15.8877 13.8008C17.823 15.0911 19.0538 16.9293 19.4482 19.1172C19.5381 19.6139 19.4161 20.1044 19.1162 20.4629C18.9801 20.626 18.8092 20.7569 18.6162 20.8457C18.4234 20.9344 18.2132 20.9792 18.001 20.9766H1.5C1.28751 20.9793 1.07685 20.9345 0.883789 20.8457C0.69082 20.7569 0.519925 20.626 0.383789 20.4629C0.0841169 20.1045 -0.0369908 19.6147 0.0527344 19.1182C0.447172 16.9301 1.67769 15.0916 3.61328 13.8008C5.33311 12.6547 7.51229 12.0235 9.75 12.0234ZM9.75 0.0234375C11.1499 0.0234375 12.4177 0.563324 13.3252 1.54297C14.2439 2.53491 14.6919 3.87068 14.5859 5.30371C14.3751 8.15903 12.2065 10.4766 9.75 10.4766C7.29356 10.4764 5.12155 8.15841 4.91406 5.30273C4.80951 3.85668 5.25426 2.5185 6.16699 1.53418C7.07018 0.560579 8.34245 0.0235056 9.75 0.0234375Z"
                    fill="#232321"
                    stroke="#232321"
                    strokeWidth="0.046875"
                  />
                </svg>
              </button>

              <Link href="/cart">
                <button className="relative cursor-pointer flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-[#FFA52F] rounded-full text-black font-bold text-xs hover:scale-105 transition-transform">
                  {items.length}
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </header>

      {/* --- MOBILE SIDEBAR DRAWER --- */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed inset-y-0 left-0 w-[280px] bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="text-2xl font-black tracking-tighter">KICKS</span>
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            <Link
              href="/"
              className="text-lg font-bold flex items-center gap-2"
            >
              New Drops <Flame size={18} className="text-orange-500" />
            </Link>
            <div className="text-lg font-bold flex items-center justify-between">
              Men <ChevronDown size={18} />
            </div>
            <div className="text-lg font-bold flex items-center justify-between">
              Women <ChevronDown size={18} />
            </div>
          </nav>

          <div className="absolute bottom-8 left-6 right-6">
            <button className="w-full flex items-center justify-center gap-2 border-2 border-black py-3 rounded-xl font-bold">
              <Search size={20} /> Search Store
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
