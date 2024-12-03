import Animal from "./Animal";
import Button from "./Button";
import Person from "./Person";

const App = () => {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
        alignItem: "center",
      }}
    >
      <Person
        image="https://i.insider.com/5d09448b1568f20d376ec1cb?width=800&format=jpeg&auto=webp"
        name="Spider-man"
      />
      <Person image="src/assets/superman1.webp" name="Super-man" />
      <Person
        image="https://images.indianexpress.com/2016/06/shaktiman-1200.jpg?w=389"
        name="Shaktiman"
      />
    </section>
  );
};

export default App;
