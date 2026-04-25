import penguin from "../assets/paypenguinheroimage.webp";
import { Link } from "react-router-dom";
import "../styles/heroSection.css";
import { useAuth } from "../contexts/AuthContext";

export function HeroSection() {
  const { token } = useAuth();

  return (
    <section className="hero-section">
      <div className="hero-headings">
        <h1>Chill about your bills.</h1>
        <p>
          PayPenguin helps you track your monthly payments in a simple,
          easy-to-use interface, so you can stay on top of finances without the
          stress.
        </p>

        {token ? (
          <Link to="dashboard" className="get-started-button">
            Dashboard
          </Link>
        ) : (
          <Link to="register" className="get-started-button">
            Start now!
          </Link>
        )}
      </div>
      <img src={penguin} alt="penguin image" />
    </section>
  );
}
