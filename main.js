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
