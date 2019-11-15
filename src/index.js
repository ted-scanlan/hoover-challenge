const { Hoover } = require('./hoover')
var fs = require('fs');

var input = fs.readFileSync('input.txt').toString().split("\n");

runProgram(input);


function getDirections(input) {
  return input[input.length-2].split("")
}

function runProgram(input) {
  const directions = getDirections(input)
  hoover = new Hoover(input)
  for(var i = 0; i <= directions.length-1; i++) {
  hoover.processMove(directions[i]);
  }
  let result = hoover.outcome();
    console.log(result);
    return result
  }




  module.exports = {
    getDirections,
      runProgram
  };
