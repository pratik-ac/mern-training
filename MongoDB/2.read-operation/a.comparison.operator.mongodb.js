use("kec-crud");

// ? comparison operator
// ? $eq , $ne, $gt, $gte, $lt, $lte, $in, $nin

// * $eq
// ? find movie whose name is "Glee"
// ? name === "Glee"
// db.movies.find({ name: { $eq: "Glee" } }, { name: 1, genres: 1 }); // ! name: 1 => only name field will be displayed
// !equivalent code
// db.movies.find({ name: "Glee" });

// * $gt
// ? find movie whose runtime is greater than 70
// db.movies.find({ runtime: { $gt: 70 } }, { name: 1, runtime: 1, _id: 0 });

// * $gte
// ? find movies whose rating is greater than 9
// db.movies.find();
// db.movies.find(
//   { "rating.average": { $gte: 9 } },
//   { name: 1, averageRating: "$rating.average" } // ! averageRating: "$rating.average" => create new field averageRating and assign value of rating.average
// );

// * $ne
// ? find movies whose id is not 1
// db.movies.find({ id: { $ne: 1 } });
// ! or
// db.movies.find({ id: { $not: { $eq: 1 } } });
