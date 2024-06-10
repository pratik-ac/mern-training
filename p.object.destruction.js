// ? object destruction

// ? -----------------------------example 1--------------------------------
// const bookDetails = {
//   name: "Operating System",
//   author: "A. Tanenbaum",
//   publication: "1990/01/01",
//   numberOfPages: 500,
//   coverPhoto: null,
//   price: undefined,
// };

// console.log(bookDetails.name);
// console.log(bookDetails.author);
// console.log(bookDetails.publication);
// console.log(bookDetails.numberOfPages);
// console.log(bookDetails.price);

// const { name, author, publication, numberOfPages, coverPhoto, price } = // ! object destruction
//   bookDetails;

// console.log(author);

// ? -----------------------------example 2--------------------------------

// const obj1 = {
//   name: "cat",
//   price: 100,
// };
// const obj2 = {
//   name: "dog",
//   price: 200,
// };

// const { price } = obj1;
// const { price: priceOfProduct2 } = obj2; // ! object destruction for same key name using rename
// console.log(priceOfProduct2);

// ? -----------------------------example 3--------------------------------

// const student = {
//   name: "Sandhya",
//   college: "HCOE",
//   isGraduated: false,
//   image: null,
//   address: {
//     permanent: "A",
//     temporary: "B",
//   },
// };

// const {
//   name,
//   college,
//   isGraduated,
//   image,
//   address: { permanent, temporary },
// } = student;

// console.log(permanent);
// console.log(temporary);
