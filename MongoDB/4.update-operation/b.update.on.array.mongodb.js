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

db.scores.find();
