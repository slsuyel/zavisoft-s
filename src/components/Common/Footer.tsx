import { Facebook, Instagram, Twitter } from "lucide-react";
import Container from "./Container";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F5F5F5] pt-10 ">
      <Container>
        {/* Blue Newsletter Card */}
        <div className="bg-[#437EF7] rounded-[48px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between relative z-20 mx-4 md:mx-0">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-[64px] font-bold text-white leading-tight uppercase mb-6">
              Join our KicksPlus Club & get 15% off
            </h2>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border border-white/30 rounded-xl px-6 py-4 text-white placeholder:text-white/60 focus:outline-none flex-1"
              />
              <button className="bg-[#232321] cursor-pointer hover:bg-black transition-all duration-300 text-white px-8 py-4 rounded-xl font-bold uppercase">
                Submit
              </button>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div>
              <Image
                src={`/assets/logo-white.svg`}
                alt="Branding"
                width={315}
                height={90}
                className="w-full max-w-[1200px] h-auto object-contain translate-y-1/3 opacity-100"
              />
            </div>
            <span className="absolute top-2 -right-6 md:-right-8 ">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 3.02344C23.1552 3.02344 28.9766 8.84482 28.9766 16C28.9766 23.1552 23.1552 28.9766 16 28.9766C8.84482 28.9766 3.02344 23.1552 3.02344 16C3.02344 8.84482 8.84482 3.02344 16 3.02344ZM16 9.97656C15.7286 9.97656 15.4683 10.0844 15.2764 10.2764C15.0844 10.4683 14.9766 10.7286 14.9766 11V14.9766H11C10.7286 14.9766 10.4683 15.0844 10.2764 15.2764C10.0844 15.4683 9.97656 15.7286 9.97656 16C9.97656 16.2714 10.0844 16.5317 10.2764 16.7236C10.4683 16.9156 10.7286 17.0234 11 17.0234H14.9766V21C14.9766 21.2714 15.0844 21.5317 15.2764 21.7236C15.4683 21.9156 15.7286 22.0234 16 22.0234C16.2714 22.0234 16.5317 21.9156 16.7236 21.7236C16.9156 21.5317 17.0234 21.2714 17.0234 21V17.0234H21C21.2714 17.0234 21.5317 16.9156 21.7236 16.7236C21.9156 16.5317 22.0234 16.2714 22.0234 16C22.0234 15.7286 21.9156 15.4683 21.7236 15.2764C21.5317 15.0844 21.2714 14.9766 21 14.9766H17.0234V11C17.0234 10.7286 16.9156 10.4683 16.7236 10.2764C16.5317 10.0844 16.2714 9.97656 16 9.97656Z"
                  fill="#FFA52F"
                  stroke="#FFA52F"
                  strokeWidth="0.046875"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Black Links Section */}
        <div className="bg-[#232321] rounded-[48px] -mt-16 pt-32 pb-8 px-8 md:px-16 text-white relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-[#FFA52F] text-2xl font-bold mb-4">
                About us
              </h3>
              <p className="text-gray-400">
                We are the biggest hyperstore in the universe. We got you all
                covered with exclusive collections.
              </p>
            </div>
            <div>
              <h3 className="text-[#FFA52F] text-2xl font-bold mb-4">
                Categories
              </h3>
              <ul className="space-y-2 text-sm font-bold uppercase">
                <li>Runners</li>
                <li>Sneakers</li>
                <li>Basketball</li>
                <li>Outdoor</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#FFA52F] text-2xl font-bold mb-4">
                Company
              </h3>
              <ul className="space-y-2 text-sm font-bold uppercase">
                <li>About</li>
                <li>Contact</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#FFA52F] text-2xl font-bold mb-4">
                Follow us
              </h3>
              <div className="flex gap-4">
                <Facebook size={20} /> <Instagram size={20} />{" "}
                <Twitter size={20} />
              </div>
            </div>
          </div>

          {/* The Large Branding Image */}
          <div className="w-full overflow-hidden flex justify-center">
            <img
              src="/assets/white-logo.png"
              alt="Branding"
              className="w-full max-w-[1200px] h-auto object-contain translate-y-1/3 opacity-100"
            />
          </div>
        </div>
        <p className="text-center py-6 text-gray-500 text-xs font-bold">
          © All rights reserved
        </p>
      </Container>
    </footer>
  );
};
export default Footer;
