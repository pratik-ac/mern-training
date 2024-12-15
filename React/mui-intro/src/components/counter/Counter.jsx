import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

// hooks => react function which has specific task
// example => useState, useEffect, useRef, useCallback, useMemo
// this-party hooks => redux => useSelector, useDispatch
// router => useNavigate

// ? event
// * onClick, onChange, onKeyPress, onSubmit, onScroll

const Counter = () => {
  //   let count = 1;
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
      <Typography variant="h3" gutterBottom>
        This is a counter app
      </Typography>
      <Typography variant="h4">Count:{count}</Typography>
      <Button
        variant="contained"
        color="success"
        // onClick={() => {
        //   let newCount = count + 1;
        //   setCount(newCount);
        // }}
        onClick={() => increaseCount()}
      >
        Increase Count
      </Button>

      <Button variant="contained" color="error" onClick={() => decreaseCount()}>
        Decrease Count
      </Button>

      <Button
        variant="contained"
        color="warning"
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </Button>
    </Box>
  );
};

export default Counter;
