import React from "react";
import "../styles/featureSection.css";

const features = [
  {
    title: "Stay on Top of Due Dates",
    description:
      "Track all your bills in one place with clear due dates, status indicators, and automatic sorting — helping you avoid late fees and missed payments.",
    icon: "🗓️",
  },
  {
    title: "Quickly See What’s Paid vs Unpaid",
    description:
      "Visually mark bills as paid or unpaid with a single click, so you can easily manage your budget and know what still needs attention.",
    icon: "💵",
  },
  {
    title: "Simple, Fast, and Focused",
    description:
      "Unlike complicated finance apps, PayPenguin focuses only on what matters: listing your bills, letting you sort/edit them, and keeping it all lightweight and clutter-free.",
    icon: "😄",
  },
];

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <h1>Why use PayPenguin?</h1>
      <div className="cards">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
