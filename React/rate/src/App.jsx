import React from "react";
import Laptop from "./Laptop";
import { Box } from "@mui/material";
import Rate from "./components/counter/Rate";
import Counter from "./components/counter/Counter";

const App = () => {
  return (
    <>
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
      </div>
      <Counter />
      <Rate />
    </>
  );
};

export default App;
