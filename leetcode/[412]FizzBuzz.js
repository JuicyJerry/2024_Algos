// SOLUTION 1
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
        if ((i + 1) % 15 === 0) arr.push('FizzBuzz'); 
        else if ((i + 1) % 3 === 0) arr.push('Fizz'); 
        else if ((i + 1) % 5 === 0) arr.push('Buzz'); 
        else arr.push((i + 1) + "");
    }
    return arr;
};


// SOLUTION 2
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const arr = [];

    for (let i = 1; i <= n; i++) {
        switch(true) {
            case i % 3 === 0 && i % 5 === 0:
                arr.push('FizzBuzz');
                break;
            case i % 3 === 0:
                arr.push('Fizz');
                break;
            case i % 5 === 0:
                arr.push('Buzz');
                break;
            default:
                arr.push(`${i}`)
        }
    }
    return arr;
};