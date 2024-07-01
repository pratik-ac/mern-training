// use("kec-crud");

// ? evaluation operator
// ? regex, $expr

// * regex
// db.movies.find({ name: { $regex: "top model", $options: "i" } }); // ! $options: "i" => case-insensitive

// db.movies.find({ summary: { $regex: "dark comical", $options: "i" } });

// * expr
// db.employee.insertMany([
//     { name: "Utsarga", income: 800, expense: 600 },
//     { name: "Smriti", income: 900, expense: 1100 },
//     { name: "Samrat", income: 1100, expense: 700 },
//   ]);

// ? find employee whose expense is greater than their income
// db.employee.find({ $expr: { $gt: ["$expense", "$income"] } });

// ? find employee whose income is less than 850
// db.employee.find({ income: { $lt: 850 } });
