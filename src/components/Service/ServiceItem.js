import React from "react";


export default function ServiceItem(props) {
  return (
    <td className={props.className}>
      <img
        src={props.image}
        className="hi-res"
      ></img>
      <div className="service-name">{props.serviceName}</div>
      <p className="service-description">
        {props.serviceDescription}
      </p>
    </td>
  );
}
