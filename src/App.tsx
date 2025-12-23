import "./App.css";
import Header from "./components/layout/header";
import HeroSection from "./components/sections/hero-section";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
    </div>
  );
}
