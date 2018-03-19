const { red, green } = require('chalk')
const path = require('path')

const filename = path.join(__dirname, 'test.txt')

console.log(green(filename));
