import penguin from "../assets/paypenguinheroimage.webp";
import { Link } from "react-router-dom";
import "../styles/heroSection.css";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-headings">
        <h1>Chill about your bills.</h1>
        <p>
          PayPenguin helps you track your monthly payments in a simple,
          easy-to-use interface, so you can stay on top of finances without the
          stress.
        </p>

        <Link to="dashboard" className="get-started-button" id="hero-image">
          Get Started
        </Link>
      </div>
      <img src={penguin} alt="penguin image" />
    </section>
  );
}
