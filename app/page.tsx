import HeroSection from "./components/HeroSection";
import CoffeeProducts from "./components/CoffeeProducts";
import VisitUs from "./components/VisitUs";
import ScrollRevealFallback from "./components/ScrollRevealFallback";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CoffeeProducts />
      <VisitUs />
      <ScrollRevealFallback />
    </main>
  );
}
