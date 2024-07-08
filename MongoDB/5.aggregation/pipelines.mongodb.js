use("kec-crud");

// ? aggregation => powerful query tool
// ? uses pipeline stage
// TODO: $group

// * $match => alternative to find()
// db.movies.aggregate([
//   {
//     $match: {
//       name: "Glee",
//     },
//   },
// ]);

// * $project => alternative to select()
// db.movies.aggregate([
//   {
//     $match: {
//       genres: "Action",
//       "rating.average": { $gt: 9 },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       rating: 1,
//     },
//   },
// ]);

// ? find movies whose genres is "Crime" or network country is "United States"
// db.movies.aggregate([
//   {
//     $match: {
//       $or: [{ genres: "Crime" }, { "network.country.name": "United States" }],
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       networkCountry: "$network.country.name",
//     },
//   },
// ]);

// ? find movies whose genres includes both 'Drama' and 'Comedy'
// db.movies.aggregate([
//   {
//     $match: {
//       genres: {
//         $all: ["Drama", "Comedy"],
//       },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//     },
//   },
// ]);

// * $sort => arranges data in either ascending or descending order
// ? 1 => ascending sort
// ? -1 => descending sort

// db.movies.aggregate([ // ! ascending sort
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   {
//     $project: {
//       id: 1,
//       name: 1,
//     },
//   },
// ]);

// db.movies.aggregate([ // ! descending sort
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       id: -1,
//       name: 1, // ! compound sort => first sort by id in descending order then by name in ascending order
//     },
//   },
//   {
//     $project: {
//       id: 1,
//       name: 1,
//     },
//   },
// ]);

// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       name: 1,
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//     },
//   },
// ]);

// * $limit => number of documents to returned
// db.movies.insertOne({ id: 17, name: "Money Heist" });

// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   {
//     $limit: 5,
//   },
//   {
//     $project: {
//       _id: 0,
//       id: 1,
//       name: 1,
//     },
//   },
// ]);

// ? find 5 movies whose rating is greater than 8 and id is sorted in ascending order
// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": { $gt: 8 },
//     },
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   {
//     $limit: 5,
//   },
//   {
//     $project: {
//       id: 1,
//       name: 1,
//       rating: 1,
//     },
//   },
// ]);

// * $skip => skips the specified number of documents
// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   {
//     $skip: 5,
//   },
//   {
//     $limit: 2,
//   },
//   {
//     $project: {
//       _id: 0,
//       id: 1,
//       name: 1,
//     },
//   },
// ]);

// ! equivalent code

// let page = 2; // ! used for pagination
// let limit = 10;
// let skip = (page - 1) * limit;
// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   {
//     $skip: skip,
//   },
//   {
//     $limit: limit,
//   },
//   {
//     $project: {
//       _id: 0,
//       id: 1,
//       name: 1,
//     },
//   },
// ]);
