use("kec-crud");
// ? $lookup => to query between collections

// db.person.insertMany([
//   {
//     firstName: "Rohan",
//     lastName: "Bhandari",
//     address: "Sydney",
//   },
//   {
//     firstName: "Rohil",
//     lastName: "Khadka",
//     address: "Udayapur",
//   },
//   {
//     firstName: "Enish",
//     lastName: "Shrestha",
//     address: "Kathmandu",
//   },
// ]);

// db.vehicle.insertMany([
//   {
//     model: "X",
//     brand: "Tesla",
//     builtYear: 2021,
//     ownerId: ObjectId("668bb3114db094eb9971982b"),
//   },
//   {
//     model: "Mustang",
//     brand: "Ford",
//     builtYear: 2023,
//     ownerId: ObjectId("668bb3114db094eb9971982c"),
//   },
//   {
//     model: "Creta",
//     brand: "Hyundai",
//     builtYear: 2024,
//     ownerId: ObjectId("668bb3114db094eb9971982d"),
//   },
// ]);

// db.vehicle.aggregate([
//   {
//     $match: {
//       model: "Mustang",
//     },
//   },
//   {
//     $lookup: {
//       from: "person", // ! look in compass for the collection name
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "ownerDetails",
//     },
//   },
//   {
//     $project: {
//       model: 1,
//       brand: 1,
//       ownerFirstName: { $first: "$ownerDetails.firstName" },// !pro
//       ownerLastName: { $first: "$ownerDetails.lastName" },
//     },
//   },
//   {
//     $project: {
//       model: 1,
//       brand: 1,
//       ownerFullName: { $concat: ["$ownerFirstName", " ", "$ownerLastName"] },
//     },
//   },
// ]);

// db.person.aggregate([
//   {
//     $match: {
//       firstName: "Enish",
//     },
//   },
//   {
//     $lookup: {
//       from: "vehicle",
//       localField: "_id",
//       foreignField: "ownerId",
//       as: "vehicleDetails",
//     },
//   },
//   {
//     $project: {
//       firstName: 1,
//       carModel: { $arrayElemAt: ["$vehicleDetails.model", 0] }, // ! noob
//       carBrand: { $arrayElemAt: ["$vehicleDetails.brand", 0] },
//     },
//   },
// ]);

// ! equivalent to the above query
// db.person.aggregate([
//   {
//     $match: {
//       firstName: "Enish",
//     },
//   },
//   {
//     $lookup: {
//       from: "vehicle",
//       localField: "_id",
//       foreignField: "ownerId",
//       as: "vehicleDetails",
//     },
//   },
//   {
//     $project: {
//       firstName: 1,
//       carDetails: {
//         model: { $arrayElemAt: ["$vehicleDetails.model", 0] },
//         brand: { $arrayElemAt: ["$vehicleDetails.brand", 0] },
//       },
//     },
//   },
// ]);

// db.vehicle.insertOne({
//   model: "Y",
//   brand: "Tesla",
//   builtYear: 2020,
//   ownerId: ObjectId("668bb3114db094eb9971982d"),
// });

// db.person.aggregate([
//   {
//     $match: {
//       firstName: "Enish",
//     },
//   },
//   {
//     $lookup: {
//       localField: "_id",
//       from: "vehicle",
//       foreignField: "ownerId",
//       as: "vehicleDetails",
//     },
//   },
//   {
//     $project: {
//       firstName: 1,
//       lastName: 1,
//       models: "$vehicleDetails.model",
//       "vehicleDetails.model": 1,
//       "vehicleDetails.brand": 1,
//       lastCarBrand: { $last: "$vehicleDetails.brand" },
//     },
//   },
// ]);

// ? find owner of Ford Mustang car
// db.vehicle.find();

// db.vehicle.aggregate([
//   {
//     $match: {
//       model: "Mustang",
//     },
//   },
//   {
//     $lookup: {
//       from: "person",
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "ownerDetails",
//     },
//   },
//   {
//     $project: {
//       model: 1,
//       brand: 1,
//       ownerFirstName: { $first: "$ownerDetails.firstName" },
//       ownerLastName: { $first: "$ownerDetails.lastName" },
//     },
//   },
// ]);
