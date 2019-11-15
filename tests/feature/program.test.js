const { Program } = require('../../src/program');

let mock_instructions = [ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW', '' ]
let mock_instructions2 = [ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNNNNNNNN', '' ]

test('return the correct outcome for given input', () => {
const program = new Program(mock_instructions)
expect(program.run()).toEqual("1 3\n1")})

test('it stays within boundaries', () => {
const program = new Program(mock_instructions2)
expect(program.run()).toEqual("1 4\n0")})
