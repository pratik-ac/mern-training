import express from "express";

const app = express();

// ? to make app understand json
app.use(express.json());

let studentList = [
  {
    id: 1,
    name: "Nishant",
  },
  {
    id: 2,
    name: "Ramu",
  },
];

// ? apis

// add student
app.post("/student/add", (req, res) => {
  //   console.log(req.body);
  const newStudent = req.body;
  studentList.push(newStudent);
  return res.status(200).send({ message: "Adding student..." });
});

// ? get student list
app.get("/student/list", (req, res) => {
  return res.status(200).send(studentList);
});

// ? network PORT
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
