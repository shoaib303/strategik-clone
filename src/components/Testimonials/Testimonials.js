import React from "react";
import Review from "./Review";

const Testimonials = () => {
  return (
    <div className="testimonials-part">
      <div className="testimonials-container">
        <div className="testimonials-heading">Testimonials</div>
        <div className="testimonials-text">
          See what our existing clients have to say about us{" "}
        </div>
        <div className="testimonials-content">
          <Review
            description={
              '"Great web developers can be pretty difficult to find at times. Luckily I came across Strategik, they developed my website exactly to my very specific specifications. I couldn\'t have asked for more from a devlopment company and I highly recommend them."'
            }
            name={"Lance Worthington"}
            company={"Neo Photography"}
            imageUrl={
              "https://www.strategik.co.uk/content/images/reviewer-1.png"
            }
          />
          <Review
            description={
              '"Great web developers can be pretty difficult to find at times. Luckily I came across Strategik, they developed my website exactly to my very specific specifications. I couldn\'t have asked for more from a devlopment company and I highly recommend them."'
            }
            name={"Guy Rosewarne"}
            company={"Baslow Insurance"}
            imageUrl={
              "https://www.strategik.co.uk/content/images/reviewer-2.png"
            }
          />
          <Review
            description={
              '"Great web developers can be pretty difficult to find at times. Luckily I came across Strategik, they developed my website exactly to my very specific specifications. I couldn\'t have asked for more from a devlopment company and I highly recommend them."'
            }
            name={"Sophie Singleton"}
            company={"Dronfield Heritage Trust"}
            imageUrl={
              "https://www.strategik.co.uk/content/images/reviewer-3.png"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
