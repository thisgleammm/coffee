import HeroSection from "./components/HeroSection";
import CoffeeProducts from "./components/CoffeeProducts";
import LivingSection from "./components/LivingSection";
import VisitUs from "./components/VisitUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CoffeeProducts />
      <LivingSection />
      <VisitUs />
    </main>
  );
}
