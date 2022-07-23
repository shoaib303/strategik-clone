import React from "react";

// {
//     description: "ksjdfkjskjfd",
//     name: "jksdfk",
//     company: "jskdfks",
//     imageUrl: "http"
// }

export default function Review(props) {
  return (
    <div className="review1">
      <div className="review-content">
        <p className="review-text">{props.description}</p>
        <p className="review-name">{props.name}</p>
        <p className="review-company">{props.company}</p>
      </div>
      <div className="review1-pic">
        <img src={props.imageUrl}></img>
      </div>
    </div>
  );
}