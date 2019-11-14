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
}



module.exports = {
       Hoover
     };
