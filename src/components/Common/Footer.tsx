import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

const Footer = () => {
  const categoryLinks = [
    { label: "Runners", href: "#" },
    { label: "Sneakers", href: "#" },
    { label: "Basketball", href: "#" },
    { label: "Outdoor", href: "#" },
  ];

  const companyLinks = [
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Blogs", href: "#" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "#",
      path: "M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z",
    },
    {
      label: "Instagram",
      href: "#",
      path: "M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z",
    },
    {
      label: "Twitter",
      href: "#",
      path: "M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z",
    },
    {
      label: "TikTok",
      href: "#",
      path: "M16.6002 5.82C16.6002 5.82 17.1102 6.32 16.6002 5.82C15.9166 5.03962 15.5399 4.03743 15.5402 3H12.4502V15.4C12.4263 16.071 12.143 16.7066 11.6599 17.1729C11.1768 17.6393 10.5316 17.8999 9.86016 17.9C8.44016 17.9 7.26016 16.74 7.26016 15.3C7.26016 13.58 8.92016 12.29 10.6302 12.82V9.66C7.18016 9.2 4.16016 11.88 4.16016 15.3C4.16016 18.63 6.92016 21 9.85016 21C12.9902 21 15.5402 18.45 15.5402 15.3V9.01C16.7932 9.90985 18.2975 10.3926 19.8402 10.39V7.3C19.8402 7.3 17.9602 7.39 16.6002 5.82Z",
    },
  ];

  return (
    <footer className="w-full bg-[#E7E7E3] pt-10 ">
      <Container>
        {/* Blue Newsletter Card */}
        <div className="bg-[#437EF7] rounded-t-[24px] md:rounded-t-[48px] p-4 pb-6 md:p-16 flex flex-col md:flex-row items-center justify-between relative z-20 mx-4 md:mx-0 font-rubik">
          <div className="max-w-xl mb-4 md:mb-10">
            <div className="">
              <h2 className="text-[32px] md:text-[48px] font-bold text-white leading-tight  md:uppercase px-4   mb-2 md:mb-4">
                Join our KicksPlus Club & get 15% off
              </h2>
              <p className=" text-[#E7E7E3] text-base md:text-xl px-4 mb-2 md:mb-4">
                Sign up for free! Join the community.
              </p>
            </div>
            <div className="flex flex-row gap-1 md:gap-3 w-full md:max-w-[420px] px-4 mb-2 md:mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="
      flex-1
      bg-transparent
      border border-white/30
      rounded-xl
      h-[40px] md:h-[48px]
      px-4 md:px-6
      text-white
      placeholder:text-white/60
      focus:outline-none
    "
              />

              <button
                className="
      flex items-center justify-center
      bg-[#232321]
      hover:bg-black
      transition-all duration-300
      text-white
      font-bold uppercase
      rounded-xl
      h-[40px] md:h-[48px]
      px-4 md:px-8
      whitespace-nowrap
    "
              >
                Submit
              </button>
            </div>
          </div>
          {/* Logo and Plus Icon Section */}

          <div className=" w-full md:w-auto mb-10 relative">
            <Image
              src="/assets/logo-white-plus.svg"
              alt="Branding"
              width={400}
              height={100}
              className="w-48 md:w-[315px] h-auto object-contain md:mt-4"
            />
          </div>
        </div>

        {/* Black Links Section */}
        <div className="bg-[#232321] rounded-t-[24px] md:rounded-t-[48px] -mt-4 md:-mt-16 pt-6 md:pt-32 mx-4 md:mx-0 px-4 md:px-16 text-white relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
            <div className=" md:col-span-2">
              <h3
                className="
  text-[#FFA52F]
  font-rubik
  font-semibold
  text-[24px] md:text-[36px]
  leading-[100%]
  tracking-[0]
  mb-6
"
              >
                About us
              </h3>
              <p
                className="
font-open-sans
  font-semibold
  text-[16px] md:text-[20px]
  text-gray-300
"
              >
                We are the biggest hyperstore in the universe. We got you all
                covered with exclusive collections and latest drops.
              </p>
            </div>
            <div className=" md:col-span-1">
              <h3
                className="text-[#FFA52F]
  font-rubik
  font-semibold
  text-[20px] md:text-[24px]
  leading-[100%]
  tracking-[0]
  mb-6"
              >
                Categories
              </h3>
              <ul className="space-y-3 text-xl  font-semibold text-gray-300 leading-none font-open-sans">
                {categoryLinks.map((link) => (
                  <li key={link.label} className="hover:text-white transition">
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company */}
            <div className=" md:col-span-1">
              <h3
                className="text-[#FFA52F]
  font-rubik
  font-semibold
  text-[20px] md:text-[24px]
  leading-[100%]
  tracking-[0]
  mb-6"
              >
                Company
              </h3>
              <ul className="space-y-3 text-xl  font-semibold text-gray-300 leading-none font-open-sans">
                {companyLinks.map((link) => (
                  <li key={link.label} className="hover:text-white transition">
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Follow */}
            <div className=" md:col-span-1">
              <h3
                className="text-[#FFA52F]
  font-rubik
  font-semibold
  text-[20px] md:text-[24px]
  leading-[100%]
  tracking-[0]
  mb-6"
              >
                Follow us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} aria-label={link.label}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={link.path} fill="#E7E7E3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* The Large Branding Image */}
          <div className="w-full overflow-hidden flex justify-center mt-10 md:mt-24">
            <img
              src="/assets/white-logo.png"
              alt="Branding"
              className="w-full  h-auto object-contain  opacity-100"
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
