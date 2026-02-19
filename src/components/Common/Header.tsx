"use client";

import React, { useState } from "react";
import { Menu, X, Search, User, ChevronDown, Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full px-4 py-4 md:py-8 bg-[#F5F5F5]">
        <div className="max-w-[1320px] mx-auto bg-white rounded-2xl md:rounded-[32px] px-6 py-4 md:px-8 md:py-6 flex items-center justify-between shadow-sm transition-all">
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
              href="#"
              className="font-bold text-sm lg:text-base flex items-center gap-1 hover:text-blue-600 transition-colors"
            >
              New Drops <Flame size={16} className="text-orange-500" />
            </Link>
            <div className="group cursor-pointer font-bold text-sm lg:text-base flex items-center gap-1 hover:text-blue-600 transition-colors">
              Men{" "}
              <ChevronDown
                size={14}
                className="group-hover:rotate-180 transition-transform"
              />
            </div>
            <div className="group cursor-pointer font-bold text-sm lg:text-base flex items-center gap-1 hover:text-blue-600 transition-colors">
              Women{" "}
              <ChevronDown
                size={14}
                className="group-hover:rotate-180 transition-transform"
              />
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
              <Search size={20} />
            </button>

            <button className="hover:text-blue-600 transition-colors">
              <User className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button className="relative flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-[#FFA52F] rounded-full text-black font-bold text-xs hover:scale-105 transition-transform">
              0
            </button>
          </div>
        </div>
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
              href="#"
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
