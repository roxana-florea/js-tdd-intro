const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE


let capitalizeFirst = (word) => {
    return word.length > 0
    ? word.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ') 
    : ''
       }
  

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirst, 'function');

// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirst.length, 1);

// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirst('java script'), 'Java Script');

//Check string with one word
assert.strictEqual(capitalizeFirst('bla'), 'Bla');

// Check that it works for a number
assert.strictEqual(capitalizeFirst(5), '');

// Check that it works for an empty string
assert.strictEqual(capitalizeFirst(''), '');

