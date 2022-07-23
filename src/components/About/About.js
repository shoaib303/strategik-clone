import React from "react";

const Item = (props) => {
  return <div className="items">{props.name}</div>;
};

const About = () => {
  return (
    <div className="container">
      <div className="container-box">
        <img
          src="https://www.strategik.co.uk/content/images/logo-dark.png"
          className="logo1"
        ></img>
        <div className="description">
          {["ABOUT", "SERVICES", "PORTFOLIO", "TESTTIMONIALS"].map((item) => (
            <Item name={item} key={item} />
          ))}
          <button className="click">CONTACT</button>
        </div>
      </div>
    </div>
  );
};
export default About;
