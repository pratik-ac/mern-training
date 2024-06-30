use("kec-crud");

// to insert data
// ? insertOne
// ? insertMany

// db.student.insertOne({
//   name: "Patrick",
//   address: "Godawari",
// });

// db.student.insertOne({
//   _id: 101,
//   name: "Sam",
//   address: "Kathmandu",
// });

// db.student.insertMany([
//   {
//     name: "Samundra",
//     address: "Hattiban",
//   },
//   {
//     name: "Santosh",
//     address: "Lalitpur",
//   },
// ]);

// ? read operation
// ? findOne
// ? find
// db.student.find({});

// db.student.find({ address: "Godawari" });

// db.student.findOne({ name: "Samundra" });

// db.student.findOne({ address: "Lalitpur" });

// db.student.find({ _id: 101 });

// db.student.find({ _id: ObjectId("667e96ea591abcaaaab9723d") });

// ? delete => remove data
// ? deleteOne
// ? deleteMany
// db.student.deleteOne({ address: "Lalitpur" });

// db.student.deleteMany({ address: "Hattiban" });

// db.student.find();

// ? update => to change field data(s)
// ? updateOne
// ? updateMany
// db.student.updateOne(
//   {
//     name: "Patrick",
//   },
//   {
//     $set: {
//       name: "Siddhant",
//     },
//   }
// );

// db.student.updateMany(
//   {
//     address: "Godawari",
//   },
//   {
//     $set: {
//       address: "Dhapakhel",
//     },
//   }
// );

// db.student.updateOne(
//   {
//     name: "Saugat",
//   },
//   {
//     $set: {
//       address: "Bhaktapur",
//     },
//   },
//   {
//     upsert: true,
//   }
// );

db.student.find();
