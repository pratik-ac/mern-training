const animalStyle = {
  //   objectFit: "cover",
  height: "400px",
  width: "400px",
};

const Animal = () => {
  return (
    <img
      src="data:image/jpeg;base64,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"
      alt="Gorilla"
      style={animalStyle}
    />
  );
};

export default Animal;
