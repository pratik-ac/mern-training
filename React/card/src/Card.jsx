import React from "react";
import Button from "./Button";

const cardStyle = {
  boxShadow:
    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  margin: "5rem 0",
  width: "400px",
};

const imgStyle = {
  width: "100%",
  objectFit: "cover",
};

const txtStyle = {
  textAlign: "justify",
  fontSize: "1.5rem",
};

const Card = (props) => {
  return (
    <div style={cardStyle}>
      <img src={props.image} alt="" style={imgStyle} />
      <div style={{ padding: "1rem" }}>
        <h3 style={{ fontSize: "2rem" }}>{props.name}</h3>
        <p style={txtStyle}>{props.txt}</p>
        <div style={{ display: "flex", gap: "2rem" }}>{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
