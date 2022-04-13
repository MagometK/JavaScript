// function declaration
function sayHi() {
  const x = "Hello";
  return x;
}

// function expression
var test = function (num) {
  return num;
};

console.log(sayHi); // display function
console.log(sayHi()); // call the function
console.log(test); // display function itself
console.log(test(41)); // call the funciton

try {
  const temp = 4;
  temp = 1; // will cause a error
} catch (error) {
  console.log(error); // show that error in console and continue
}

// user is an object with property 'name'
let user = {
  name: "Magomet",
};

let admin = user; // points to 'name'

console.log("done");

if (user.hasOwnProperty("name")) console.log("user is " + user.name);

console.log(admin.name);
console.log(user.z); // undefined

let x = "14e";
let num = parseInt(x, 10);
console.log(typeof x);
console.log(num);

/////////////////////////////////////////////////////////////
// MATH
/////////////////////////////////////////////////////////////

// nearest integer
console.log(Math.round(10.45)); // 10
console.log(Math.round(10.5)); // 11

// smallest integer
console.log(Math.floor(10.45)); // 10
console.log(Math.floor(10.9)); // 10

// biggest integer
console.log(Math.ceil(10.45)); // 11
console.log(Math.ceil(10.89)); // 11

// drop all numbers after the floating point
console.log(Math.trunc(10.5)); // 10

// rounding with specific amount of numbers after floating point
console.log(Math.round(10.52844 * 1000) / 1000); // 10.528

/////////////////////////////////////////////////////////////
// STRINGS
/////////////////////////////////////////////////////////////

let mumbling = "ahsdasdjasldqeqw";
console.log(mumbling.length); // length of the string

let emptyString = "";
let notSoEmptyString = " ";
console.log(Boolean(emptyString)); // is empty ?
console.log(Boolean(notSoEmptyString));

// here we get chars from the string and store them as an array
let tempString = "test your code";
let charOfTempString = tempString.split("");
console.log(charOfTempString);

// convert string to UPPERCASE and back to lowercase
let lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
console.log(lowerCaseString.toLocaleUpperCase());
console.log(lowerCaseString.toLowerCase());

// check string for a specific word
let includeString = "This string includes some words";
console.log(includeString.includes("words")); // true

/////////////////////////////////////////////////////////////
// ARRAYS
/////////////////////////////////////////////////////////////

let array = [2, "js", 44, 16, "words", 5.2, "help me"]; // empty array
console.log(array[1]); // "js"
console.log(array[7]); // undefined

// add elements
array.push([0, 1, 2]);
console.log(array[3]); // [0, 1, 2]

array.unshift("first");
console.log(array[0]); // first
console.log(array);

// remove elements
array.shift(); // from the start
console.log(array);

array.pop(); // from the end
console.log(array);

array.splice(1, 2); // remove elements from index 1 up to 2
console.log(array);

console.log(array.includes("help me")); // check if array contains specific element
console.log(array.indexOf("help me", 3)); // get index of 'help me' element
console.log("index of 44 is " + array.lastIndexOf("words", 4)); // same as above but from right to left

let newArray = array.concat([4, 11, 93, "LiteC"]); // copy given elements at the end of the 'array' and return new array
console.log(newArray);

let newArrayTwo = array.splice(0, 3); // create and return new array with elements from index 0 up to 3
console.log("newArrayTwo: " + newArrayTwo);

// cycle though the array
newArrayTwo.forEach(function (item, index, array) {
  console.log(item);
});

array = [3, 66, 32, "t", 111, 5, 1];
array.sort(); // coverts numbers to strings and doesn't sort numbers correctly
console.log(array);

array.sort((a, b) => a - b); // sort numbers using arrow function
console.log(array);

array.reverse(); // reverse the position of elements
console.log(array);

function compareNumeric(a, b) {
  if (a > b) return 1; // 1st element is bigger than 2nd
  if (a == b) return 0; // they are equal
  if (a < b) return -1; // 1st element is smaller than 2d
}

array.sort(compareNumeric); // or with function
console.log(array);

let arrayOfNames = ["Justin", "Felix", "Sidney"];
console.log(arrayOfNames);
console.log(arrayOfNames.join(";")); // array to string and elements separated with ;

console.log(Array.isArray(arrayOfNames)); // true because arrayOfNames is an array

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Mike" },
  { id: 3, name: "Tom" },
];

let firstUser = users.find((item) => item.id == 1); // find with id 1
console.log(firstUser.name); // John

let someUsers = users.filter((item) => item.id < 3); // find with id smaller than 3
console.log(someUsers.length); // 2 users

let lengths = users.map((item) => item.name.length); // get lengths of all names
console.log(lengths); // 4, 4, 3

/////////////////////////////////////////////////////////////
// ARRAY DESTRUCTURING
/////////////////////////////////////////////////////////////

let [firstName, secondName] = ["Ivan", "Igor"];
console.log(firstName); // Ivan
console.log(secondName); // Igor

let arrayStringToDest = "Юлий Цезарь Император Рима";

let [, alias] = arrayStringToDest.split(" ");
console.log(alias); // Цезарь

let [, , title, ...rest] = arrayStringToDest.split(" ");

console.log(title);
console.log(rest);

let [, , day, something] = "Today is Monday".split(" ");
console.log(day);
console.log(something); // undefined to avoid use default initialization

let [a = "a", b = "b", c = "c"] = "A B".split(" ");
console.log(a);
console.log(b);
console.log(c);
