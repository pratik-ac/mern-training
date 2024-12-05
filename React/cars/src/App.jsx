import React from "react";
import Cars from "./Cars";

const carData = [
  {
    id: 1,
    img: "src/assets/tofor.png",
    name: "Toyota Fortuner",
    price: 43120,
  },
  {
    id: 2,
    img: "src/assets/rr.png",
    name: "Range Rover",
    price: 109525,
  },
  {
    id: 3,
    img: "src/assets/rolls.png",
    name: "Rolls Royce",
    price: 340500,
  },
  {
    id: 4,
    img: "src/assets/hellcat.png",
    name: "Hellcat Challenger",
    price: 71895,
  },
];

const App = () => {
  return (
    <>
      <div
        style={{
          margin: "2rem",
        }}
      >
        <h1>Premium categories</h1>
      </div>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          alignItems: "center",
          margin: "2rem",
          padding: "1rem",
        }}
      >
        {carData.map((item, index, array) => {
          return (
            <Cars
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </section>
    </>
  );
};

export default App;
