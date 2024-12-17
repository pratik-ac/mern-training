import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Animal = () => {
  let [text1, setText1] = useState("random text");
  let [text2, setText2] = useState("random text");
  let [text3, setText3] = useState("random text");

  return (
    <Box>
      <Typography variant="h3">{text1}</Typography>
      <TextField
        label="Type something..."
        color="success"
        onChange={(e) => {
          console.log(e);
          setText1(e.target.value);
        }}
      />
      <Box>
        <Typography variant="h3">{text2}</Typography>
        <TextField
          label="Type something..."
          color="primary"
          onChange={(a) => {
            console.log(a);
            setText2(a.target.value);
          }}
        />
      </Box>

      <Box>
        <Typography variant="h3">{text3}</Typography>
        <TextField
          label="Type something..."
          color="primary"
          onChange={(a) => {
            console.log(a);
            setText3(a.target.value);
          }}
        />
      </Box>
    </Box>
  );
};

export default Animal;
