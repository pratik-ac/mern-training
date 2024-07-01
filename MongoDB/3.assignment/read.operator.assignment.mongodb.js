use("kec-crud");

// db.movies.find();

// ?read operations

// ?find movies whose status is "Ended"
// db.movies.find({ status: { $eq: "Ended" } }, { name: 1, status: 1 });

// ?find movies whose rating is 9
// db.movies.find({ "rating.average": { $eq: 9 } }, { name: 1, rating: 1 });

// ?find movies whose rating is greater than 7 and less than 9
// db.movies.find(
//   {
//     $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $lt: 9 } }],
//   },
//   { name: 1, _id: 0, averageRating: "$rating.average" }
// );

// !equivalent code
// db.movies.find(
//   { "rating.average": { $lt: 9, $gt: 7 } },
//   { name: 1, rating: 1 }
// );

// ?find movies whose genres is Thriller
// db.movies.find({ genres: "Thriller" }, { name: 1, genres: 1 });

// ?find movies whose status is Running
// db.movies.find({ status: { $eq: "Running" } }, { name: 1, status: 1 });

//? find movies whose status is Ended and runtime is 60
// db.movies.find(
//   { $and: [{ status: "Ended" }, { runtime: 60 }] },
//   { name: 1, status: 1, runtime: 1 }
// );

// !equivalent code
// db.movies.find(
//   { status: "Ended", runtime: 60 },
//   { name: 1, status: 1, runtime: 1 }
// );

// ?find movies whose weight is 75 and network country is Canada
// db.movies.find(
//   {
//     $and: [{ weight: 75 }, { "network.country.name": "Canada" }],
//   },
//   { name: 1, weight: 1, network: 1 }
// );

// ?find movies whose weight is 96 or runtime is 60
// db.movies.find(
//   { $or: [{ weight: 96 }, { runtime: 60 }] },
//   { name: 1, weight: 1, runtime: 1 }
// );

// ?find movies whose rating average is not 9
// db.movies.find(
//   { "rating.average": { $ne: 9 } },
//   { name: 1, rating: 1, _id: 0 }
// );

// ?find movies whose rating average is either 6 or 6.5 or
// ?9 or 8 or 8.5 or 8.6 or 7.7 or 6.1 or 7.8
// db.movies.find(
//   {
//     $or: [
//       { "rating.average": 6 },
//       { "rating.average": 6.5 },
//       { "rating.average": 9 },
//       { "rating.average": 8 },
//       { "rating.average": 8.5 },
//       { "rating.average": 8.6 },
//       { "rating.average": 7.7 },
//       { "rating.average": 6.1 },
//       { "rating.average": 7.8 },
//     ],
//   },
//   { name: 1, rating: 1 }
// );

// !equivalent code
// db.movies.find(
//   { "rating.average": { $in: [6, 6.5, 9, 8, 8.5, 8.6, 7.7, 6.1, 7.8] } },
//   { name: 1, rating: 1 }
// );

// ?find movies whose status is neither "Ended" not genres is "Action"
// db.movies.find(
//   {
//     $nor: [{ status: { $eq: "Ended" } }, { genres: { $eq: "Action" } }],
//   },
//   { name: 1, status: 1, genres: 1 }
// );

// ?find movies whose genres includes 'Drama' , "Comedy" and "Action"
// db.movies.find(
//   { genres: { $all: ["Drama", "Comedy", "Action"] } },
//   { name: 1, genres: 1 }
// );

// ?find movies whose genre size is 3
// db.movies.find({ genres: { $size: 3 } }, { name: 1, genres: 1 });
