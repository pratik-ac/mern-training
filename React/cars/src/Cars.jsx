import React from "react";

const Cars = (props) => {
  return (
    <div
      style={{
        border: props.price >= 300000 ? "1px solid yellow" : "1px solid white",
        borderRadius: "10px",
        width: 300,
        display: "flex",
        flexDirection: "column",
        margin: "1rem",
        overflow: "hidden",
      }}
    >
      <img
        style={{
          width: "100%",
          height: 180,
        }}
        src={props.img}
        alt=""
      />
      <h4
        style={{
          margin: "0.5rem 2 0.2rem 2",
          marginLeft: "1rem",
        }}
      >
        {props.name}
        <p>
          $ {props.price}
          {props.price >= 300000 && (
            <span style={{ color: "red", marginLeft: "9rem" }}> Luxury</span>
          )}
        </p>
      </h4>
      <button
        style={{
          marginBottom: "1rem",
          marginLeft: "1rem",
          width: "8rem",
        }}
      >
        Shop now
      </button>
    </div>
  );
};

export default Cars;
