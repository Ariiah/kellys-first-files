const { red, green, cyan } = require('chalk')
const path = require('path')
const fs = require('fs')

const filename = path.join(__dirname, 'test.txt')
// console.log(green(filename));

// fs.readdir(__dirname, (err, files) => {
//   if (err) {
//     console.log(red(err));
//   } else {
//   console.log(files);
//   }
// })
// console.log(cyan('herro'));
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  const lines = data.split('\n').filter(x => x.length > 0)
  console.log(lines);
})
