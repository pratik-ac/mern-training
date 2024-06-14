// ? array copy

// const nation = ["Nepal", "China", "India", "USA"];

// ? shallow copy
// const newNationList = nation;
// newNationList[0] = "Argentina";

// console.log(nation);

// ? spread operator (...)
// const newNationList = [...nation];
// newNationList[0] = "Chile";

// console.log(nation);
// console.log(newNationList);

// const userList = [{ name: "A" }, { name: "B" }];
// const newUserList = [...userList];
// newUserList[0].name = "Z";

// console.log(userList); // ! changes userList value also not preferred

// ? deep copy
// const userList = [{ name: "A" }, { name: "B" }];
// const newUserList = structuredClone(userList);
// newUserList[0].name = "Z";

// console.log(newUserList); // ! this does not change main userList value
