import React from "react";

const Mobile = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.name}</p>
      <h3>{props.price}</h3>
      <p>{props.children}</p>
    </div>
  );
};

export default Mobile;
