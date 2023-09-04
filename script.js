// single linke comment

/*
multi
line 
comment 
*/
// console.log("lkjhgf");

// alert("hellow there, how u doin?");

// ====== variables
// var, let, const
// var firstName; // creating variable
// var firstName = "Bijay "; // assining value
// let lastName = "Timalsina";
// const dob = "20-02-2020";

// console.log(firstName, lastName, dob);

// firstName = "sam";
// lastName = "smith";
// dob = "30-03-3030";
// console.log(firstName, lastName, dob);

// ======= js Arithmetic- operators

// +	Addition
// console.log(5 + 5);

// let a = 5;
// const b = 3;
// const result = a + b;
// -	Subtraction
// const result = a - b;
// *	Multiplication
// const result = a * b;
// **	Exponentiation (ES2016)
// const result = a ** b;
// /	Division

// const result = a / b;
// %	Modulus (Division Remainder)
// const result = a % b;
// ++	Increment

// console.log(a++);
// console.log(++a);
// a++;
// a++;

// --	Decrement
// console.log(a--);
// a--;
// a--;

// console.log(a);

// ===== Comparisons
// ==
// ===
// >, >=
// <, <=

// const v1 = 5;
// const v2 = 5;

// const result = v1 === v2;
// const result = v1 >= v2;
// const result = v1 <= v2;

// console.log(result);

// ===== JS- Data Types
// Primitives
// String  		// “prem acharya”
// const name = `premachary`;

// Number 	//123

// safe number - 2^53-1 to 2^53-1
// const num = 556_988_990_897_383;

// Boolen		// true or false
// const val = false;

// Undefined	// not defined in system memory
// const val = undefined;
// Null  		// defined in system memory but no value assigned
// const val = null;
// console.log(typeof val, val);
// console.log(typeof dob);
// if (typeof dob != undefined) {

// }

// let a = 5;
// console.log(a);
// const b = a;
// a = 10;
// console.log(a, b);

// Reference Types
// Object 		//{key:”value”}

// const a = {
//   firstName: "prem",
//   lName: "acharay",
// };
// console.log(a);
// const b = a;
// a.lName = "smith";

// console.log(a, b);

// Array		//[“data”, 1232, {}, []]
// const arg = ["sdfjl", 987, {}, [], true, null, undefined];

// Function 	// function()
// Es6 	// const sayHi ()=> “hi”

// console.log(person.firstName);
// person.firstName = "sam";
// console.log(person["firstName"]);

// ===== Math Object
// Math.PI;
// const ans = Math.PI;

// const ans = Math.round(4.9);
// const ans = Math.ceil(4.4);
// const ans = Math.floor(4.7);

// const ans = Math.pow(8, 2);
// const ans = Math.sqrt(64);

// const ans = Math.min(0, 150, 30, 20, -8, -200);
// const ans = Math.max(0, 150, 30, 20, -8, -200);
// const ans = Math.random() * 10; // 0 - 0.9999...

// console.log(ans);

//// conditional statements
//// Logical Operators
// &&
// ||
// !
// Ternary

// If

//truthy: true, "anything", 3456, {}, [], ()=>{}
// falsey: false, "", 0, null, undefined, NaN

// let age = 17;
// if (age >= 18) {
//   // code
//   console.log("welcome to party");
// }

// If else
// if (age >= 18) {
//   // code
//   console.log("welcome to party");
// } else {
//   console.log("go home kido");
// }
// let age = 18;
// const val = "vets";

// age >= 18 ? console.log("welcome to party") : console.log("go home kido");

// if (val !== "vet" && age > 17) {
//   // if (val === "vet" || age > 17) {
//   console.log("you are welcome");
// } else {
//   console.log("not welcome");
// }

// console.log(!!!age, typeof !age);

// Else if
// const pet = "cow";

// if (pet === "cat") {
//   console.log("meoww");
// } else if (pet === "dog") {
//   console.log("wooff");
// } else {
//   console.log("flksa vlgahsl;fha;lshfoasdhfl;ashj.");
// }

// Switch
// const pet = "cow";

// switch (pet) {
//   case "cat":
//     console.log("meoww");
//     break;

//   case "cow":
//     console.log("mooooo");
//     //
//     break;

//   default:
//     console.log("flksa vlgahsl;fha;lshfoasdhfl;ashj.");
// }

//// Error handeling

// try {
//   //code

//   console.log(first);

//   // code
// } catch (error) {
//   //what you want to do when there is an error
//   console.log(error.message);
//   //
// } finally {
//   //this code will always runs
//   console.log("this code was executed at " + Date.now());
// }

// try {
//   //code

//   console.log("first");
//   throw new Error("hacked");
//   // code
// } catch (error) {
//   //what you want to do when there is an error
//   console.log(error.message);
//   //
//   if (error.message === "hacked") {
//     console.log("email all team member");
//   }
// }

////Scheduling

// setTimeout;

// setTimeout(() => {
//   console.log("i am from settimeout");
// }, 3000); //3s

//  => clearTimeout

// setInterval

// let i = 0;
// const counter = setInterval(() => {
//   console.log("it is " + i++);

//   if (i === 10) {
//     clearInterval(counter);
//     console.log("it stoped");
//   }
// }, 1000); //1s
//  => clearInterval

//setInterval(function, time in millisecond)

//// JS- ES6

// Template literals
// const a = 5;
// const b = 16;

// console.log(a + b);

// const str = "whe we add " + a + " and " + b + " the total would be " + (a + b);

// const str = `
//  when we add ${a} and ${b} the total would be
//  ${a + b}
// `;

// console.log(str);
// Arrow function
// function add(a, b) {
//   console.log("from add fuction", a, b);
// }
// function add(a, b) {
//   const total = a + b;
//   return total;
// }

// const add = (a, b) => {
//   const total = a + b;
//   return total;
// };
// const add = (a, b) => {
//   return a + b;
// };
// const add = (a, b) => a + b;

// const ans = add(4235, 674);
// const ans2 = add(44, 533);
// const ans3 = add(34, 5);
// console.log(ans, ans2, ans3);
// Destructuring
// Default + Rest + Spread

//// LOOPS
// for(i = 0; i < cars.length; i++)

// for(initial, condition, inc/dec){
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// while (condition)
// let i = 10;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// do/while |
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// Break, break out the loop or switch
// Break out of loop
// let i = 0;
// while (i < 10) {
//   console.log(i);

//   if (i === 5) {
//     break;
//   }
//   i++;
// }

// Continue, in loop to exit 1 loop

// let i = 0;
// while (i < 10) {
//   i++;
//   if (i % 2 === 0) {
//     console.log(i);
//     // continue;
//   }
//   ///
//   console.log("extra 50 lines of code");
// }

////js- Data manipulation
/// Number
// Safe number -2^53-1 to 2^53-1

//downcasting
// const num = "045678789";
// const val = +num;
// const val = Number(num);

// const num = "4567.8789ss";
// const val = parseInt(num);
// const val = parseFloat(num);

// console.log(val, isNaN(val));

////String
// Escape character
// Length
// indexOf, lastIndexOf, search
// Slice, substring, substr
// Replace, contact, trim
// toUpperCase, toLowerCase
// charAt, [], split

// const str = ' hi i\'m "prem\\Acharay"';
// const str = `' hi i\'m "prem\\Acharay"'`;
// const str = ` Hi there My name is Bijay Timalsina, and I live in sydney!" `;

// // const val = str.length;
// const val = str.toLowerCase();
// const val = str.toUpperCase();

// const val = str[15];
// const val = str.indexOf("e");
// const val = str.lastIndexOf("My");

// const val = str.replace("i", "Y");
// const val = str.replaceAll("i", "Y");

// both are counter from zero position
// const val = str.substring(3, 6);
// const val = str.substring(3);

// const val = str.slice(3, 6);
// const val = str.slice(-1);

// const val = str.includes("prem");
// const val = str.search("Prem");
// const val = str.charAt(4);
// const val = str.charCodeAt(4);
// const val = str.split(",");
// const val = str.trim();

// console.log(str.length);
// console.log(val.length);

//// 3. Array[]

// Length, push , pop, shift, unshift, toString, join,[], splice, slice, indexOf
// Short, reverse
// forEach, map
// Filter, reduce, every, find

// const vals = ["prem", 654, true, null, undefined, NaN, [234, 456], {}];

// const fruits = ["banana", "apple", "orange", "mango"];

// console.log(fruits[2]);
// console.log(fruits.length);

// fruits.push("mango");
// fruits.unshift("mango");

// const dt = fruits.pop();
// const dt = fruits.slice(1, 3);
// const dt = fruits.splice(1, 2);
// const dt = fruits.splice(1, 0, "potato");

// console.log(dt);

// console.log(fruits.sort());
// console.log(fruits.reverse());

// const numbs = [23, 45, 45, 12, 89, 3, 7];
// console.log(numbs.sort((a, b) => a - b));

// const fruits = ["banana", "apple", "orange", "mango"];

// console.log(fruits.toString());
// const dt = fruits.join("|");
// console.log(dt);

// console.log(fruits);

// array loops
// fruits.forEach((itm) => {
//   console.log(itm + " is yummyt");
// });

// const newArg = fruits.map((item, index) => {
//   console.log(item, index);
//   return "SKU-" + item.toUpperCase();
// });

// const newArg = fruits.filter((f) => {
//   return !f.includes("e");
// });

// const result = fruits.every((item) => item.includes("a"));
// console.log(result);

// const money = [3456, 3456, 234567, 23456, 4356];

// const total = money.reduce((acc, item) => {
//   return acc + item;
// }, 10);

// console.log(total);
// const arg = Array(100).fill("❤️");
// console.log(arg);

// Challange #1
// 1. create an array of 50 random number  range between 1 and 100 programmatically
//2.sort the array in descending orer
//3. get total of the array
//4.Divide original array in to 2 new arrays that contains eve or odd numbers only each.
// 5. remove duplicate number for the original array

//Good LUCK

// Fun challange
// const yoyo = () => console.log(5 + 6);
// console.log("1. log");
// setTimeout(() => {
//   console.log("2. inside frist set timeout");
// }, 500);
// console.log("3. after first setTime out");
// const sayHey = () => {
//   console.log("4. inside sayhey");
//   yoyo();
// };
// setTimeout(() => {
//   console.log("5. inside second set timeout");
// }, 0);
// sayHey();
// console.log("6. last clg");

// //Object

// const person = {
//   name: "Bijay Timalsina",
//   number: 34567,
//   add: "somewhere in strathfield",
//   lazy: false,
//   skills: ["js", "react", "node"],
//   parent: {
//     f: "Harry",
//     m: "Merry",
//   },
// };

// // console.log(person.name);
// const num= person["number"];
// person.number = "00000000"
// const num = person.number;
// console.log(person.parent.f);
// console.log(person.skills[1]);
// person.gender = "NA";

// Destructuring

// console.log(person);
// for (let key in person) {
//   console.log(person[key]);
// }

// console.log(person);
// const { name, add, ss } = person;

// console.log(name, add, ss);

// Default + Rest + Spread

// const bio = ({ name, add = "na" }) => {
//   const str = `hi there my name is ${name}
//   and i live in ${add}`;

//   return str;
// };

// const sam = {
//   name: "sam",
// };
// const sd = bio(sam);
// console.log(sd);

// const bijay = {
//   name: "bijay",
//   add: "sydney",
// };
// const data = bio(bijay);
// console.log(data);

// Default + Rest + Spread

// const p = {
//   name: "sam",
//   add: "sydney",
// };
// const career = {
//   education: "MSCS",
//   year: "2012",
// };

// const samObj = Object.assign({}, p),
// p.name = "harry";

// const samObj = {
//   ...p,
//   ...career,
// };

// const { name, ...rest } = samObj;
// console.log(samObj, name, rest);

// const a = ["p", 34, true];
// const b = ["aa", "dd", false];
// const combo = [...a, ...b];
// const combo = Object.assign ([], b);
// console.log(combo);
// const c = a.concat(b);
// console.log(c);

// =====Date=====

// const today = Date();
// const today = Date.now();
// const today = new Date("2023-8-29");

// const data = today.toLocalDateString();
// const data = today.getDay();
// const data = today.getFullYear();
// const data = todayt.getMonth();
// const data = todayt.getMinutes();

// console.log(today);

// Challenge #1: Create a function that takes foods and the expire date and returns one of the following:
//1. If expired: AB is expired 4 days ago
//2. If not expired: you have 10 days to use this product.

//1. create couple food objects  with name and exp date
//2.Create one function which checks the data return message link above

// const foods = [
//   { name: "Tuna", expireDate: new Date("2023-10-15") },
//   { name: "Mile", expireDate: new Date("2023-09-15") },
// ];

// function checkExpiry(foods) {
//   const today = new Date();
//   const messages = [];

//   foods.forEach((foods) => {
//     const { name, expireDate } = foods;
//     const diffTime = expireDate - today;
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//     if (diffDays < 0) {
//       messages.push(`${name} is expired ${Math.abs(diffDays)} days ago`);
//     } else {
//       messages.push(`You have ${diffDays} days to use ${name}`);
//     }
//   });

//   return messages;
// }

// const expiryMessages = checkExpiry(foods);
// expiryMessages.forEach((message) => console.log(message));

function CoveringNumbers(num) {
  const str = num.toString();
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "0") {
      counter++;
    }

    if (char !== "0" && i !== str.indexOf(char)) {
      return -1;
      break;
    }
  }

  return counter;
}
console.log(CoveringNumbers(340512233));
