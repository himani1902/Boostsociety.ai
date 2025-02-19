import React from "react";
import "./Work.css";
import backimage from "./backgroundImage/backimage.png";

const Work = () => {
  return (
    <div className="work-container">
      <div className="overlaywork">
        <div className="contenttext">
          <h5>Next Steps:</h5>
          <p>How Does It Work</p>

          <div className="section">
            <h3>For Prospective Partners:</h3>
            <ol>
              <li>Review the features and benefits on this page.</li>
              <li>
                Email us with information regarding your interest in a strategic
                partnership. You can expect a follow-up within 48-72 business
                hours.
              </li>
              <li>
                Join our vibrant community at BusinessBoostSociety.com to take
                advantage of personalized insights, expert advice, exclusive
                events, collaboration opportunities, and other resources.
              </li>
            </ol>
          </div>

          <div className="section">
            <h3>For Students, Entrepreneurs, or Existing Business Owners Interested in a Cohort:</h3>
            <ol>
              <li>Review the features and benefits on this page.</li>
              <li>
                Browse our list of cohorts, select a cohort and apply! You can
                expect a decision according to the info included in the
                application details.
              </li>
              <li>
                Join BusinessBoostSociety.com for personalized insights, expert
                advice, exclusive events, and collaboration opportunities.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
