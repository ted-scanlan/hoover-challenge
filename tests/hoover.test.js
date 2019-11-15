const { Hoover } = require('../src/hoover');


describe('Hoover', () => {
  // do a before each with a hoover
  describe('Constructor', () => {

    it('stores the room size correctly', () => {
      const hoover = new Hoover([ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW', '' ])
      expect(hoover.room).toEqual([5, 5])
    })
    it('stores the hoovers current location', () => {
      const hoover = new Hoover([ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW', '' ])
      expect(hoover.coords).toEqual([1, 2])
    })
    it('stores patches cleaned', () => {
      const hoover = new Hoover([ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW', '' ])
      expect(hoover.patchesCleaned).toEqual(0)
    })
  })

  describe('getDirtCoords', () => {

    it('can return an array of locations of dirt',() => {
      const hoover = new Hoover([ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW', '' ])
      expect(hoover.dirtCoords).toEqual(
        [[1,0], [2,2], [2,3]]
      )
    })
  })

  describe('processMove', () => {
    it('increases the Y coord by 1 if N is inputted',() => {
      const hoover = new Hoover([ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW', '' ])
      expect(hoover.processMove("N")).toEqual([1,3])
    })

    it('does not move the hoover if at edge of Y boundary', () => {
      const hoover = new Hoover([ '5 5', '1 5', '1 0', '2 2', '2 3', 'NNESEESWNWW', '' ])
      expect(hoover.processMove("N")).toEqual([1,5])
    })

    it('does not move the hoover if at edge of X boundary', () => {
      const hoover = new Hoover([ '5 5', '5 1', '1 0', '2 2', '2 3', 'NNESEESWNWW', '' ])
      expect(hoover.processMove("E")).toEqual([5,1])
    })


    //
    // it('decreases the Y coord by 1 if S is inputted',() => {
    //   const hoover = new Hoover([ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW', '' ])
    //   expect(hoover.processMove("S")).toEqual([1,1])
    // })
    //
    //
    // it('can increases the X coord by 1 if E is inputted',() => {
    //   const hoover = new Hoover([ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW', '' ])
    //   expect(hoover.processMove("E")).toEqual([2,2])
    // })
    //
    // it('can decreases the X coord by 1 if W is inputted',() => {
    //   const hoover = new Hoover([ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW', '' ])
    //   expect(hoover.processMove("W")).toEqual([0,2])
    // })
  })

  describe('calculateYCoords', () => {
    it('increases Y coordinate if N input', () => {
      const hoover = new Hoover([ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW', '' ])
      expect(hoover.calculateYCoords("N")).toEqual([1, 3])
    })

    it('decreases Y coordinate if S input', () => {
      const hoover = new Hoover([ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW', '' ])
      expect(hoover.calculateYCoords("S")).toEqual([1, 1])
    })

  })
  describe('calculateXCoords', () => {
    it('increases X coordinate if E input', () => {
      const hoover = new Hoover([ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW', '' ])
      expect(hoover.calculateXCoords("E")).toEqual([2, 2])
    })

    it('decreases X coordinate if W input', () => {
      const hoover = new Hoover([ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW', '' ])
      expect(hoover.calculateXCoords("W")).toEqual([0, 2])
    })

  })


})
