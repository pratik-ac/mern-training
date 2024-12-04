import React from "react";

const Score = (props) => {
  return (
    <div
      style={{
        border: props.runs >= 100 ? "5px solid yellow" : "1px solid red",
        borderRadius: "10px",
        width: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem",
      }}
    >
      <h3>{props.name}</h3>
      <h4>Runs: {props.runs}</h4>
      {props.runs >= 100 && <h4 style={{ color: "red" }}>Star Player</h4>}
    </div>
  );
};

export default Score;
