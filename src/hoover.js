class Hoover {
  constructor(input) {
    this.room = input[0].split(" ").map(Number)
    this.coords = input[1].split(" ").map(Number)
    this.dirtCoords = getDirtCoords(input),
    this.patchesCleaned = 0


    function getDirtCoords(input) {
      let dirtCoords = []
      let coords = input.slice(2,(input.length-2))
      for(var i = 0; i < coords.length; i++) {
        let formatCoords = coords[i].split(" ").map(Number);
        dirtCoords.push(formatCoords)
      }
      return dirtCoords;
    }
  }

  processMove(direction) {

    if(direction == "N" || direction == "S") {
      this.coords = this.calculateYCoords(direction);
    }else if(direction == "E" || direction == "W") {
      this.coords = this.calculateXCoords(direction);
    }
    else {
      this.coords = "incorrect direction inputted"
    }
    this.checkForDirt(this.coords)
    return this.coords;
  }

  calculateYCoords(direction) {
    if(direction == "N") {
      if((this.coords[1] + 1) < this.room[1]) {
        this.coords[1] += 1;
      }
      return this.coords;
    }
    if(direction == "S") {
      if((this.coords[1] - 1) < this.room[1]) {
        this.coords[1] -= 1;
      }
      return this.coords;
    }
  }

  calculateXCoords(direction) {
  if(direction == "W") {
    if((this.coords[0] - 1) < this.room[0]) {
      this.coords[0] -= 1;
    }
    return this.coords;
  }
  if(direction == "E") {
    if((this.coords[0] + 1) < this.room[0]) {
      this.coords[0] += 1;
    }
    return this.coords;
  }
}

  checkForDirt(position) {

   for(var i = 0; i <= (this.dirtCoords.length-1); i++) {
     if(this.dirtCoords[i].toString() == position.toString()) {
       this.dirtCoords.splice(i, i)
       this.patchesCleaned+=1;
      }
    }
 }
  outcome() {
  return `${this.coords.join(' ')}\n${this.patchesCleaned}`
  }

}

module.exports = {
       Hoover
     };
