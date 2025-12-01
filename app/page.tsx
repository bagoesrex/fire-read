import HeroSection from "@/components/home/hero-section";
import Header from "@/components/layout/header";
import RegisterForm from "@/features/auth/components/register-form";

export default function HomePage() {
  return (
    <main className="relative w-full">
      <Header />
      <HeroSection />
      <RegisterForm />
    </main>
  );
}
