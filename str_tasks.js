let string = "Я изучаю JavaScript";

// find 1st, 3rd and last element from the string
console.log(string[0]); // first element
console.log(string[2]); // third element
console.log(string[string.length - 1]); // last element

// change character at specific index of the string
String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

let stringTwo = string.replaceAt(7, "л");
console.log(stringTwo);

// change JavaScript to Frontend
let stringThree = string.substring(0, 9) + "Frontend";
console.log(stringThree);
