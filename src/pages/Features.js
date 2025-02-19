import React from "react";
import "./Features.css"; // Ensure styling matches the provided design
import Navbar from "../components/Navbar.js";
import item1 from "./backgroundImage/item1.png";
import item2 from "./backgroundImage/item2.png";
import item3 from "./backgroundImage/item3.png";
import item4 from "./backgroundImage/item4.png";
import design from "./backgroundImage/design.png";
const features = [
  {
    title: "Monitor & Measure",
    description:
      "Feature: Track quantifiable and qualitative results to monitor progress and performance. Benefit: Make data-driven decisions and continuously improve your strategies by measuring the impact of your efforts with clear me...",
    image: item1,
    design: design,
  },
  {
    title: "Scheduling Functionality",
    description:
      "Schedule meetings and collaboration sessions between business owners and strategic advisors. Optimize your time and enhance productivity by coordinating effectively with your advisors.",
    image: item2,
    design: design
  },
  {
    title: "Cohort-based Learning",
    description:
      "Join exclusive cohorts led by industry experts to enhance your business skills and knowledge. Collaborate with like-minded entrepreneurs and accelerate your business growth through expert guidance.",
    image: item3,
    design: design
  },
  {
    title: "Personalized Business Assistance",
    description:
      "Utilize our advanced AI-powered tool to identify the best funding opportunities tailored to your business needs. Save time in securing capital by accessing a curated list of funding options.",
    image: item4,
    design: design
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="text-content">
        <h5 className="sub-heading">Key Features & Benefits</h5>
        <h2 className="main-heading">
  Unlock Exclusive Resources and Opportunities
</h2>

        <p>
          Introducing the BoostSociety.ai portal – your gateway to advanced business and technical functionality. <strong>Partner with us</strong> to host your educational, community, and business programs on our platform, benefiting from dynamic, expert-led cohorts and innovative tools. Enhance learning with interactive courses, robust community features, and seamless communication. Track progress efficiently and gain valuable insights with our monitoring tools. Elevate your organization and unlock your programs' full potential with BoostSociety.ai. Interested in joining one of our cohorts? Explore our offerings and apply TODAY!
        </p>
        <button className="view-all-btn">View All Features →</button>
      </div>
      <div className="cards-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.image} alt={feature.title} className="feature-icon" />
            
          
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <img src = {design} alt = "error" className ="corner-design"/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
