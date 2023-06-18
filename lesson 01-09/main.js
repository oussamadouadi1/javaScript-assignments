// Creating the Element
document.write("<h1>Elzero</h1>");

// Styling the Element
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";

// Assignment 02

console.log(
  "%cElzero %cWeb %cSchool",
  "color:red; font-size:40px;",
  "color:green; font-size:40px; font-weight:bold",
  "color:blue; font-size:40px;"
);

// Assignment 03

console.group("group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.group("group 2");
console.log("Message One");
console.log("Message Two");

// Assignment 04

console.table(["Elzero", "Ahmed", "Sameh", "Gamel", "Aya"]);

// Assignment 05

// console.log("Iam In Console");
// document.write("Iam In Page");

/*
console.log("Iam In Console");
document.write("Iam In Page");

*/
