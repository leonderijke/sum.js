var recursum = require('./recursum');
var loopsum = require('./loopsum');
var redusum = require('./redusum');

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log('recursum : ' + recursum(numbers));
console.log('loopsum : ' + loopsum(numbers));
console.log('redusum : ' + redusum(numbers));
