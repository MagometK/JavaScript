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
