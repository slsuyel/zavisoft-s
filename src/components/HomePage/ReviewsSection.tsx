import React from "react";
import Container from "@/components/Common/Container";
import { Star } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      title: "Good Quality",
      desc: "I highly recommend shopping from kicks",
      rating: 5.0,
      userImg: "/assets/user1.png",
      productImg: "/assets/review-shoe1.png",
    },
    {
      id: 2,
      title: "Good Quality",
      desc: "I highly recommend shopping from kicks",
      rating: 5.0,
      userImg: "/assets/user2.png",
      productImg: "/assets/review-shoe2.png",
    },
    {
      id: 3,
      title: "Good Quality",
      desc: "I highly recommend shopping from kicks",
      rating: 5.0,
      userImg: "/assets/user3.png",
      productImg: "/assets/review-shoe3.png",
    },
  ];

  return (
    <section className="w-full  md:pt-[90px] md:pb-[90px] bg-[#E7E7E3] font-rubik">
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between py-5 md:mb-[40px] px-4 md:px-0">
          <h2
            className="
            font-semibold
            uppercase
            text-[24px] md:text-[74px]
            leading-[100%] md:leading-[95%]
          "
          >
            Reviews
          </h2>

          <button
            className="
              bg-[#437EF7] text-white
              font-semibold uppercase
              text-[12px] leading-[100%]
              rounded-[8px]
              flex items-center justify-center gap-[4px]
              
              w-[89px] h-[40px]
              px-[16px] py-[8px]

              md:w-[121px] md:h-[48px]
              md:px-[32px]

              transition-all duration-300
              hover:bg-[#2f6fe6]
              active:scale-95
            "
          >
            See All
          </button>
        </div>

        {/* Grid */}
        <div
          className="
          grid 
          grid-cols-1 
          md:grid-cols-3 
          gap-6
          px-4 md:px-0
        "
        >
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`
      bg-white
      rounded-[28px]
      overflow-hidden
      flex flex-col
      transition-transform duration-300
      hover:-translate-y-1
      ${index !== 0 ? "hidden md:flex" : ""}
    `}
            >
              {/* Top */}
              <div className="p-6 md:p-8 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[20px] md:text-[24px] font-semibold text-[#232321] leading-[100%] mb-1">
                      {review.title}
                    </h3>
                    <p className="text-gray-500 text-[14px] md:text-[16px] leading-relaxed">
                      {review.desc}
                    </p>
                  </div>

                  <img
                    src={review.userImg}
                    alt="User"
                    className="w-12 h-12 rounded-full border-2 border-[#437EF7] object-cover"
                  />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFA52F" color="#FFA52F" />
                  ))}
                  <span className="ml-2 font-semibold text-[#232321] text-[14px]">
                    {review.rating.toFixed(1)}
                  </span>
                </div>
              </div>

              {/* Bottom Image */}
              <div className="h-[220px] md:h-[260px] w-full overflow-hidden">
                <img
                  src={review.productImg}
                  alt="Review context"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ReviewsSection;
