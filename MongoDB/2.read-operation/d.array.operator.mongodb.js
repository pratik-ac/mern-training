// use("kec-crud");

// * array operator
// ? $all
// ? $elemMatch
// ? $size

// * $all
// ? find movies whose genre includes both "Drama" and "Comedy"
// same field ma "$and" use bhairako xa ra tyo field array ho bane we can use "$all" operator

// db.movies.find({ genres: { $all: ["Drama", "Comedy"] } });

// * $size
// ? we cannot provide range to size
// ? must provide concrete value

// ? find movies whose genres size is 3
// db.movies.find({ genres: { $size: 3 } });

// * $elemMatch
// db.scores.insertMany([
//   {
//     name: "Subham",
//     scores: [82, 85, 88],
//     points: [
//       {
//         sub: "Social",
//         point: 82,
//       },
//       {
//         sub: "Science",
//         point: 65,
//       },
//     ],
//   },
//   {
//     name: "Suyasha",
//     scores: [75, 88, 89],
//     points: [
//       {
//         sub: "Social",
//         point: 75,
//       },
//       {
//         sub: "Science",
//         point: 84,
//       },
//     ],
//   },

//   {
//     name: "Smarika",
//     scores: [42, 65, 88],
//     points: [
//       {
//         sub: "Social",
//         point: 67,
//       },
//       {
//         sub: "Science",
//         point: 89,
//       },
//     ],
//   },
// ]);

// db.scores.find({ "points.sub": "Social", "points.point": { $gt: 80 } }); // ! this will return all the documents where points.sub is "Social" and points.point is greater than 80 but it is not the correct way to query

// db.scores.find({
//   points: { $elemMatch: { sub: "Social", point: { $gt: 80 } } },
// }); // ! this will return all the documents where points.sub is "Social" and points.point is greater than 80

// ? find students whose scores is greater than 80 and less than 85
// db.scores.find({ scores: { $elemMatch: { $gt: 80, $lt: 85 } } });
