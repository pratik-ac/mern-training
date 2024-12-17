import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Student = () => {
  const [Student, setStudent] = useState({
    name: "Shubham",
    age: 19,
    gender: "Male",
  });
  return (
    <Box>
      <Typography variant="h3">Name: {Student.name}</Typography>
      <Typography variant="h3">Age: {Student.age}</Typography>
      <Typography variant="h3" gutterBottom>
        Age: {Student.gender}
      </Typography>

      <TextField
        label="Name"
        color="primary"
        onChange={(e) => {
          const name = e.target.value;
          setStudent({ ...Student, name: name });
        }}
      />

      <TextField
        label="Age"
        type="number"
        color="secondary"
        onChange={(e) => {
          const age = e.target.value;
          setStudent({ ...Student, age: age });
        }}
      />
      <TextField
        label="Gender"
        color="primary"
        onChange={(e) => {
          const gender = e.target.value;
          setStudent({ ...Student, gender: gender });
        }}
      />
    </Box>
  );
};

export default Student;
