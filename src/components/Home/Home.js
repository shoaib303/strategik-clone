import React from "react";

const Home = () => {
  return (
    <div className="mainpage">
      <div className="main-page1">
        <div className="banner-container">
          <img
            src="https://www.strategik.co.uk/content/images/top-banner.png"
            className="banner"
          />
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              padding: 48,
            }}
          >
            <img
              src="https://www.strategik.co.uk/content/images/logo-light.png"
              alt="logo"
              className="logo-light"
            ></img>
            <div className="uppercase">
              BUSINESS <br />
              DIRECTION
            </div>
            <p className="para">
              Guiding your business to achieve online success
            </p>
            <img
              src="https://www.strategik.co.uk/content/images/banner-Icon.png"
              alt="icon"
              className="show-icon"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
