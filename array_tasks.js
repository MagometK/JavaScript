// find element by it's index
let animals = ["cat", "dog", "parrot", "horse"];
console.log("Index of parrot is " + animals.indexOf("parrot"));

// delete elements from the array
animals = animals.concat(["fish", "chicken", "lion"]);
console.log(animals);

// remove "cat"
animals.shift();
console.log(animals);

// remove fish #1
let fish_index = animals.indexOf("fish");
animals.splice(fish_index, 1);
console.log(animals);

animals = ["cat", "dog", "parrot", "horse", "fish", "chicken", "lion"];
console.log(animals);

// remove last two elements
console.log(animals.slice(0, animals.length - 2));

// remove fish #2
var animalsNew = animals.filter(function (value, index, array) {
  return value != "fish";
});
console.log(animalsNew);

// filter an array
let array = [31, 10, "chicken", 9, "fish", 10];
console.log(array);

// find only 10
var filtered = array.filter(function (value, index, array) {
  return value == 10;
});
console.log(filtered);

// find only strings
var filteredStrings = array.filter(function (value, index, array) {
  return typeof value === "string";
});
console.log(filteredStrings);
