import React, { useRef, useEffect, useState } from "react";
import "./CollaborativeProjects.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import card1 from "./backgroundImage/card1.png";
import card2 from "./backgroundImage/card2.png";
import background from "./backgroundImage/projectvector.png";

const CollaborativeProjects = () => {
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateCardWidth = () => {
      if (carouselRef.current) {
        const firstCard = carouselRef.current.children[0];
        if (firstCard) {
          setCardWidth(firstCard.offsetWidth + 30); // Adding gap between cards
        }
      }
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  return (
    <div
      className="projects-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h2 className="projects-title">Collaborative Projects</h2>
      <p className="projects-description">
        Our collaborative projects have been at the forefront of innovation,
        solving complex challenges and achieving remarkable outcomes. Here are
        some notable projects we have undertaken in collaboration with our
        partners.
      </p>
      <div className="carousel">
        <button className="arrow left" onClick={scrollLeft}>
          <FaChevronLeft size={30} color="white" />
        </button>
        <div className="cards-wrapper" ref={carouselRef}>
          <div className="card">
            <div
              className="card1-image"
              style={{ backgroundImage: `url(${card1})` }}
            ></div>
            <div className="card-content">
              <p>
                VetsFest 2024: Filling Your Bunker for Entrepreneurial Success! VetsFest 2024, hosted by the Bunker Labs Ambassador Atlanta Team, is a premier event dedicated to empowering veteran and military spouse entrepreneurs
              </p>
              <a href="#" className="learn-more">
                Learn more →
              </a>
            </div>
          </div>
          <div className="card">
            <div
              className="card2-image"
              style={{ backgroundImage: `url(${card2})` }}
            ></div>
            <div className="card-content">
              <p>
                Fascinating conversations with extraordinary individuals. Engage in enlightening exchanges with trailblazers from various sectors and delve into the stories that shaped their paths to success.
              </p>
              <a href="#" className="learn-more">
                Learn more →
              </a>
            </div>
          </div>
        </div>
        <button className="arrow right" onClick={scrollRight}>
          <FaChevronRight size={30} color="white" />
        </button>
      </div>
    </div>
  );
};

export default CollaborativeProjects;
