import { Facebook, Instagram, Twitter } from "lucide-react";
import Container from "./Container";

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
              <button className="bg-[#232321] text-white px-8 py-4 rounded-xl font-bold uppercase">
                Submit
              </button>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <span className="text-7xl md:text-[160px] font-black text-white tracking-tighter">
              KICKS
            </span>
            <span className="absolute top-2 -right-6 md:-right-12 text-[#FFA52F] text-4xl md:text-6xl font-bold">
              +
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
