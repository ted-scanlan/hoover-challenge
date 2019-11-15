const { Hoover } = require('./hoover')







//
// function runProgram(input) {
//   console.log(input);
//   const directions = getDirections(input)
//   hoover = new Hoover(input)
//   for(var i = 0; i <= directions.length-1; i++) {
//   hoover.processMove(directions[i]);
//   }
//   let result = hoover.outcome();
//     console.log(result);
//     return result
//   }

class Program {
constructor(instructions, hoover = Hoover) {
  console.log(instructions);
  this.hoover = new hoover(instructions),
  this.directions = this.getDirections(instructions);
}

run() {
  for(var i = 0; i <= this.directions.length-1; i++) {
    this.hoover.processMove(this.directions[i]);
  }
  let result = this.hoover.outcome();
  return result
}

  getDirections(input) {
  return input[input.length-2].split("")
}

}





  module.exports = {
    // getDirections,
      Program
  };
