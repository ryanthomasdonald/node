// {[()]} - brackets are balanced

// {([)]} - unbalanced

const Stack = require("./stack");
const stack = new Stack();

let brackets = "{[()]}"

// split string into array
let splitBrackets = brackets.split("")
console.log(splitBrackets)
// pop last bracket and compare to first bracket
while (splitBrackets.length > 0){
    let lastBracket = splitBrackets.pop()               // doesn't work (as far as I got)
    console.log(lastBracket)
    let firstBracket = splitBrackets[0]
    console.log(firstBracket)
}