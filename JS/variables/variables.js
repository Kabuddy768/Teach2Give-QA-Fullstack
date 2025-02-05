// Question 1

// 1. Declare a variable age using let and assign it the value 25.
let age = 25;
// 2. Declare a variable schoolName using const and assign it "Greenwood High".
const schoolName = "Greenwood High";
// 3. Declare an empty array called studentsList.
let studentsList = [];
// 4. What is the difference between let, const, and var when declaring variables?
//let is block scoped, const is block scoped but cannot be reassigned, var is function scoped.

// 2. Naming Conventions
// Which of the following variable names is invalid?
// let $price = 100;
// let 1stPlace = "John";
// let _score = 89;
// let userName = "Alice";
// Answer: let 1stPlace = "John";

// Why is the following variable name incorrect?
// const #taxRate = 0.16;
// Answer: Variable names cannot start with a special character except for $ and _.

// Rewrite this variable name to follow best practices:
// let MyvariableNAME = "JavaScript";
let myVariableName = "JavaScript";

// 3. Identifying Data Types
// What will be the output of the following?
console.log(typeof "Hello");
//String
console.log(typeof 99);
//Number
console.log(typeof true);
//Boolean
console.log(typeof undefined);
//Undefined

// Identify the data types in this array:
let data = ["Kenya", 34, false, { country: "USA" }, null];
//String, Number, Boolean, Object, Null

// 9. How do you define a BigInt in JavaScript? Provide an example
// BigInt is a new primitive in JavaScript that can store large integers. It is created by appending n to the end of an integer or by calling the BigInt() function.
 let bigNumber = 1234567890123456789012345678n;

// 4. Objects & Arrays
// 11. Create an object person with properties name, age, and city.
let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
// 12. Add a new property email to the person object.
person.email = "alicem76@gmail.com"
// 13. Declare an array fruits with three fruit names.
let fruits = ["apple", "banana", "orange"];
// 14. Access the second item in the fruits array
console.log(fruits[1]);

// 5. Type Coercion
// 15. What will be the output of the following?
console.log("5" + 2);
//52
console.log("5" - 2);
//3
// 16. Convert the string "100" into a number.
let number = parseInt("100");
// 17. Convert the number 50 into a string.
let num= 50;
let string = num.toString();
// 18. What will be the result of this operation?
console.log(5 + true);
//6
