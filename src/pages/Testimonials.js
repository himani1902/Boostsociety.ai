import React, { useState } from 'react';
import './Testimonials.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import person1 from './backgroundImage/person1.png';
import person2 from './backgroundImage/person2.png';
import person3 from './backgroundImage/person3.png';

const Testimonials = () => {
  const testimonialsData = [
    {
      image: person1,
      text: "This cohort has been amazing! I am so more confident about myself as a leader and the direction of my business. Thank you, Business BOOST! Society!!!",
      author: "Nathaniel, Owner",
    },
    {
      image: person2,
      text: "Taking over my late father's construction business as a woman in a male-dominated industry is tough. This cohort provided me with the knowledge, connections & confidence needed to navigate city contracts which my father wanted to pursue. Thanks, BOOST!",
      author: "Beatriz W., Owner",
    },
    {
      image: person3,
      text: "Being part of the 'BOOST! Your Business' cohort has been incredible. The guidance and support from my BSA and others were invaluable in helping me achieve several business goals. Thanks to BOOST!, my Comfy Care products are now on Amazon!",
      author: "Ta Nesha Justice, Owner",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTestimonials = testimonialsData.length;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials);
  };

  return (
    <div className="testimonials-container">
      <h1>You Are The Center Of Our Universe</h1>
      <h2>Testimonials</h2>
      <div className="testimonials">
        {/* Left Arrow Button */}
        <button
          className={`arrow left ${currentIndex === 0 ? 'disabled' : ''}`}
          style={{
           
            position: 'absolute', // Ensure the element is positioned relative to its nearest positioned ancestor
            top: '67%',
            left: '6%',
            transform: 'translate(-50%, -50%)' // Optional: to center the element at the given top and left percentages
          }}
          onClick={prevTestimonial}
          disabled={currentIndex === 0}
        >
          <FaChevronLeft />
        </button>

        {/* Testimonials */}
        {testimonialsData.map((testimonial, index) => {
          // Dynamically change background color based on odd or even index
          const backgroundColor = index % 2 === 0 ? 'rgb(233, 233, 233)' : 'rgba(82, 49, 104, 0.1)';
          return (
            <div className="testimonial-card" key={index} style={{ backgroundColor }}>
              <img src={testimonial.image} alt={testimonial.author} />
              <p>{testimonial.text}</p>
              <p className="author">{testimonial.author}</p>
            </div>
          );
        })}

        {/* Right Arrow Button */}
        <button
          className={`arrow right ${currentIndex === totalTestimonials - 1 ? 'disabled' : ''}`}
          style={{
           
            position: 'absolute', // Ensure the element is positioned relative to its nearest positioned ancestor
            top: '67%',
            right: '3.5%',
            transform: 'translate(-50%, -50%)' // Optional: to center the element at the given top and left percentages
          }}
          onClick={nextTestimonial}
          disabled={currentIndex === totalTestimonials - 1}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
