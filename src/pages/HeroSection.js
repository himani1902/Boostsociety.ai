import { useState, useEffect } from "react";
import "./HeroSection.css"; 
import BoostSociety from "./backgroundImage/boost-society-ai.png";
import BusinessBoostSociety from "./backgroundImage/business-boost-society.png";
import { FaArrowRightLong } from "react-icons/fa6";

const slides = [
  {
    id: 1,
    title: "BoostSociety.Ai",
    text: "We offer a cutting-edge platform for hosting various programs, featuring expert-led cohorts & advanced tools. Explore dynamic partnership opportunities and see how we can elevate your organization or help you join one of our transformative cohorts!",
    image: BoostSociety,
  },
  {
    id: 2,
    title: "Business BOOST! Society™",
    text: "Welcome to Business BOOST! Society™. Join a community of like-minded business owners committed to positive impact and sustainable growth. At Business BOOST! Society™, we connect strategic vision with tangible results.",
    image: BusinessBoostSociety,
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasSlid, setHasSlid] = useState(false);

  useEffect(() => {
    if (!hasSlid) {
      const timer = setTimeout(() => {
        setCurrentSlide(1); 
        setHasSlid(true);
      }, 1000); // Slide changes after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [hasSlid]);

  return (
    <section className="hero-section">
      <div
        className="hero-carousel"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="hero-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay">
              <div className="content">
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
                <button className="cta-button">
  Know More <FaArrowRightLong className="arrow-icon" />
</button>

              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
