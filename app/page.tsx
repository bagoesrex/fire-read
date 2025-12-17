import BrowseCategoriesSection from "@/components/home/browse-categories-section";
import HeroSection from "@/components/home/hero-section";
import RecentBooksSection from "@/components/home/recent-books-section";
import TrendingQuestionsSection from "@/components/home/trending-questions-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <RecentBooksSection />
      <TrendingQuestionsSection />
      <BrowseCategoriesSection />
    </main>
  );
}
