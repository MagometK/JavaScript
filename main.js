
function sayHi()
{
    const x = "Hello"
    return x
}

var test = function(num) {
    return num;
}

console.log(sayHi)
console.log(sayHi())
console.log(test)
console.log(test(41))

var setName = function(name){
    return name;
}

console.log(setName("Magomet"))

try {
    const temp = 4
    temp = 1
} catch (error) {
    console.log(error)
}

console.log("done")