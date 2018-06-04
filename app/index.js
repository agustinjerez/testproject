'use strict';

var calculator = require('/Users/sugus/tests/testproject/app/calculator');

var a = 10;
var b = 20;

console.log(`Add ${a} + ${b} = ${calculator.add(a,b)}`);
console.log(`Minus ${a} - ${b} = ${calculator.minus(a,b)}`);
console.log(`Multiply ${a} * ${b} = ${calculator.multiply(a,b)}`);
console.log(`Divide ${a} / ${b} = ${calculator.divide(a,b)}`);