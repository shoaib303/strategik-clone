import React from 'react';
  
  const Portfolio = () => {
    return (
      <div className="portfolio-part">
        <div className="portfolio-container">
          <div className="heading">Portfolio</div>
          <p className="text">Check out some of our latest work</p>
          <div className="portfolio-content">
            <img
              src="https://www.strategik.co.uk/content/images/intercede-website-design.png"
              className="img-hi-res"
            ></img>
            <img
              src="https://www.strategik.co.uk/content/images/strategik-corporate-branding-sheffield-agency.svg"
              className="img-hi-res"
            ></img>
            <img
              src="https://www.strategik.co.uk/content/images/baslow-insurance-mobile-website.png"
              className="img-hi-res"
            ></img>
            <img
              src="https://www.strategik.co.uk/content/images/brown-executive-website-design-branding.svg"
              className="img-hi-res"
            ></img>
            <img
              src="https://www.strategik.co.uk/content/images/lep-website-design-sheffield-business.png"
              className="img-hi-res"
            ></img>
            <img
              src="	https://www.strategik.co.uk/content/images/poultry-talk-corporate-branding-website-design.svg"
              className="img-hi-res"
            ></img>
          </div>
        </div>
      </div>
    );
  };

  export default Portfolio;