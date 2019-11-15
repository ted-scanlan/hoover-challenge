const { Program } = require('../../src/program');

let double = [ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW', '' ]

test('should remove nulls from list of languages', () => {

const program = new Program(double)
expect(program.run()).toEqual("1 3\n1")})
