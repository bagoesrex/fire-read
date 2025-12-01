import HeroSection from "@/components/home/hero-section";
import RecommendationSection from "@/components/home/recommendation-section";
import Header from "@/components/layout/header";

export default function HomePage() {
  return (
    <main className="relative w-full">
      <Header />
      <HeroSection />
      <RecommendationSection />
    </main>
  );
}
