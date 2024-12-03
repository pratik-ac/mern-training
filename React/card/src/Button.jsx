import React from "react";

const Button = (props) => {
  return (
    <div>
      <button style={{ fontSize: "14px" }}>{props.msg}</button>
    </div>
  );
};

export default Button;
