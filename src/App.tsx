import "./App.css";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import FeaturesSection from "./components/sections/features-section";
import HeroSection from "./components/sections/hero-section";
import TeamSection from "./components/sections/team-section";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
