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
})
