import React from 'react';


const Image = () => {
    return (
      <div className="image-page">
        <img
          src="https://www.strategik.co.uk/content/images/about-digital-agency.png"
          className="image"
        ></img>
        <div className="content-page">
          <div className="image-heading">About Strategik</div>
          <div className="image-description">
            Strategik is a full service digital agency based in the heart of
            Sheffield. Strategik's mission is to provide cost effective digital
            design services which are focused around providing the best possible
            return for our clients investment.
          </div>
          <div className="image-icon">
            <img src="https://www.strategik.co.uk/content/images/banner-Icon.png"></img>
          </div>
        </div>
      </div>
    );
  };
  

  export default Image;