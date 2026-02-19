import CategoriesSection from "@/components/Pages/HomePage/CategoriesSection";
import HeroSection from "@/components/Pages/HomePage/HeroSection";
import NewDrops from "@/components/Pages/HomePage/NewDropsSection";
import ReviewsSection from "@/components/Pages/HomePage/ReviewsSection";

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
