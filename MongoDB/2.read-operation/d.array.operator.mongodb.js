use("kec-crud");

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
