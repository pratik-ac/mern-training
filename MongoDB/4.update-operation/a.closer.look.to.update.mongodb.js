use("kec-crud");

// db.scores.find();
// ! update operator always comes first where as read operator except $and $or $nor comes later
// ? $set
// db.scores.updateOne({ name: "Subham" }, { $set: { name: "Rajan" } });

// db.scores.updateMany({}, { $set: { age: 21 } });
// db.scores.find();

// ? $unset => removes the field
// db.scores.updateOne({ name: "Rajan" }, { $unset: { age: "" } });

// ? update age of Rajan to 30
// db.scores.updateOne({ name: "Rajan" }, { $set: { age: 30 } });

// ? update age of Suyasha to 40
// db.scores.updateOne({ name: "Suyasha" }, { $set: { age: 40 } });

// ? $inc => increases field value by provided value
// db.scores.updateMany({}, { $inc: { age: 5 } });

// db.scores.insertOne({
//   name: "Smarika",
//   scores: [42, 65, 88],
//   points: [
//     {
//       sub: "Social",
//       point: 67,
//     },
//     {
//       sub: "Science",
//       point: 89,
//     },
//   ],
//   age: 30,
// });

// db.scores.updateMany({ name: "Smarika" }, { $inc: { age: -10 } });

// TODO: research objectid
// ? $mul => multiply
// db.scores.updateOne(
//   { _id: ObjectId("668299ed8d318836e38bec9d") },
//   { $mul: { age: 2 } }
// );

// ? decrease(divide) age of Suyasha by 2
// db.scores.updateOne({ name: "Suyasha" }, { $mul: { age: 0.5 } });

// ? $rename => rename field
// db.scores.updateMany({}, { $rename: { scores: "marks" } });

// ? $min, $max => update field with min or max value
// * $min => if field value is more than specified value, it sets min value to that field
// * $max => if field value is less than specified value, it sets max value to that field
// db.scores.updateMany({}, { $min: { age: 16 } });
// db.scores.updateMany({}, { $max: { age: 50 } });

// db.scores.updateMany(
//   {},
//   { $set: { luckyThings: { number: 7, color: "green" } } }
// );

// ? update lucky color of Suyasha to "Blue"
// db.scores.updateOne(
//   { name: "Suyasha" },
//   { $set: { "luckyThings.color": "Blue" } }
// );

// ? update lucky number of Smarika to 8
// db.scores.updateMany(
//   { name: "Smarika" },
//   { $set: { "luckyThings.number": 8 } }
// );

// ? increase lucky number of Rajan by 3
// db.scores.updateOne({ name: "Rajan" }, { $inc: { "luckyThings.number": 3 } });

db.scores.find();
