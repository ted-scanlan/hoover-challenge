const { Program } = require('./program')

var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split("\n");

const program = new Program(input)
const result = program.run();
console.log(result);
