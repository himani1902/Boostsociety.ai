import React from "react";
import "./Testimonials.css";
import { Carousel } from "primereact/carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import person1 from "./backgroundImage/person1.png";
import person2 from "./backgroundImage/person2.png";
import person3 from "./backgroundImage/person3.png";

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

  const responsiveOptions = [
    {
      breakpoint: "900px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "600px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const testimonialTemplate =  (testimonial, index)  => {
    return (
      <div className="testimonial-card"   style={{
        backgroundColor: index % 2 === 0 ? "#e1e1e1" : "rgba(82, 49, 104, 0.1)", // Pink for even, Red for odd
      }} >
        <img src={testimonial.image} alt={testimonial.author} />
        <p>{testimonial.text}</p>
        <p className="author">{testimonial.author}</p>
      </div>
    );
  };

  return (
    <div className="testimonials-container">
      <h1>You Are The Center Of Our Universe</h1>
      <h2>Testimonials</h2>
      <div className="testimonials-wrapper">
        <Carousel
          value={testimonialsData}
          itemTemplate={testimonialTemplate}
          numVisible={3}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          showIndicators={false}
          showNavigators={true}
        />
      </div>
      
    </div>
  );
};

export default Testimonials;
