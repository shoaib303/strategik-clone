import React from "react";
import ServiceItem from "./ServiceItem";

const Service = () => {
  return (
    <div className="services-part">
      <div className="services-container">
        <div className="services-heading">Our Services</div>
        <div className="services-content">
          <tbody>
            <table>
              <tr className="row1">
                <ServiceItem
                  className="strategy"
                  image={
                    "https://www.strategik.co.uk/content/images/business-strategy-sheffield-icon.png"
                  }
                  serviceName={"Strategy Development"}
                  serviceDescription={
                    "Every business is different and we at Strategik understand this. We sit down with our clients to determine an onlinestrategy which will help them to meet their own business goals."
                  }
                />
                <ServiceItem
                  className="seo"
                  image={
                    "https://www.strategik.co.uk/content/images/performance-seo-sheffield-1x.png"
                  }
                  serviceName={"Performance SEO"}
                  serviceDescription={
                    "Website optimisation is a great way for your business to meet its online potential. We analyse your business goals and create a cost effective SEO strategy which will deliver them."
                  }
                />
                <ServiceItem
                  className="bespoke"
                  image={
                    "https://www.strategik.co.uk/content/images/bespoke-web-development-1x.png"
                  }
                  serviceName={"Bespoke Development"}
                  serviceDescription={
                    " Our team of experienced developers can help you to realiseyour digital ambitions. Whether, it is a bespoke web application or a content managed website our passionate team can help."
                  }
                />
              </tr>
              <tr className="row2">
                <ServiceItem
                  className="my-box award"
                  image={
                    "https://www.strategik.co.uk/content/images/award-winning-web-design-1x.png"
                  }
                  serviceName={"Award Winning Design"}
                  serviceDescription={
                    "If the visual appearance of your business is not quite up to par you will lose potential clients and that is the last  thing we want. We employ people who are highly skilled in all areas of design."
                  }
                />
                <ServiceItem
                  className="my-box user"
                  image={
                    "https://www.strategik.co.uk/content/images/user-experience-design-1x.png"
                  }
                  serviceName={"User Experience Design"}
                  serviceDescription={
                    "Strategik use the latest techniques to maintain that your customers have a great online experience. Just a few of our skills include wireframing, protoyping and user testing."
                  }
                />
                <ServiceItem
                  className="copy"
                  image={
                    "https://www.strategik.co.uk/content/images/professional-copywriting-service-1x.png"
                  }
                  serviceName={"Copywriting"}
                  serviceDescription={
                    " Every website we develop has at least one thing in common... Content. We often hear how tedious writing content for your own site can be. So why not let the experts here help?"
                  }
                />
              </tr>
            </table>
          </tbody>
        </div>
      </div>
    </div>
  );
};

export default Service;
