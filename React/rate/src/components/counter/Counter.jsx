import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    let newCount = count + 1;
    setCount(newCount);
  };

  const decreaseCount = () => {
    let newCount = count - 1;
    setCount(newCount);
  };

  return (
    <Box>
      <Typography variant="subtitle1">
        Quantity : {count}
        <Button
          style={{ marginLeft: 100 }}
          size="small"
          variant="outlined"
          color="success"
          onClick={() => increaseCount()}
        >
          +
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="error"
          onClick={() => decreaseCount()}
        >
          -
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="warning"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </Button>
      </Typography>
    </Box>
  );
};

export default Counter;
