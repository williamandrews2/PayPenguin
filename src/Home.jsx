import FeatureSection from "./components/FeatureSection";
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import "./styles/header.css";

function Home() {
  return (
    <div className="app-container-wrapper">
      <div className="app-container">
        <Header />
        <HeroSection />
        <FeatureSection />
      </div>
    </div>
  );
}

export default Home;
