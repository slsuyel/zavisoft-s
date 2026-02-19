import CategoriesSection from "@/components/HomePage/CategoriesSection";
import HeroSection from "@/components/HomePage/HeroSection";
import NewDrops from "@/components/HomePage/NewDropsSection";
import ReviewsSection from "@/components/HomePage/ReviewsSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <NewDrops />
      <CategoriesSection />
      <ReviewsSection />
    </div>
  );
}
