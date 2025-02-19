import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Partners.css";
import design from "./backgroundImage/design.png";




const partnersData = [
  {
    img: "/images/usbc.png", // **REPLACE WITH ACTUAL PATH**
    name: "U.S. Black Chambers",
    desc: "Affectionately known as the \"National Voice of Black Businesses\", the USBC provides committed, visionary leadership, and advocacy in the realization of economic empowerment.",
    link: "Learn more →"
  },
  {
    img: "/images/atlanta.png", // **REPLACE WITH ACTUAL PATH**
    name: "City of Atlanta",
    desc: "Atlanta, Georgia, is a major transportation hub with Hartsfield-Jackson Atlanta International Airport, hosting over 1,000 international businesses and consulates, and is home to 13 Fortune 500 companies. Atlanta has rapidly grown into a modern metropolis.",
    link: "Learn more →"
  },
  {
    img: "/images/cbc.png", // **REPLACE WITH ACTUAL PATH**
    name: "Congressional Black Caucus",
    desc: "CBC is committed to using the full Constitutional power, statutory authority & financial resources of the federal government to ensure that African Americans and other marginalized communities in the US, have the opportunity to achieve the American Dream",
    link: "Learn more →"
  },
  {
    img: "/images/sldc.png", // **REPLACE WITH ACTUAL PATH**
    name: "SLDC - St. Louis",
    desc: "SLDC is the independent economic development agency serving the City of St. Louis, MO. It's an action-oriented organization that exists to empower, develop and transform St. Louis through a vibrant, just & growing economy where all people can thrive.",
    link: "Learn more →"
  },
  {
    img: "/images/black.png", // **REPLACE WITH ACTUAL PATH**
    name: "NYSBBA",
    desc: "The New York State Black Business Alliance (NYSBBA) was created to empower and sustain Black businesses and the communities where they are domiciled through entrepreneurship and capitalistic initiatives across the State.",
    link: "Learn more →"
  },
  {
    img: "/images/nfbpa.png", // **REPLACE WITH ACTUAL PATH**
    name: "NFBPA",
    desc: "The National Forum for Black Public Administrators (NFBPA), a 501(c)(3) nonprofit organization, is the principal and most progressive organization dedicated to the advancement of black public leadership in local and state governments.",
    link: "Learn more →"
  },
  {
    img: "/images/aacng.png", // **REPLACE WITH ACTUAL PATH**
    name: "AACCNJ",
    desc: "The African American Chamber of Commerce of New Jersey is dedicated to economically empowering and sustaining African American communities and businesses through entrepreneurship and capitalistic initiatives throughout NJ and in partnership with the NBCC.",
    link: "Learn more →" // Added link text
  },
  {
    img: "/images/lab.png", // **REPLACE WITH ACTUAL PATH**
    name: "Bunker Labs",
    desc: "With more resources than ever to support our community of entrepreneurs, Bunker Labs/IVMF's mission is to help veteran and military spouse entrepreneurs alike launch and grow their own businesses.",
    link: "Learn more →" // Added link text
  },
  {
    img: "/images/boost.png", // **REPLACE WITH ACTUAL PATH**
    name: "Business B...",
    desc: "From personalized insights and expert advice to exclusive events and collaboration opportunities, your Business BOOST! Society account empowers you to take your business to new heights.",
    link: "Learn more →"  // Added link text
  },
];

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3.5;

  const nextSlide = () => {
    if (currentIndex + visibleCards < partnersData.length) {
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + 1, partnersData.length - visibleCards)
      );
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  return (
    <section className="partners">
      <div className="partners-content">
        <h2>Collaborative Partners</h2>
        <p>
        Business Boost! Society is proud to collaborate with industry-leading partners who share our vision for innovation and excellence. These strategic partnerships allow us to combine our expertise and resources to deliver exceptional solutions to our clients. Here are some of our valued collaborative partners.
        </p>
      </div>
      <div className="carousel-container">
        <button className={`arrow left ${currentIndex === 0 ? "disabled" : ""}`} onClick={prevSlide} disabled={currentIndex === 0}>
          <FaChevronLeft />
        </button>
        <div className="partners-carousel-wrapper">
          <div className="partners-carousel" style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}>
            {partnersData.map((partner, index) => (
              <div 
                key={index} 
                className="partner-card" 
                style={{ backgroundColor: index % 2 === 0 ? 'rgba(82, 49, 104, 0.1)': 'rgba(255, 188, 109, 0.1)'}} // Even = Pink, Odd = Red
              >
                <img src={partner.img} alt={partner.name} />
                <div className="card-content">
                  <h3>{partner.name}</h3>
                  <p>{partner.desc}</p>
                  <a href="#">Learn more →</a>
                </div>
                <div className="side-design">
                  <img src={design} alt="corner design" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className={`arrow right ${currentIndex + visibleCards >= partnersData.length ? "disabled" : ""}`} onClick={nextSlide} disabled={currentIndex + visibleCards >= partnersData.length}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Partners;
