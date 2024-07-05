use("kec-crud");

// ? update on array

// ? $push => adds item to end of array
// ? add 92 on marks of Rajan
// db.scores.updateMany({ name: "Rajan" }, { $push: { marks: 92 } });

// ? add 87 and 93 to marks of Suyasha
// db.scores.updateMany({ name: "Suyasha" }, { $push: { marks:[ 87, 93 ]} });// ! this will add array inside array

// db.scores.updateMany(
//   { name: "Smarika" },
//   { $push: { marks: { $each: [87, 93] } } }
// ); // ! this will add elements to array

// ? $pop
// ? 1 => removes item from end of array (last item)
// ? -1 => removes item from start of array (first item)

// db.scores.updateMany({ name: "Suyasha" }, { $pop: { marks: 1 } });
// db.scores.updateMany({ name: "Suyasha" }, { $pop: { marks: -1 } });

// ? $pull => removes items based upon condition
// db.scores.updateMany(
//   { name: "Smarika" },
//   {
//     $pull: {
//       marks: { $lt: 70 },
//     },
//   }
// );

// db.scores.updateMany(
//   { name: "Smarika" },
//   { $pull: { points: { sub: "Science" } } }
// );

// ? change the sub : 'Science' of Suyasha to 'Maths'
// db.scores.updateMany(
//   { name: "Suyasha", "points.sub": "Science" },
//   { $set: { "points.$.sub": "Maths" } } // ! $ => positional/matching operator
// );

// ? pull item which has sub "Science" and marks less than 88 from Rajan's data
// db.scores.updateMany(
//   { name: "Rajan" },
//   { $pull: { points: { sub: "Science", marks: { $lt: 88 } } } }
// );

// ? $pullAll => we give concrete value which needs to be removed
// db.scores.updateOne(
//   { _id: ObjectId("66851fe9306670627cc342e7") },
//   {
//     $pullAll: {
//       marks: [42, 65],
//     },
//   }
// );

// ? push 78,67,89 to the marks array of Rajan
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $push: {
//       marks: {
//         $each: [78, 67, 89],
//       },
//     },
//   }
// );

// ? $addToSet
// ? adds item to array if it is not already present
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $addToSet: {
//       marks: { $each: [95, 88, 85] },
//     },
//   }
// );

// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $addToSet: {
//       points: {
//         sub: "Social",
//         points: 83,
//       },
//     },
//   }
// );

// ? push an object with sub:Science and point:92 on Suyasha points
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $push: {
//       points: {
//         sub: "Science",
//         point: 92,
//       },
//     },
//   }
// );

// ? push 57,88,96 on Suyasha's marks such  that no value is duplicated
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $addToSet: {
//       marks: {
//         $each: [57, 88, 96],
//       },
//     },
//   }
// );

// ? change Rajan's lucky color to "orange"
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $set: {
//       "luckyThings.color": "orange",
//     },
//   }
// );

// ? pull last item from Rajan's points
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $pop: {
//       points: 1,
//     },
//   }
// );

// ? decrease age of Smarika by 20
// db.scores.updateMany(
//   { name: "Smarika" },
//   {
//     $inc: {
//       age: -20,
//     },
//   }
// );

// ? push {sub:"C Program",point:72} and {sub:"C++",point:65} on Smarika's points
// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $push: {
//       points: {
//         $each: [
//           { sub: "C Program", point: 72 },
//           { sub: "C++", point: 65 },
//         ],
//       },
//     },
//   }
// );

// ? divide age of Rajan by 2
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $mul: {
//       age: 0.5,
//     },
//   }
// );

db.scores.find();
