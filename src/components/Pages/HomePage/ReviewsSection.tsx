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
      userImg: "/assets/user1.png", // Replace with your path
      productImg: "/assets/review-shoe1.png", // Replace with your path
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
    <section className="w-full py-16 md:py-24 bg-[#F5F5F5] ">
      <Container>
        {/* Header Section */}
        <div className="flex items-center justify-between mb-10 px-4 md:px-0">
          <h2 className="text-4xl md:text-[74px] font-bold uppercase leading-none text-[#232321]">
            Reviews
          </h2>
          <button className="bg-[#437EF7] text-white px-6 py-3 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-blue-700 transition-colors">
            See All
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-[28px] overflow-hidden flex flex-col shadow-sm"
            >
              {/* Top Content: Text & User */}
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#232321] mb-1">
                      {review.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
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
                  <span className="ml-2 font-bold text-[#232321]">
                    {review.rating.toFixed(1)}
                  </span>
                </div>
              </div>

              {/* Bottom Content: Image */}
              <div className="h-[250px] md:h-[300px] w-full overflow-hidden">
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
