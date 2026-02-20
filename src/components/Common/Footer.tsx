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
              <h3 className="text-[#FFA52F] text-4xl font-rubik font-semibold mb-6 tracking-wide leading-none">
                About us
              </h3>
              <p className="text-xl  font-semibold text-gray-300 leading-none font-open-sans">
                We are the biggest hyperstore in the universe. We got you all
                covered with exclusive collections and latest drops.
              </p>
            </div>
            <div>
              <h3 className="text-[#FFA52F] text-4xl font-rubik font-semibold mb-6 tracking-wide leading-none">
                Categories
              </h3>
              <ul className="space-y-3 text-xl  font-semibold text-gray-300 leading-none font-open-sans">
                <li className="hover:text-white transition">Runners</li>
                <li className="hover:text-white transition">Sneakers</li>
                <li className="hover:text-white transition">Basketball</li>
                <li className="hover:text-white transition">Outdoor</li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h3 className="text-[#FFA52F] text-4xl font-rubik font-semibold mb-6 tracking-wide leading-none">
                Company
              </h3>
              <ul className="space-y-3 text-xl  font-semibold text-gray-300 leading-none font-open-sans">
                <li className="hover:text-white transition">About</li>
                <li className="hover:text-white transition">Contact</li>
                <li className="hover:text-white transition">Blogs</li>
              </ul>
            </div>
            {/* Follow */}
            <div>
              <h3 className="text-[#FFA52F] text-4xl font-rubik font-semibold mb-6 tracking-wide leading-none">
                Follow us
              </h3>
              <div className="flex gap-4">
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                      fill="#E7E7E3"
                    />
                  </svg>
                </a>

                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                      fill="#E7E7E3"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
                      fill="#E7E7E3"
                    />
                  </svg>{" "}
                </a>
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6002 5.82C16.6002 5.82 17.1102 6.32 16.6002 5.82C15.9166 5.03962 15.5399 4.03743 15.5402 3H12.4502V15.4C12.4263 16.071 12.143 16.7066 11.6599 17.1729C11.1768 17.6393 10.5316 17.8999 9.86016 17.9C8.44016 17.9 7.26016 16.74 7.26016 15.3C7.26016 13.58 8.92016 12.29 10.6302 12.82V9.66C7.18016 9.2 4.16016 11.88 4.16016 15.3C4.16016 18.63 6.92016 21 9.85016 21C12.9902 21 15.5402 18.45 15.5402 15.3V9.01C16.7932 9.90985 18.2975 10.3926 19.8402 10.39V7.3C19.8402 7.3 17.9602 7.39 16.6002 5.82Z"
                      fill="#E7E7E3"
                    />
                  </svg>
                </a>
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
