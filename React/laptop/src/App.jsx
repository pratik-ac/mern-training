import React from "react";
import Laptop from "./Laptop";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <Laptop image="src/assets/hpOmen.png" name="HP Omen" />

      <Laptop
        image="https://i.pcmag.com/imagery/articles/059u7uHTgC4IN4TpkKxzVm2-11..v1592841202.png"
        name="Acer Predator"
      />

      <Laptop image="src/assets/asusTuf.png" name="Asus TUF" />
    </div>
  );
};

export default App;
