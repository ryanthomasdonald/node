// IIFE

const $ = (() => {
    let jQuery = {};
    let add = (num1, num2) => {
        return num1 + num2;
    }
    let multiply = (num1, num2) => {
        return num1 * num2;
    }

    jQuery.add = add;
    jQuery.multiply = multiply;

    return jQuery;
})()

let result = $.add(4, 5);

console.log(result)