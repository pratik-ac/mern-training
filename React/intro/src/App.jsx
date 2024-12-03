import Person from "./Person";
import Player from "./Player";

const App = () => {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
        alignItem: "center",
        marginTop: "2rem",
      }}
    >
      <Player
        image="https://pbs.twimg.com/profile_images/1660478058699329537/KsVez3gh_400x400.jpg"
        name="Kushal Bhurtel"
      />
      <Player
        image="https://wicketnepal.com/wp-content/uploads/2024/02/dipendra-airee-pro.jpg"
        name="Dipendra Singh Airee"
      />
      <Player
        image="https://www.cricnepal.com/wp-content/uploads/2023/04/Sandeep-Lamichhane-after-compleing-a-fifer-against-Qatar-in-ACC-Premier-Cup-2023.jpg"
        name="Sandeep Lamichhane"
      />
    </section>
  );
};

export default App;
