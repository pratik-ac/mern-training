import React from "react";
import Card from "./Card";
import Button from "./Button";

const App = () => {
  return (
    <section
      style={{
        height: "100vh",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Card
          image="https://www.skyechooks.com/wp-content/uploads/2024/05/How-to-care-for-a-long-tailed-lizard.png"
          name="Lizard"
          txt="Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica."
        >
          <Button style={{ marginRight: "2rem" }} msg="SHARE" />
          <Button msg="LEARN MORE" />
        </Card>
      </div>
    </section>
  );
};

export default App;
