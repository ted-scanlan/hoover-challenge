const { Hoover } = require('./hoover')

class Program {
  constructor(instructions, hoover = Hoover) {
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
