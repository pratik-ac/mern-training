import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { getFullReview } from "../../utils/utils";

const Rate = () => {
  const [review, setReview] = useState("5");
  const [detail, setDetail] = useState("This is value for money product");

  return (
    <Box>
      <Typography variant="h6" color="primary">
        Rating: {getFullReview(review, "")} / 5
      </Typography>
      <Typography variant="subtitle2">{getFullReview("", detail)}</Typography>

      <Button
        variant="contained"
        color="success"
        onClick={() => {
          setReview("1");
          setDetail("This is the worst product");
        }}
      >
        Change
      </Button>
    </Box>
  );
};

export default Rate;
